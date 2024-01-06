/*
 * @Author: polo 826770122@qq.com
 * @Date: 2024-01-04 19:29:40
 * @LastEditors: polo 826770122@qq.com
 * @LastEditTime: 2024-01-04 19:30:07
 * @FilePath: /frontend-study/src/leetcode/字母异步词分组.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

 

// 示例 1:

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
// 示例 2:

// 输入: strs = [""]
// 输出: [[""]]
// 示例 3:

// 输入: strs = ["a"]
// 输出: [["a"]]
var groupAnagrams = function(strs) {
    const map = {}
    const arrData = []
    for(let i = 0; i < strs.length; i++) {
        const strItem = strs[i]
        const strSort = strItem.split('').sort().join('')
        if(map[strSort]) {
            map[strSort].push(strItem)
        } else {
            map[strSort] = [strItem]
        }
        // map[strItem] = strSort
    }
    for(let key in map) {
        arrData.push(map[key])
    }
    return arrData
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupAnagrams(strs)