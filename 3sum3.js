/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const target = 0;
  const numsSeen = new Set();
  numsSorted = [...nums].sort((a, b) => a - b);
  console.log('numsSorted :>> ', numsSorted);
  const triplets = [];

  for (let i = 0; i < numsSorted.length; i += 1) {

    const currentNum = numsSorted[i];

    if (currentNum === numsSorted[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = numsSorted.length - 1;

    const target = -1 * currentNum;

    while (left < right) {
      console.log('i, left, right :>> ', i, left, right);
      if (target === 1) {
        console.log(left, right)
      }

      if (numsSorted[left] + numsSorted[right] === target) {
        triplets.push([numsSorted[left], numsSorted[right], currentNum]);

        if (target === 1) {
          console.log(left, right)
        }


        while (numsSorted[left] === numsSorted[left + 1]) {
          console.log('left :>> ', left);
          left += 1;
        }

        while (numsSorted[right] === numsSorted[right - 1]) {
          console.log('right :>> ', right);
          right -= 1;
        }

        left += 1;
        right -= 1;
        continue;
      }

      if (numsSorted[left] + numsSorted[right] < target) {
        left += 1;
        continue;
      }

      if (numsSorted[left] + numsSorted[right] > target) {
        right -= 1;
        continue;
      }

      break;
    }
  }

  return triplets;
};

console.log('threeSum([-1,0,1,2,-1,-4]) :>> ', threeSum([3, 0, -2, -1, 1, 2])); // [[-1,-1,2],[-1,0,1]]
