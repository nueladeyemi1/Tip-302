// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// let keptState = 0;
// const longestCommonPrefix = function(strs) {
//     if (strs.length === 0 || strs.length === 1) {
//         console.log('' || strs[0])
//     } else {
//         let container = [];
//         let initial = 0;
//         let i = 0;

//         for (let ele of strs) {
//             // console.log(strs[strs.indexOf(ele)+1])
//             console.log(strs[initial][i], strs[strs.indexOf(ele)+1][i])
//             if (strs[initial][i] === strs[strs.indexOf(ele)+1][i]) {
//                 container.push(strs[initial][i]);
//         }
//         i++;
//     }

// strs.map(element => {
//     console.log(strs[strs.indexOf(element[i])+1])
//         if (strs[initial][i] === strs[strs.indexOf(element[i]+1)]) {
//             container.push(element[i]);
//         }
//         i++;
//   });

//     console.log(...container)
//     }
// };

// longestCommonPrefix('c')
// longestCommonPrefix(' ')
// longestCommonPrefix(["ilower","krown","light"])
// longestCommonPrefix(["dog","dacecar","dar"])

//THE SOLUTION IS GOING THROUGH ANOTHER STAGE OF REVIEW
