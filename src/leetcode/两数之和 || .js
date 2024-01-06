/*
 * @Author: polo 826770122@qq.com
 * @Date: 2024-01-06 17:47:59
 * @LastEditors: polo 826770122@qq.com
 * @LastEditTime: 2024-01-06 17:48:09
 * @FilePath: /frontend-study/src/leetcode/两数之和 || .js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1
    while(numbers[left] + numbers[right] !== target) {
        if(numbers[left] + numbers[right] > target) {
            right--
            console.log('right', right)
        } else if(numbers[left] + numbers[right] < target) {
            left++
        }
    }
    console.log(left+1, right+1)
    return [left+1, right+1]
};

twoSum([2,7,11,15], 9)