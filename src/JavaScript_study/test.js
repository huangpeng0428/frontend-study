/*
 * @Author: polo 826770122@qq.com
 * @Date: 2024-01-02 14:21:35
 * @LastEditors: polo 826770122@qq.com
 * @LastEditTime: 2024-01-02 14:31:10
 * @FilePath: /frontend-study/src/JavaScript_study/test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let nums = [ 2, 3, 4, 44, 9, 4, 3, 2, 5, 1, 65, 2, 3, 6 ]
const bubbleFunc = arr => {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i; j++) {
            if(arr[j] > arr[j + 1]) {
                let target = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = target
            }
        }
    }
    console.log('arr', arr)
}
bubbleFunc(nums)