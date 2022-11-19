const minDistance = function (word1, word2) {
  const word1Array = [...word1];
  //   const word2Array = [...word2];
  let foundWord = [];
  for (let i = 0; i < word2.length; i++) {
    let contains = word1Array.find(element => element === word2[i]);

    if (contains === word2[i]) {
      foundWord.push(contains);
    }
  }
  console.log(foundWord);

  //   return foundWord - word1Array.length;
};

minDistance('intention', 'execution');
