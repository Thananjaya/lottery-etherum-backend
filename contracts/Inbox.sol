pragma solidity^0.4.17;

contract Inbox{
  string public message;

  /*  function has name same as contract name, which means its an constructor*/
  /* note: syntax varies with the solidity version */
  function Inbox(string defaultMessage) public{
    message = defaultMessage;
  }

  function setMessage(string newMessage) public{
    message = newMessage;
  }
}
