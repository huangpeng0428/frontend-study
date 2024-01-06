/*
 * @Author: polo 826770122@qq.com
 * @Date: 2024-01-05 17:43:02
 * @LastEditors: polo 826770122@qq.com
 * @LastEditTime: 2024-01-06 15:06:59
 * @FilePath: /frontend-study/src/leetcode/盛水最多的容器.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var maxArea = function(height) {
    let int = 0
    let left = 0
    let right = height.length - 1
    while(left < right) {
        const area = (right - left) * Math.min(height[left], height[right])
        int = Math.max(int, area)
        if(height[left] < height[right]) {
            left++
        } else {
            right++
        }
    }
    return int
};

const arr = [1,16,16,2,2,4,1,1,1]

maxArea(arr)