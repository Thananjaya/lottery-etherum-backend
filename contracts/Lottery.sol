pragma solidity^0.4.17;

contract Lottery{
    address public manager;
    address[] public players;

    function Lottery() public{
        manager = msg.sender;
    }

    function enterLottery() public payable{
        require( msg.value > .01 ether);
        players.push(msg.sender);
    }

    function pickWinner() public managerAccess {
        uint index = randomNumber() % players.length;
        players[1].transfer(this.balance); /* hard coding the the second player in players array as an winner */
        players = new address[](0);
    }

    modifier managerAccess() {
        require(msg.sender == manager);
        _;
    }

    /* reference for generating random numbers: https://medium.com/@promentol/lottery-smart-contract-can-we-generate-random-numbers-in-solidity-4f586a152b27 */
    function randomNumber() public view returns (uint) {
        return uint8(uint256(keccak256(block.timestamp, block.difficulty))%251);
    }

    function getAllPlayers() public view returns(address[] memory){
        return players;
    }
 }
