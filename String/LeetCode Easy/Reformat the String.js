/**
 * @param {string} s
 * @return {string}
 */
const reformat = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (
      (typeof s[i] === String && typeof s[i + 1] === Number) ||
      (typeof s[i] === Number && typeof s[i + 1] === String)
    ) {
    } else {
      return '';
    }
  }
};
