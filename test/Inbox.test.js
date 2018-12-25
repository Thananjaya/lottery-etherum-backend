const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //it has capital 'W', which means its used to create instance
const instance = new Web3(ganache.provider()); // this one is an web3 instance for calling provider from ganache library
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // getting all the unlocked accounts from ganache
  // everytime we run, it gives different set of accounts
  accounts = await instance.eth.getAccounts();
  // use one of this account to deploy the contract
  inbox = await new instance.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hello World!']})
    .send({from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
  it('deploys an contract', () => {
    console.log(inbox);
  })
});
