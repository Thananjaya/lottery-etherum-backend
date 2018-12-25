pragma solidity^0.4.17;

contract Inbox{
  string public initialMessage;

  function setMessage(string memory newMessage) public{
    initialMessage = newMessage;
  }

  function getMessage() public view returns (string memory){
    return initialMessage;
  }
}
