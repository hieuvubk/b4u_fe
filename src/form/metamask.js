import React, {useState} from 'react';
// import { connectMetaMash, getWallet } from '../connect/helper';
const helper = require('../connect/helper');

const MetaMaskForm = () => {
    return (
        <div className="App">
          <header className="App-header">
            <Button variant="secondary" onClick={helper.connectMetaMash()} disabled={!helper.getWallet()}>
              <div>
                Connect to MetaMask
              </div>
            </Button>
            <div className="mt-2 mb-2">
              Connected Account: { helper.getWallet() ? helper.getWallet() : '' }
            </div>
          </header>
        </div>
      );
}

export default MetaMaskForm