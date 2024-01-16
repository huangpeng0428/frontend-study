/*
 * @Date: 2020-07-13 10:15:19
 * @LastEditors: polo 826770122@qq.com
 * @LastEditTime: 2024-01-12 17:18:20
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const arr1 = [1, 2, 2, 1]
const arr2 = [2, 2]

// const intersect = (num1, num2) => {
//     let hash = {}
//     for (let i = 0; i < num1.length; i++) {
//       hash[num1[i]] = 1;
//     }

//     for (let i = 0; i < num2.length; i++) {
//       hash[num2[i]] = 2;
//     }

//     const ants = []

//     for(let k in hash) {
//         hash[k] === 2 && ants.push(+k);
//     }

//     console.log(ants)
//     return ants

// }

var maxSubArray = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            nums[i] = nums[i] + maxSubArray(nums.slice(i+1))
            return nums[i]
        }
    }
};

const nums = [-2,1,-3,4,-1,2,1,-5,4]

maxSubArray(nums)
