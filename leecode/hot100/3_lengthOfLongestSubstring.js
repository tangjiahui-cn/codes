/**
 * 无重复子串
 * 
 * 描述：
 * * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 
 * url: https://leetcode.cn/problems/longest-substring-without-repeating-characters
 * 
 * At 2023/04/07
 * By TangJiaHui
 */


// 使用滑动窗口 保存无重复子串。当最大不重复字符数大于剩余字符数目时，直接返回，减少计算。
function lengthOfLongestSubString(s) {
  let max = 0
  let right = 0   // 滑动窗口右边指针
  const set = new Set()

  for (let i = 0; i < s.length; i++) {
    if (i) {
      set.delete(s[i - 1])
    }

    while (right < s.length && !set.has(s[right])) {
      set.add(s[right++])
    }

    max = Math.max(max, right - i)
    
    if (max >= s.length - i) {
      return max
    }
  }

  return max
}