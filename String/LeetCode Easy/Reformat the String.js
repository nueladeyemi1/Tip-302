/**
 * @param {string} s
 * @return {string}
 */
const reformat = function (s) {
  let position = '';
  for (let i = 0; i < s.length; i++) {
    position = s[i];
    if (
      (typeof s[i] === String && typeof s[i + 1] === Number) ||
      (typeof s[i] === Number && typeof s[i + 1] === String)
    ) {
      position = s[i + 1];
    } else {
      return '';
    }
  }

  console;
};
