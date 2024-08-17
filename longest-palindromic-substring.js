/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const palindromeMemo = Array.from(Array(s.length), () => Array(s.length));

  const result = longestPalindromeHelper(s, 0, s.length - 1, palindromeMemo);

  return s.substring(result.longestPalindromeIndexes[0], result.longestPalindromeIndexes[1] + 1);
};

const longestPalindromeHelper = (string, i, j, palindromeMemo) => {
  if (i === j) {
    return {
      longestPalindromeIndexes: [i, j],
      isPalindrome: true,
    };
  }

  if (j - i === 1) {
    return {
      longestPalindromeIndexes: string[i] === string[j] ? [i, j] : [i, j - 1],
      isPalindrome: string[i] === string[j],
    };
  }

  if (palindromeMemo[i][j] !== undefined) {
    return palindromeMemo[i][j];
  }

  // console.log('i, j :>> ', i, j);
  // console.log('palindromeMemo :>> ', palindromeMemo);

  const innerResult = longestPalindromeHelper(string, i + 1, j - 1, palindromeMemo);

  if (innerResult.isPalindrome && string[i] === string[j]) {
    palindromeMemo[i][j] = {
      longestPalindromeIndexes: [i, j],
      isPalindrome: true,
    };
  }

  const leftResult = longestPalindromeHelper(string, i, j - 1, palindromeMemo);
  const rightResult = longestPalindromeHelper(string, i + 1, j, palindromeMemo);

  const results = [innerResult, leftResult, rightResult];

  const longestResult = results.sort((result1, result2) => {
    const result1PalindromeLength = result1.longestPalindromeIndexes[1] - result1.longestPalindromeIndexes[0];
    const result2PalindromeLength = result2.longestPalindromeIndexes[1] - result2.longestPalindromeIndexes[0];

    return result2PalindromeLength - result1PalindromeLength;
  })[0];

  const isPalindrome = innerResult.isPalindrome && string[i] === string[j];

  palindromeMemo[i][j] = {
    longestPalindromeIndexes: isPalindrome ? [i, j] : longestResult.longestPalindromeIndexes,
    isPalindrome: isPalindrome,
  };

  return palindromeMemo[i][j]
}

console.log('longestPalindrome(``) :>> ', longestPalindrome(`caaaaa`));
