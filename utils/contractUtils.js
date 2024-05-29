const fs = require('fs');
const path = require('path');
const Web3 = require('web3');

const web3 = new Web3('http://localhost:8545');

// 部署智能合约
async function deployContract(contractCode) {
    try {
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(JSON.parse(contractCode));
        const deployedContract = await contract.deploy({ data: '0x' + contractCode }).send({ from: accounts[0], gas: 1500000 });
        console.log('Contract deployed at address:', deployedContract.options.address);
        return deployedContract;
    } catch (error) {
        console.error('Error deploying contract:', error);
    }
}

module.exports = {
    deployContract
};
