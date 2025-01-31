// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DrugSupplyChain {

    struct Drug {
        string name;
        string manufacturer;
        uint256 batchNumber;
        uint256 timestamp;
        address currentOwner;
    }

    mapping(uint256 => Drug) public drugs; // Store drugs by batch number
    mapping(address => uint256[]) public userDrugs; // Track drugs owned by an address

    event DrugAdded(uint256 batchNumber, string name, string manufacturer);
    event OwnershipTransferred(uint256 batchNumber, address from, address to);

    function addDrug(uint256 _batchNumber, string memory _name, string memory _manufacturer) public {
        require(drugs[_batchNumber].batchNumber == 0, "Drug batch already exists.");
        
        drugs[_batchNumber] = Drug(_name, _manufacturer, _batchNumber, block.timestamp, msg.sender);
        userDrugs[msg.sender].push(_batchNumber);

        emit DrugAdded(_batchNumber, _name, _manufacturer);
    }

    function transferOwnership(uint256 _batchNumber, address _newOwner) public {
        require(drugs[_batchNumber].currentOwner == msg.sender, "Only the current owner can transfer ownership.");
        
        address oldOwner = drugs[_batchNumber].currentOwner;
        drugs[_batchNumber].currentOwner = _newOwner;
        emit OwnershipTransferred(_batchNumber, oldOwner, _newOwner);
    }

    function getDrugDetails(uint256 _batchNumber) public view returns (string memory, string memory, uint256, uint256, address) {
        Drug memory drug = drugs[_batchNumber];
        return (drug.name, drug.manufacturer, drug.batchNumber, drug.timestamp, drug.currentOwner);
    }
}
