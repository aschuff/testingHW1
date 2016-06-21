// * Create a class named Muppet that has a constructor that takes a name and age.
// * Create a subclass of Muppet called Frog that has a color attribute.
// * Frogs speak by saying "Ribbit Ribbit"
// * verify the properties: Such as a frog named Kirmet that is green
// * verify frogs speak correctly and muppets speak correctly

"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;

class Muppet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'dirka dirka'
    }
}
class Frog extends Muppet {
    constructor(name, age, color) {
        super(name, age)
        this.color = color;
    }
    speak() {
        return 'Ribbit Ribbit'
    }
}
// var kirmet = new Frog('Kirmet', 5, 'green')
// if(this.color === 'green'){
//   console.log(kirmet);
// };
//
// var speakingSomething =
describe('Muppet', function() {
    it('says dirka dirka', function() {
        // given
        var beaker = new Muppet('Beaker', 3)
            // when
        var speak = beaker.speak()
            // then
        expect(speak).to.equal('dirka dirka')
    })
    describe('Frog', function() {
        it('has a color of green', function() {
            // given
            var kermit = new Frog('Kermit', 1, 'green')
                // when
            var color = kermit.color
                // then
            expect(color).to.equal('green')
            expect(color).to.not.equal('blue')
            expect(color).to.be.a('string')
        })
        it('speaks Ribbit Ribbit', function() {
            // given
            var kermit = new Frog('Kermit', 1)
                // when
            var speak = kermit.speak()
                // then
            expect(speak).to.equal('Ribbit Ribbit')
        })
    })
})
