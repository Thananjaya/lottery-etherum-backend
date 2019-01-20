const assert = require('assert');
const ganache = require('ganache-cli');
//it has capital 'W', which means its used to create instance
const Web3 = require('web3');
// this one is used to call provider from ganache library 
// ganache used to provide nodes locally, instead of setting up in real time
const provider = ganache.provider();
const instance = new Web3(provider);
const { interface, bytecode } = require('../compile');

// let accounts;
// let inbox;
// const message = 'Hello world';
// const newMessage = 'My First Contract';
//
// beforeEach(async () => {
//   // getting all the unlocked accounts from ganache
//   // everytime we run, it gives different set of accounts
//   accounts = await instance.eth.getAccounts();
//   // use one of this account to deploy the contract
//   inbox = await new instance.eth.Contract(JSON.parse(interface))
//     .deploy({data: bytecode, arguments: [message]})
//     .send({from: accounts[0], gas: '1000000'});
//   inbox.setProvider(provider);
// });
//
// describe('Inbox', () => {
//   it('deploys an contract', () => {
//     assert.ok(inbox.options.address)
//   });
//   it('has a default message', async () => {
//     // message() is used to call the public functions in contract, we can send the arguements along with it if required
//     const messageInNetwork = await inbox.methods.message().call();
//     assert.equal(messageInNetwork, message)
//   });
//   it('can update message', async () => {
//     await inbox.methods.setMessage(newMessage).send({ from: accounts[0] });
//     const newMessageInNetwork = await inbox.methods.message().call();
//     assert.equal(newMessageInNetwork, newMessage);
//   });
// });
