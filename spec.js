// const assert = require('mocha').assert;
const assert = require('assert');
const { FizzBuzz } = require('./index.js');

describe("FizzbBuzz", function(){
  describe("Output", function(){
    var result = FizzBuzz(3);
    var result2 = FizzBuzz(5);
    var result3 = FizzBuzz(15);

    it("Should return Fizz using 3", function(){
      assert.equal(result, "Fizz");
    });

    it("Should return Buzz using 5", function(){
      assert.equal(result2, "Buzz");
    })

    it("Should return FizzBuzz using 15", function(){
      assert.equal(result3, "FizzBuzz");
    })
  })
})