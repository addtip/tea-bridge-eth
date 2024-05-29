const ethers = require('ethers');

// 生成一个随机的以太坊钱包
function generateRandomWallet() {
    const wallet = ethers.Wallet.createRandom();
    console.log('Random wallet generated:', wallet.address, wallet.privateKey);
    return wallet;
}

module.exports = {
    generateRandomWallet
};
