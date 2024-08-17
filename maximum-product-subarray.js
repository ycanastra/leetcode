/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let currentMax = nums[0];
  let currentMin = nums[0];
  let maxProduct = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    const oldCurrentMax = currentMax
    currentMax = Math.max(nums[i], currentMax * nums[i], currentMin * nums[i])
    globalMax = Math.max(currentMax, globalMax)
    currentMin = Math.min(nums[i], currentMin * nums[i], oldCurrentMax * nums[i])
  }

  return
};
