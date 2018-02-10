'use strict';

const forEach = require('../lib/fp.js').forEach;
//this line connects to the other file and "picks off" the function containsVowels
// const doubler = (n) => {return 2 * n};
// const isEven = (n) => {return n % 2};
// let array = [23, 65, 78, 2, 4, 8, 16];


describe("forEach function", () => {
  it('it should return undefined since it is not actually defining anything, only runs through the function', () => {
    let array = [1, 2, 3, 4, 5];
    // let result = forEach(array, cb);
    let expected = undefined;
    // expect(result).toBe(expected);
  });

});

const map = require('../lib/fp.js').map;



const filter = require('../lib/fp.js').filter;



const reduce = require('../lib/fp.js').reduce;