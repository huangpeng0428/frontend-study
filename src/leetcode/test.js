/*
 * @Author: polo 826770122@qq.com
 * @Date: 2024-01-04 17:14:38
 * @LastEditors: polo 826770122@qq.com
 * @LastEditTime: 2024-01-15 10:07:13
 * @FilePath: /frontend-study/src/leetcode/test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// var longestConsecutive = function(nums) {
//     if(!nums.length) return 0
//     const numsData = nums.sort((a, b) => a-b)
//     let count = 1
//     let max = 1
//     console.log('numsData', numsData)
//     for(let i = 0; i < numsData.length - 1; i++) {
//         if(numsData[i] === numsData[i+1]) {
//             continue
//         }
//         if(numsData[i+1] - numsData[i] === 1) {
//             count++
//         } else {
//             count = 1
//         }
//         max = Math.max(max, count)
//     }
//     console.log('max', max)
//     return max
// };

// nums = [100,4,200,1,3,2]

// longestConsecutive(nums)


// var threeSumClosest = function (nums, target) {
//     nums.sort((a, b) => a - b);
//     const n = nums.length;
//     let ans = 0;
//     let minDiff = Number.MAX_SAFE_INTEGER;
//     console.log('minDiff', minDiff)
//     for (let i = 0; i < n - 2; i++) {
//         const x = nums[i];


//         // 双指针
//         let j = i + 1, k = n - 1;
//         while (j < k) {
//             s = x + nums[j] + nums[k];
//             if (s === target) {
//                 return target;
//             }
//             if (s > target) {
//                 if (s - target < minDiff) { // s 与 target 更近
//                     minDiff = s - target;
//                     ans = s;
//                 }
//                 k--;
//             } else { // s < target
//                 if (target - s < minDiff) { // s 与 target 更近
//                     minDiff = target - s;
//                     ans = s;
//                 }
//                 j++;
//             }
//         }
//     }
//     return ans;
// };


// threeSumClosest([-1,2,1,-4],)

// var subarraySum = function(nums, k) {
//     nums.sort((a, b) => a - b)
//     let ans = 0
//     for(let i = 0; i < nums.length; i++) {
//         ans += nums[i]
//         if(ans === k)
//         return i + 1
//     }
// };

// const nums = [1,2,1,2,1]
// subarraySum(nums, 4)

var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (arr.includes(s[i])) {
            arr.splice(0, arr.indexOf(s[i]) + 1);
        }
        arr.push(s[i]);
        max = Math.max(arr.length, max);
    }
    console.log('max', max)
    return max;
};

lengthOfLongestSubstring('psdfabrtwwkew')