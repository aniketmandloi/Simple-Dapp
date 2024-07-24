// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData;

    // Function to set the value of the storedData
    function set(uint256 x) public {
        storedData = x;
    }

    // Function to get the value of the storedData
    function get() public view returns (uint256) {
        return storedData;
    }
}
