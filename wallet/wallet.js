const Web3 = require('web3');

// 连接到本地以太坊节点
const web3 = new Web3('http://localhost:8545');

// 验证钱包地址是否有效
function isValidAddress(address) {
    return web3.utils.isAddress(address);
}

// 签名交易
async function signTransaction(txParams, privateKey) {
    try {
        const signedTx = await web3.eth.accounts.signTransaction(txParams, privateKey);
        return signedTx.rawTransaction;
    } catch (error) {
        console.error('Error signing transaction:', error);
        return null;
    }
}

module.exports = {
    isValidAddress,
    signTransaction
};
