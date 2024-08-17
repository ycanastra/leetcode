const assert = require('assert')

// Given a string of integers like '1122' sum all numbers that are consecutive, ex: '11' => 1 + '22' => 2 = 3.

const consecutiveSum = (string) => {
  let sum = 0;
  const seenNumbers = new Set();
  for (let i = 1; i < string.length; i += 1) {
    const number = parseInt(string[i], 10);
    if (number === parseInt(string[i - 1], 10) && !seenNumbers.has(number)) {
      sum += number;
      seenNumbers.add(number);
    }
  }
  return sum;
};

console.log('consecutiveSum(1122334566)  :>> ', consecutiveSum('1122334566'));

assert(consecutiveSum('1122334566') === 12);
