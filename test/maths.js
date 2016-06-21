// Write a function called sum() that returns the sum of 2 numbers
// continue with divide(), multiply() and subtract()

"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;

function sum (a,b){
  return a + b
};

function subtract(a,b){
  return a - b
};

function multiply(a,b){
  return a * b
};

function divide(a,b){
  return a / b
};

describe('maths', function() {
    describe('sum', function() {
        it('sums whole numbers', function() {
            // given sum of two numbers
            var a = 1;
            var b = 2;
            // when
            var result = sum(a, b)
                // then
            expect(result).to.equal(3);
        })
    })
  describe('subtract', function(){
    it('subtracts whole numbers', function(){
      // given the difference of two numbers
      var a = 5;
      var b = 2;
      // when
      var result = subtract(a,b)
      // then
      expect(result).to.equal(3)
    })
  })
  describe('multiply', function(){
    it('multiplies whole numbers', function(){
      // given
      var a = 2;
      var b = 5;
      // when
      var result = multiply(a,b)
      // then
      expect(result).to.equal(10)
    })
  })
  describe('divide', function(){
    it('divides whole numbers', function(){
      // given
      var a = 10;
      var b = 5;
      // when
      var result = divide(a,b)
      // then
      expect(result).to.equal(2)
    })
  })
})
