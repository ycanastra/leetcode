/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    console.log('left, right :>> ', left, right);
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    }

    if (numbers[left] + numbers[right] > target) {
      right -= 1;
    } else if (numbers[left] + numbers[right] < target) {
      left += 1;
    } else {
      return [];
    }

    // console.log('left, right :>> ', left, right);
  }

  return [];
};

const array = [-10, -8, -2, 1, 2, 5, 6];
console.log('array[60] :>> ', array[60]);
console.log('array[23], array[31] :>> ', array[23], array[31]);

console.log('twoSum :>> ', twoSum(array, 0));
