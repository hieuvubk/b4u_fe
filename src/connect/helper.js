import Web3 from 'web3';

module.exports = {
  connectMetaMask: async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return accounts[0];
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const accounts = window.web3.eth.getAccounts();
      return accounts[0];
    }
  },

  getWallet: () => {
    const web3 = new Web3(window.web3.currentProvider);
    const accounts = web3.eth.getAccounts();
    return accounts[0];
  },
};
