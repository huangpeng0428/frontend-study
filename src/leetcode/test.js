/*
 * @Author: polo 826770122@qq.com
 * @Date: 2024-01-04 17:14:38
 * @LastEditors: polo 826770122@qq.com
 * @LastEditTime: 2024-01-06 18:52:29
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


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a- b)
    let arr = []
    let len = nums.length
    for(let i = 0; i < len - 2; i++) {
        const x = nums[i]
        if(i > 0 && nums[i] === nums[i - 1]) continue
        let j = i + 1
        let k = len - 1
        while(j < k) {
            const s = x + nums[j] + nums[k]
            if(s > 0) k--
            else if (s < 0) j++
            else {
                arr.push([x, nums[j], nums[k]])
                for (j++; j < k && nums[j] === nums[j - 1]; j++); // 跳过重复数字
                for (k--; k > j && nums[k] === nums[k + 1]; k--); // 跳过重复数字
            }
        }
    }
    console.log('arr', arr)
    return arr
};

threeSum([-1,0,1,2,-1,-4])
