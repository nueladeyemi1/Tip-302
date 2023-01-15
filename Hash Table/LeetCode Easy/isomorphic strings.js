/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  let sState = true;
  let tState = true;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      sState = true;
    } else {
      sState = false;
    }

    if (t[i] === t[i + 1]) {
      tState = true;
    } else {
      tState = false;
    }
  }

  if (sState !== tState) {
    return false;
  } else {
    return true;
  }

  // return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic1 = function(s, t) {
  const hashMapS = {};
  const hashMapT = {};
  for (let i = 0; i < s.length; i++) {
    if (!hashMapS[s[i]] || !hashMapT[t[i]]) {
      hashMapS[s[i]] = 1;
      hashMapT[t[i]] = 1;
    } else {
      hashMapS[s[i]]++;
      hashMapT[t[i]]++;
    }
  }

  const valuesArray1 = Object.values(hashMapS);
  const valuesArray2 = Object.values(hashMapT);

  console.log(hashMapS, hashMapT);

  for (let j = 0; j < valuesArray1.length; j++) {
    if (
      valuesArray1.length === valuesArray2.length &&
      valuesArray1[j] === valuesArray2[j]
    ) {
      return true;
    } else {
      return false;
    }
  }
};
