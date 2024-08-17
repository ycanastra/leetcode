/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  return findMinHelper(nums, 0, nums.length - 1);
}

const findMinHelper = (nums, startIndex, endIndex) => {
  const middleIndex = parseInt((endIndex + startIndex) / 2, 10);
  const left = nums[middleIndex - 1];
  const right = nums[middleIndex + 1];

  if (endIndex - startIndex <= 1) {
    return Math.min(nums[startIndex], nums[endIndex])
  }

  if (right < nums[middleIndex]) {
    return right;
  }

  if (left > nums[middleIndex]) {
    return nums[middleIndex];
  }

  return nums[endIndex] > nums[middleIndex]
    ? findMinHelper(nums, startIndex, middleIndex - 1)
    : findMinHelper(nums, middleIndex + 1, endIndex);
}
