// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import './Charity.sol';

contract CharityFactory {
    mapping(address => Charity[]) public CharityData;
    Charity[] public allCharities;

    event CharityCreated(address indexed owner, address charityAddr);

    function createCharity(
        string memory _title,
        string memory _desc,
        address _recipient,
        uint target,
        uint deadline
    ) external {
        require(deadline > block.timestamp, "Deadline must be in the future");
        require(target > 0, "Target mus be more than zero");
        require(_recipient != address(0), "Invalid address");

        Charity newCharity = new Charity(
            _title,
            _desc,
            _recipient,
            target,
            deadline
        );

        CharityData[msg.sender].push(newCharity);
        allCharities.push(newCharity);

        emit CharityCreated(msg.sender, address(newCharity));
    }

    function getCharitiesByUser(address _user) external view returns(Charity[] memory){
        return CharityData[_user];
    }
    
    function getAllCharities() external view returns(Charity[] memory) {
        return allCharities;
    }
}