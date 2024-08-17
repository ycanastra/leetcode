// https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const newArray = new Array(nums.length).fill(undefined);
  const left = new Array(nums.length).fill(undefined);
  const right = new Array(nums.length).fill(undefined);

  for (let i = 0; i < nums.length - 1; i += 1) {
    left[i + 1] = (left[i] ?? 1) * nums[i];
  }

  for (let i = nums.length - 1; i > 0; i -= 1) {
    right[i - 1] = (right[i] ?? 1) * nums[i];
  }

  for (let i = 0; i < nums.length; i += 1) {
    newArray[i] = (left[i] ?? 1) * (right[i] ?? 1);
  }

  return newArray;

};

console.log(productExceptSelf([2, 3, 4, 5, 6]));
