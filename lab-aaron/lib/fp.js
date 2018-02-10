'use strict';

const doubler = (n) => {return 2 * n};
const isEven = (n) => {return n % 2};
// let array = [23, 65, 78, 2, 4, 8, 16];


const forEach = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    cb(array[i]);
  }
  return array.forEach(doubler);
}//this is how .forEach is implemented



const map = (array, cb) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let result = cb(element[i]);
    results.push(result);
  }
}//this is how .map is implemented
// console.log(array.map(doubler));




const filter = (array, cb) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let result = cb(element[i]);
    if(result === true) {
      results.push(result);
    }
  }
}//this is how .filter is implemented
// console.log(array.filter(isEven));


const reduce = (array, cb) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += cb(array[i]);
  } return result;
}//this is how .reduce is implemented
// console.log(array.reduce(doubler));

module.exports = {};

module.exports.forEach = forEach;
module.exports.map = map;
module.exports.filter = filter;
module.exports.reduce = reduce;