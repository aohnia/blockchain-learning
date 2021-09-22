//SPDX-License_Identifier: MIT 

pragma solidity ^0.6.0 ; 

import "./simpleStorage.sol";

contract StorageFactory {
    
    SimpleStorage[] public simpleStorageArray;
    
    function createSimpleStorageFunction() public {
        
        SimpleStorage simpleStorage = new SimpleStorage();
        simpleStorageArray.push(simpleStorage);
        
    }
    
    
    function sFStore(uint256 _simpleStorageIndex, uint256 _simpleStorageNumber) public {
        SimpleStorage(address(simpleStorageArray[_simpleStorageIndex])).store(_simpleStorageNumber);
    }
    
    function sFGet(uint256 _simpleStorageIndex) public view returns(uint256) {
         return SimpleStorage(address(simpleStorageArray[_simpleStorageIndex])).retrieve();
        
    }
    
}