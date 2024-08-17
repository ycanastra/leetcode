/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let globalMax = Math.min(height[left], height[right]) * (right - left);

  while (left !== right && right - left !== 1) {
    console.log('left :>> ', left);
    console.log('right :>> ', right);
    console.log('globalMax :>> ', globalMax);
    if (height[left] > height[right]) {
      right = right - 1;
    } else {
      left = left + 1;
    }
    const area = Math.min(height[left], height[right]) * (right - left)
    globalMax = Math.max(globalMax, area);
  }

  return globalMax;
};

console.log('maxArea([1,8,6,2,5,4,8,3,7]) :>> ', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
