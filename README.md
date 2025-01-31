# Analytics-for-a-Better-Tomorrow-A-Global-Challenge-Hackathon
Blockchain-Based Pharmaceutical Supply Chain
Overview
The Blockchain-Based Pharmaceutical Supply Chain project leverages blockchain technology to ensure the authenticity and traceability of pharmaceutical products. By creating a secure and transparent system, this project aims to prevent counterfeit drugs from entering the supply chain and enhance trust among manufacturers, distributors, pharmacies, and consumers.

Key Features
Drug Registration on Blockchain – Each drug batch receives a unique identifier stored securely on the blockchain.
Ownership Tracking – Ensures a transparent transfer of drugs from manufacturers to distributors and pharmacies.
Data Integrity – Blockchain records cannot be altered, preventing fraud and counterfeiting.
User Verification – Consumers can verify drug authenticity by checking its history on the blockchain.
Technology Stack
Blockchain: Ethereum, Ganache
Smart Contracts: Solidity, Truffle, Remix IDE
Frontend: HTML, Bootstrap, JavaScript, Web3.js
Testing: Mocha, Chai
Storage: IPFS / Cloud Storage
Hosting: AWS / Azure
Setup Instructions
Prerequisites
Ensure you have the following installed:

Node.js (with npm)
Truffle (npm install -g truffle)
Ganache (for local blockchain development)
MetaMask (browser extension for Ethereum transactions)
Installation Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/pharma-supply-chain.git
cd pharma-supply-chain
Install dependencies:

bash
Copy
Edit
npm install
Start Ganache and ensure it is running on port 7545.

Deploy the smart contract:

bash
Copy
Edit
truffle migrate --reset
Open index.html in a browser with MetaMask connected to the correct network.

How It Works
Connect MetaMask to an Ethereum account.
Register Drugs with batch details and manufacturer information.
Transfer Ownership to track the drug’s movement through the supply chain.
Verify Authenticity by checking the blockchain record for any registered drug.
Snapshots
Below are some snapshots of the application interface:
Home Page
![Screenshot 2025-01-31 104227](https://github.com/user-attachments/assets/4e0d2a5f-9756-4bba-840f-de501461f26f)

![Screenshot 2025-01-31 104153](https://github.com/user-attachments/assets/b9670466-1def-4b20-b1d8-c3bc56efb363)
![Screenshot 2025-01-31 104203](https://github.com/user-attachments/assets/ad8589ca-252c-442e-8391-9eaaf555fa8d)

![Screenshot 2025-01-31 103907](https://github.com/user-attachments/assets/c3d57c9a-1c6c-4de9-87af-cc181a1c5710)

![image](https://github.com/user-attachments/assets/26e8ace3-13e7-4eb8-bf01-1e1d2f161818)
![Screenshot 2025-01-31 104108](https://github.com/user-attachments/assets/ae81c683-20cb-49b1-a7f5-b3edb63d5e06)
![Screenshot 2025-01-31 104055](https://github.com/user-attachments/assets/a77d4de0-759d-4960-94c5-5d288144062e)
![Screenshot 2025-01-31 104041](https://github.com/user-attachments/assets/fd2430cd-fc59-417e-835f-d6ea644637f2)
![Screenshot 2025-01-31 104304](https://github.com/user-attachments/assets/101d55e8-4f99-40b5-ac45-0d0775c670e7)

Balance Left:
![Screenshot 2025-01-31 130344](https://github.com/user-attachments/assets/45e80f98-391c-42e5-bb3c-88ecd53d698d)



Future Enhancements
QR Code Integration for easy drug verification.
IoT Sensor Support to track environmental conditions in the supply chain.
Hyperledger Fabric Integration for private and permissioned blockchain networks.
License
This project is open-source under the MIT License.

Contribution
Contributions are welcome. Please open an issue or submit a pull request to suggest improvements.

Let me know if you need further refinements or additional sections. 🚀
