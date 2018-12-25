const truffleProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');
const provider = new truffleProvider(
  'open pride vacant cushion soccer shadow eager omit robust soft armed loan',
  'https://rinkeby.infura.io/v3/ffd2deb0df864ae299640e5d442c4eaa'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello World!'] })
    .send({ from: accounts[0], gas: '1000000' });
}

deploy();