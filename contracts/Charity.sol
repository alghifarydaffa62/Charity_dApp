// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Charity {
    address public owner;
    address public recipient;
    string public title;
    string public desc;
    uint public targetAmount;
    uint public balance;
    uint public deadline;
    bool public isCompleted;

    event donateSuccess(address indexed donator, uint256 amount);
    event CharitySended(address indexed owner, address indexed recipient, uint256 amount);
    event CharityClosed(address indexed owner);

    constructor(
        string memory _title, 
        string memory _desc, 
        address _recipient, 
        uint _targetAmount, 
        uint _deadline,
        address _owner
    ) {
        title = _title;
        desc = _desc;
        recipient = _recipient;
        targetAmount = _targetAmount;
        deadline = _deadline;
        owner = _owner;
        balance = 0;
        isCompleted = false;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner!");
        _;
    }

    function donate() external payable {
        require(msg.value > 0, "Must send ether!");
        require(!isCompleted, "Charity donations are closed!");
        require(block.timestamp <= deadline, "Charity donation are closed!");

        balance += msg.value;

        emit donateSuccess(msg.sender, msg.value);
    }

    function SendCharity() external payable onlyOwner {
        require(!isCompleted, "Charity is still active!");
        require(balance > 0, "No funds to send!");
        require(block.timestamp > deadline, "Charity is still active!");

        uint amount = balance;
        balance = 0;

        (bool success,) = recipient.call{value: amount}("");
        require(success);

        emit CharitySended(msg.sender, recipient, amount);
    }

    function CloseIfExpired() public {
        if (!isCompleted && block.timestamp > deadline) {
            isCompleted = true;
            emit CharityClosed(msg.sender);
        }
    }
}