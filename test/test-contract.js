var should = require('should');
var assert = require('assert');
var contract = require('../contract')

describe("Contract Testing",function(){
  var request_test1={
    key1 : "yolo",
    key2 : 2,
    key3 : {testing :" h", v :2},
    key4 : [3,"éguu"]
  }
  var request_test2={
    key1 : "yolo",
    key1 : 2
  }

  describe("Testint with Contract valid",function(){
    it("validation without same key",function(){
      var c1= new contract(["key1","key2","key3","key4"])
      c1.params(request_test1).end();
      assert.equal(c1.validate,true)
    })
    it("validation with same key",function(){
     var c1=new contract(["key1"])
     c1.params(request_test2).end()
     assert.equal(c1.validate,true)
        })
        })
  describe("Testing with Contract invalid",function(){
    it("validation with missing key",function(){
      var c1= new contract(["key1","key2","key3","key4","key5"])
      c1.params(request_test1).end();
      assert.equal(c1.validate,false)
    })
    it("validation with more key",function(){
      var c1= new contract(["key1","key2","key3"])
      c1.params(request_test1).end();
      assert.equal(c1.validate,false)
    })
    it("validation with mismtach key",function(){
      var c1= new contract(["key1l","key2","key3","key4"])
      c1.params(request_test1).end();
      assert.equal(c1.validate,false)
    })

  })
})
