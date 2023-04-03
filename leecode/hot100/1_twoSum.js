/**
 * 两数之和
 * 
 * 描述：
 * * 存在数组[1,2,3,4,5,6]，目标值10。
 * * 请你在该数组中找出 和为目标值 target  的那 两个 整数，
 * * 并返回它们的数组下标，数组中同一元素不能重复出现。
 * 
 * url: https://leetcode.cn/problems/two-sum/
 * 
 * At 2023/04/02
 * By TangJiaHui
 */


// 思路：使用一个Map保存[值：索引]映射关系，即hash table。
function twoSum(array, target) {
    const hashTable = {}
    for (let i = 0; i < array.length; i++) {
        const v = array[i]
        const otherV = target - v
        if (hashTable.hasOwnProperty(otherV)) {
            return [i, hashTable[otherV]]
        }
        hashTable[v] = i
    }
    return []
}

console.log(twoSum([1,2,3,4,5,6], 10)) // 3, 5