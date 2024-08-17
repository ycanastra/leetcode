/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const canJumpMemo = [];
  return canJumpHelper(nums, 0, canJumpMemo)
};

const canJumpHelper = (nums, index, canJumpMemo) => {
  const maxJump = nums[index];
  //   console.log('nums, index :>> ', nums, index);

  if (maxJump >= nums.length - 1 - index) {
    return true;
  }

  if (canJumpMemo[index] !== undefined) {
    return canJumpMemo[index];
  }

  // const jumpResults = [];

  for (let i = 1; i <= maxJump; i += 1) {
    const result = canJumpHelper(nums, index + i);
    canJumpMemo[index + i] = result;
    if (result) {
      return true;
    }
  }

  return false;
}


console.log('canJump([2,3,1,1,4]) :>> ', canJump([2, 3, 1, 1, 4]));
