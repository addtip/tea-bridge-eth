const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // 这里的地址是以太坊节点的地址，根据实际情况进行修改

// 示例函数，发送以太坊交易
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

module.exports = {
    sendTransaction
};
