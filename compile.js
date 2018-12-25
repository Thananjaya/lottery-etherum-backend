const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const inboxFile = fs.readFileSync(inboxPath, 'utf8');

const compiledSource = solc.compile(inboxFile, 1); //soldity compiler takes two arguements, one is file nd another one is how many number of contract needs to be compiled

module.exports = compiledSource.contracts[':Inbox']; 
