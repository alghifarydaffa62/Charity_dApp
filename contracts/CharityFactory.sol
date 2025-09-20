// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import './Charity.sol';

contract CharityFactory {
    mapping(address => address[]) public userCharities;
    address[] public allCharities;

    event CharityCreated(address indexed owner, address charityAddr, string title);

    function createCharity(
        string memory _title,
        string memory _desc,
        address _recipient,
        uint _targetAmount,
        uint _deadline
    ) external returns (address) {
        require(_deadline > block.timestamp, "Deadline must be in the future");
        require(_targetAmount > 0, "Target must be more than zero");
        require(_recipient != address(0), "Invalid address");
        require(bytes(_title).length > 0, "Invalid Title");
        require(bytes(_desc).length > 0, "Invalid Desc");

        Charity newCharity = new Charity(
            _title,
            _desc,
            _recipient,
            _targetAmount,
            _deadline,
            msg.sender
        );

        address charityAddress = address(newCharity);
        userCharities[msg.sender].push(charityAddress);
        allCharities.push(charityAddress);

        emit CharityCreated(msg.sender, charityAddress, _title);

        return charityAddress;
    }

    function getCharitiesByUser(address _user) external view returns(address[] memory){
        return userCharities[_user];
    }
    
    function getAllCharities() external view returns(address[] memory) {
        return allCharities;
    }

    function getCharitiesCount() external view returns (uint) {
        return allCharities.length;
    }

    function getUserCharitiesCount(address _user) external view returns(uint) {
        return userCharities[_user].length;
    }
}