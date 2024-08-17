// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const seenNumbers = new Set();

  for (let i = 0; i < nums.length; i += 1) {
    if (seenNumbers.has(nums[i])) {
      return true;
    }
    seenNumbers.add(nums[i]);
  }
  return false;
};
