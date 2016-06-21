"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;

// Write a function called summation() that returns the sum of all numbers in an array of numbers

function summation(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

describe('summation', function() {
    it('sums all whole numbers in an array', function() {
        //given
        var arr = [1, 2, 3, 4, 5]
            // when
        var result = summation(arr)
            // then
        expect(result).to.equal(15)
    })
})
