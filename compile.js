const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');

const lotteryFile = fs.readFileSync(lotteryPath, 'utf8');

const compiledSource = solc.compile(lotteryFile, 1); //soldity compiler takes two arguements, one is file nd another one is how many number of contract needs to be compiled

module.exports = compiledSource.contracts[':Lottery']; // exported module has two properties, one is ABI(Application Binary Interface) and another one is bytecode
