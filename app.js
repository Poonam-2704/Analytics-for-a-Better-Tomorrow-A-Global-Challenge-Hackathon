// Web3 and Truffle Contract setup
let web3;
let contract;
let userAccount;

// Set the contract ABI and address
const contractABI = [{
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "batchNumber",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "manufacturer",
        "type": "string"
      }
    ],
    "name": "DrugAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "batchNumber",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "drugs",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "manufacturer",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "batchNumber",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "currentOwner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userDrugs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_batchNumber",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_manufacturer",
        "type": "string"
      }
    ],
    "name": "addDrug",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_batchNumber",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_batchNumber",
        "type": "uint256"
      }
    ],
    "name": "getDrugDetails",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];
const contractAddress = "0xd6e00c44798E98540a914236bE41080d8Eeb217C"; // The contract address after deployment

// Initialize Web3.js and connect to the Ethereum provider
if (typeof window.ethereum !== 'undefined') {
  web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
    userAccount = accounts[0];
    contract = new web3.eth.Contract(contractABI, contractAddress);
  });
} else {
  alert("Please install MetaMask to use this app!");
}

// Add drug to the supply chain
document.getElementById('addDrugForm').addEventListener('submit', event => {
    event.preventDefault();
  const batchNumber = document.getElementById('batchNumber').value;
  const drugName = document.getElementById('drugName').value;
  const manufacturer = document.getElementById('manufacturer').value;

  contract.methods.addDrug(batchNumber, drugName, manufacturer)
    .send({ from: userAccount })
    .then(receipt => {
      alert('Drug added successfully!');
    })
    .catch(error => {
      alert('Error adding drug!');
    });
});

// Transfer ownership of a drug
document.getElementById('transferOwnershipForm').addEventListener('submit', event => {
    event.preventDefault();  
    const batchNumber = document.getElementById('batchNumber').value;
    const newOwner = document.getElementById('newOwner').value;

  contract.methods.transferOwnership(batchNumber, newOwner)
    .send({ from: userAccount })
    .then(receipt => {
      alert('Ownership transferred successfully!');
    })
    .catch(error => {
      console.error(error);
      alert('Error transferring ownership!');
    });
});
document.getElementById('viewDrugForm').addEventListener('submit', event => {
    event.preventDefault();
    const batchNumber = document.getElementById('viewBatchNumber').value;
  
    contract.methods.getDrug(batchNumber).call()
      .then(drug => {
        const drugDetails = `
          <p><strong>Drug Name:</strong> ${drug[0]}</p>
          <p><strong>Batch Number:</strong> ${drug[1]}</p>
          <p><strong>Manufacturer:</strong> ${drug[2]}</p>
          <p><strong>Current Owner:</strong> ${drug[3]}</p>
        `;
        document.getElementById('drugDetails').innerHTML = drugDetails;
      })
      .catch(error => {
        alert('Error retrieving drug details!');
      });
  });