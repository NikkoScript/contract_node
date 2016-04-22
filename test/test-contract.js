var should = require('should');
var assert = require('assert');
var contract = require('../contract')


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
  var request_test3={
    key2 : 2,
    key3 : {testing :" h", v :2},
    key4 : [3,"éguu"]
  }

  describe("Testing with Contract valid",function(){
    it("validation without same key,without optionnal",function(){
      var c1= new contract(["key1","key2","key3","key4"])
      c1.params(request_test1).end();
      assert.equal(c1.valid(),true)
    })
    it("validation with same key,without optionnal ",function(){
      var c1=new contract(["key1"])
      c1.params(request_test2).end()
      assert.equal(c1.valid(),true)
    })
  })

  describe("Testing with Contract invalid",function(){
    it("validation with missing key",function(){
      var c1= new contract(["key1","key2","key3","key4","key5"])
      c1.params(request_test1).end();
      assert.equal(c1.valid(),false)
    })
    it("validation with more key",function(){
      var c1= new contract(["key1","key2","key3"])
      c1.params(request_test1).end();
      assert.equal(c1.valid(),false)
    })
    it("validation with mismtach key",function(){
      var c1= new contract(["key1l","key2","key3","key4"])
      c1.params(request_test1).end();
      assert.equal(c1.valid(),false)
    })
  })

  describe("Testing with Contract valid and optionnal",function(){
    it("validation without optionnal filled",function(){
      var c1= new contract(["key1","key2","key3","key4"],["key5"])
      c1.params(request_test1).end();
      assert.equal(c1.valid(),true)
    })
    it("validation with optionnal filled",function(){
      var c1= new contract(["key1","key2","key3"],["key4"])
      c1.params(request_test1).end()
      assert.equal(c1.valid(),true)
    })
  })

  describe("Testing with Contract invalid and optionnal",function(){
    it("validation without optionnal filled",function(){
      var c1= new contract(["key1","key2","key3"],["key5"])
      c1.params(request_test1).end();
      assert.equal(c1.valid(),false)
    })
    it("validation with optionnal filled",function(){
      var c1= new contract(["key1","key2","key3","key6"],["key4"])
      c1.params(request_test1).end()
      assert.equal(c1.valid(),false)
    })
  })

  describe("Testing ending invalid",function(){
    it("validation wihtout ending",function(){
      var c1= new contract(["key1","key2","key3"],["key4"])
      c1.params(request_test1);
      assert.equal(c1.valid(),false)
    })
    it("validation with dual params and ending",function(){
      var c1= new contract(["key1","key2","key3","key4"])
      c1.params(request_test2).params(request_test3).end()
      assert.equal(c1.valid(),true)
    })
    it("validation with ending and add params",function(){
      var c1= new contract(["key1","key2","key3","key4"])
      c1.params(request_test2).end().params(request_test3)
      assert.equal(c1.valid(),false)
    })
  })
