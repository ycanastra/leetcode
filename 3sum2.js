/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const target = 0;
  const triplets = [];
  const numsSeen = new Set();
  numsSorted = [...nums].sort((a, b) => a - b);

  console.log('nums :>> ', nums);

  for (let i = 0; i < numsSorted.length; i += 1) {
    console.log('numsSeen :>> ', numsSeen);
    if (numsSeen.has(numsSorted[i])) {
      continue;
    }

    if (numsSorted[i] > 0) {
      return triplets;
    }

    numsSeen.add(numsSorted[i])

    const twoSumResult = twoSum(numsSorted, -1 * numsSorted[i], i + 1);
    console.log('twoSumResult :>> ', twoSumResult);

    if (twoSumResult.length !== 0) {

      for (let j = 0; j < twoSumResult.length; j += 1) {
        const tripletsSet = new Set([i, ...twoSumResult[j]]);

        if (tripletsSet.size === 3) {
          console.log('i, tripletsSet :>> ', i, tripletsSet);
          const [index1, index2, index3] = Array.from(tripletsSet).sort();
          triplets.push([numsSorted[index1], numsSorted[index2], numsSorted[index3]]);
        }
      }
    }
  }

  return triplets
};

/**
* @param {number[]} numbers
* @param {number} target
* @return {number[]}
*/
var twoSum = function (numbers, target, left = 0) {
  let right = numbers.length - 1;

  const twoSumResults = [];

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      twoSumResults.push([left, right]);
      // console.log('twoSumResults :>> ', twoSumResults);
      left += 1;
      right -= 1;
      continue;
    }

    if (numbers[left] + numbers[right] > target) {
      right -= 1;
    } else if (numbers[left] + numbers[right] < target) {
      left += 1;
    } else {
      return twoSumResults;
    }
  }

  return twoSumResults;
};

// console.log('twoSum :>> ', twoSum([-4, -1, -1, 0, 1, 2], 1));
console.log('threeSum([-1,0,1,2,-1,-4]) :>> ', threeSum([-2, 0, 0, 2, 2])); // [[-1,-1,2],[-1,0,1]]
