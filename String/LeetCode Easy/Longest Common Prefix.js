/**
 * @param {string[]} strs
 * @return {string}
 */
let keptState = 0;
const longestCommonPrefix = function(strs) {

    let container = [];
    let i = 0;
    let initial = 0;
    strs.map(element => {
        for ( let i = 0; i < strs.length; i++) {
            if (strs[initial][i] === element[i]) {
                container.push(element[i]);
            }
        }
      })


    while (i < strs.length) {
      
      i++;
    }
console.log(container)
    

    // for (let i = 0; i < strs.length; i++) {
    //     console.log(strs[i+1][keptState])
    //     // console.log(strs[i+1][keptState])
    //     //if (strs[i][i] === strs[i+1][i])
    // }
    // keptState++
    
};

longestCommonPrefix(["flower","flow","flight"])


