/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const fallingPathMins = [];

  const fallingPathMemo = Array.from(Array(matrix.length), () => new Array(matrix.length))

  for (let i = 0; i < matrix.length; i += 1) {
    fallingPathMins.push(minFallingPathSumHelper(matrix, 0, i, fallingPathMemo));
  }

  return Math.min(...fallingPathMins);
};

const minFallingPathSumHelper = (matrix, row, col, fallingPathMemo) => {
  const matrixSize = matrix.length;

  if (row === matrixSize - 1) {
    return matrix[row][col];
  }

  if (fallingPathMemo[row][col] !== undefined) {
    return fallingPathMemo[row][col];
  }

  if (col === 0) {
    const result = Math.min(
      minFallingPathSumHelper(matrix, row + 1, col, fallingPathMemo),
      minFallingPathSumHelper(matrix, row + 1, col + 1, fallingPathMemo),
    ) + matrix[row][col];
    fallingPathMemo[row][col] = result;
    return result;
  }

  if (col === matrixSize - 1) {
    const result = Math.min(
      minFallingPathSumHelper(matrix, row + 1, col, fallingPathMemo),
      minFallingPathSumHelper(matrix, row + 1, col - 1, fallingPathMemo),
    ) + matrix[row][col];
    fallingPathMemo[row][col] = result;
    return result;
  }

  const result = Math.min(
    minFallingPathSumHelper(matrix, row + 1, col, fallingPathMemo),
    minFallingPathSumHelper(matrix, row + 1, col + 1, fallingPathMemo),
    minFallingPathSumHelper(matrix, row + 1, col - 1, fallingPathMemo),
  ) + matrix[row][col];
  fallingPathMemo[row][col] = result;
  return result;
}

console.log('minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]) :>> ', minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));

console.log('minFallingPathSum([[100,-42,-46,-41],[31,97,10,-10],[-58,-51,82,89],[51,81,69,-51]]) :>> ', minFallingPathSum([[100, -42, -46, -41], [31, 97, 10, -10], [-58, -51, 82, 89], [51, 81, 69, -51]]));
