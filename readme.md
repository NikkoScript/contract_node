## Contract Node

SomeTime you want to check the request properties send to your back-end. Specially if you want update your database (MongoDB-like)with this request.
That what this module do. Check the name of your properties and only that.

## Code Example
Contract contructor:
--------
//@Param mandatory Array(String) mandatory parameter to fullfill the contract
//@Param optionnal Array(String) parameter can be pass but not needed to fullfill the contract
Contract(mandatory,optionnal)
----------

Give one object given by the client to fullfill the contract
-------
//@Param Object Object request send by the client to fullfild the contract
---------------
contract.params(Object)
----------------

End the contract:
--------------
contract.end()
------------

Get the state of the contract ( false : invalid, true : valid )
-------------
contract.valid()
-------------

Code Sample
---------------------
var mycontract= new Contract(["id","name"])
var request={ id : "a00000"
              name : "John"
            }
if(mycontract.params(request).end().valid()){
  // update my DB with request
}


// you have another request ?

var newrequest={ id : "a00001"
              name : "Peter"
            }
if(mycontract.params(newrequest).end().valid()){
  // this will never be done, add a new parameter to an ended contract fail everytime
}

// you need a new contract for another request
var mynewcontract= new Contract(["id","name"])
if(mynewcontract.params(newrequest).end().valid()){
  // You can update your databse now
}

---------------------

## Motivation

To devellop my skill in Javascript and Specially with NodeJs i need to do some work. So this present library is the beginning of this.

## Installation

npm install 


## License

MIT : Feel free to use.
