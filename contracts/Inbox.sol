pragma solidity^0.4.17;

contract Inbox{
  string public initialMessage;

  /*  function has name same as contract name, which means its an constructor*/
  /* note: syntax varies with the solidity version */
  function Inbox(string memory newMessage) public{
    initialMessage = newMessage;
  }

  function getMessage() public view returns (string memory){
    return initialMessage;
  }
}
