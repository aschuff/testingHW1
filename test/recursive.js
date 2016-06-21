// Write a function sum_recursive() that sums all numbers in the provided list of lists (of lists of lists)
"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;

function summationRecursive(listOfNumbers){
    if(listOfNumbers.length === 1){
      return listOfNumbers[0];
    }
    var varrrrr = listOfNumbers.shift();
    return summationRecursive(listOfNumbers) + varrrrr
  }

  describe('shift', function(){
    it('deletes first item in array', function(){
      // given
      var arr = [1,2,3]
      // when
      var result = arr.shift()
      // then
      expect(result).to.equal(1)
      expect(arr[0]).to.equal(2)
      expect(arr[1]).to.equal(3)
    })
  })

describe('summationRecursive',function(){
  it('summationRecursive sums all numbers in lists recursively', function(){
    // given
    var listOfNumbers = [1,2,3,4,5]
    // when
    var result = summationRecursive(listOfNumbers)
    // then
    expect(result).to.equal(15)
    
  })
})
