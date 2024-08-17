/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const robMemo = new Array(nums.length).fill(undefined);

  return robHelper(nums, nums.length - 1, robMemo);
};


const robHelper = (nums, index, robMemo) => {
  if (index < 0) {
    return 0;
  }

  const result = robMemo[index] ?? Math.max(robHelper(nums, index - 2, robMemo) + nums[index], robHelper(nums, index - 1, robMemo));

  if (robMemo[index] === undefined) {
    robMemo[index] = result;
  }

  return result;
}
