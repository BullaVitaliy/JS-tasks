" use strict";
//1.Unique. Write a function that removes duplicate values.
// Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3].

function unique() {
  let arr = [1, 2, 3, 1, 2];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr.indexOf(arr[i]) != i) arr.splice(i, 1);
  }
  console.log(arr);
}
unique();




// // 2.Intersection. Write a function that creates an array of unique values that are included in all given array.
// // Expected Result: ([1, 2], [2, 3]) => [2].

// const input1 = [1, 2];
// const input2 = [2, 3];

// const intersection = function (nums1, nums2) {
//   let result = [];

//   let map = nums1.reduce((acc, i) => {
//     acc[i] = acc[i] ? acc[i] + 1 : 1;
//     return acc;
//   }, {});

//   for (let i = 0; i < nums2.length; i++) {
//     const current = nums2[i];
//     let count = map[current];

//     if (count && count > 0) {
//       result.push(current);
//       map[current] -= 1;
//     }
//   }
//   return result;
// };

// console.log(intersection(input1, input2));
