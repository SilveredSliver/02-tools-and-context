'use strict';

const forEach = require('../lib/fp.js').forEach;
const doubler = (n) => {return n * 2};
const isEven = (n) => {return n % 2 === 0};
let array = [20, 32, 15, 1, 4, 3, 16];


describe("forEach function", () => {
  it('it should return undefined since it is not actually defining anything, only runs through the function', () => {
    let result = forEach(array, doubler);
    let expected = undefined;
    expect(result).toBe(expected);
  });
});


const map = require('../lib/fp.js').map;

describe("map function", () => {
  it('it should return an array of all numbers doubled by 2', () => {
    let result = map(array, doubler);
    let expected = [40, 64, 30, 2, 8, 6, 32];
    expect(result).toEqual(expected);
  });
});


const filter = require('../lib/fp.js').filter;

describe("filter function", () => {
  it('it should return only the even elements in an array', () => {
    let result = filter(array, isEven);
    let expected = [20, 32, 4, 16];
    expect(result).toEqual(expected);
  });
});


const reduce = require('../lib/fp.js').reduce;

describe("reduce function", () => {
  it('it should return a single number by adding up the result of the  callback function', () => {
    let result = reduce(array, doubler);
    let expected = 182;
    expect(result).toBe(expected);
  });
});