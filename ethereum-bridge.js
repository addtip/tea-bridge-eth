const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// 连接到本地以太坊节点
const web3 = new Web3('http://localhost:8545');

// 读取智能合约代码
const contractCode = fs.readFileSync(path.resolve(__dirname, './contracts/Token.sol'), 'utf8');

// 部署智能合约
async function deployContract() {
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

// 发送以太坊交易
async function sendTransaction(from, to, value) {
    try {
        const tx = await web3.eth.sendTransaction({
            from: from,
            to: to,
            value: value
        });
        console.log('Transaction sent:', tx);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

// 监听智能合约事件
function listenContractEvents(contract) {
    contract.events.Transfer({ fromBlock: 0 }, (error, event) => {
        if (error) {
            console.error('Error listening to contract event:', error);
            return;
        }
        console.log('Transfer event:', event.returnValues);
    });
}

module.exports = {
    deployContract,
    sendTransaction,
    listenContractEvents
};
