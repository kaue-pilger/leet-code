/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';

  let lettersInCommon = '';

  for (let i = 0; i < strs[0].length; i++) {
      if (strs.every(str => str.charAt(i) === strs[0][i])) {
          lettersInCommon += strs[0][i];
      } else {
          break;
      }
  }

  return lettersInCommon;
};