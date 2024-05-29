const Web3 = require('web3');

// 连接到本地以太坊节点
const web3 = new Web3('http://localhost:8545');

module.exports = {
    web3
};
