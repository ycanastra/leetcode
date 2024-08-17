// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    currentSum += nums[i];

    if (currentSum < nums[i]) {
      currentSum = nums[i];
    }

    if (maxSum < currentSum) {
      maxSum = currentSum;
    }
  }

  return maxSum
};

console.log(maxSubArray([1]) === 1);
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([5, 4, -1, 7, 8]) === 23)
console.log(maxSubArray([1, 2]) === 3)
