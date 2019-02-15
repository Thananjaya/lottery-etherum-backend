const assert = require('assert');
// this one is used to call provider from ganache library
// ganache used to provide nodes locally, instead of setting up in real time
const ganache = require('ganache-cli');
const Web3 = require('web3');
const instance = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let lottery;

beforeEach(async () => {
  accounts = await instance.eth.getAccounts();
  lottery = await new instance.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' })
});

describe('Lottery contract', () => {

  it('contract been deployed', () => {
    assert.ok(lottery.options.address);
  });

  it('allows one player to enter', async () => {
    await lottery.methods.enterLottery().send({
      from: accounts[0],
      value: instance.utils.toWei('0.05', 'ether')
    });
    const players = await lottery.methods.getAllPlayers().call({
      from: accounts[0]
    });
    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });

  it('allows many players to enter', async () => {
    await lottery.methods.enterLottery().send({
      from: accounts[0],
      value: instance.utils.toWei('0.05', 'ether')
    });
    await lottery.methods.enterLottery().send({
      from: accounts[1],
      value: instance.utils.toWei('0.05', 'ether')
    });
    await lottery.methods.enterLottery().send({
      from: accounts[2],
      value: instance.utils.toWei('0.05', 'ether')
    });
    const players = await lottery.methods.getAllPlayers().call({
      from: accounts[0]
    });
    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(accounts[2], players[2]);
    assert.equal(3, players.length);
  });


  it('only manager can pick an winner', async () => {
    try{
      await lottery.methods.pickWinner().call({
        from: accounts[2],
      });
      assert(false);
    } catch(err) {
      assert.ok(err);
    }
  });

  it('calculating ether before and after pick winner', async () => {
    await lottery.methods.enterLottery().call({
      from: accounts[0],
      value: instance.utils.toWei('2', 'ether')
    });
    const initialBalance = await instance.eth.getBalance(accounts[0]);
    await lottery.methods.pickWinner().call({ from: accounts[0] });
    const finalBalance = await instance.eth.getBalance(accounts[0]);
    console.log(finalBalance, initialBalance, 'balances')
    const difference = finalBalance - initialBalance;
    assert(difference > instance.utils.toWei('1.8', 'ether'));
  })
});
