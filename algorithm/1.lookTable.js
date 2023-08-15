/**
 * 查找表
 *
 * 描述：寻找两个数组的交集
 */
var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }

  const map = {}; // 统计最短长度数组中不重复字符各自的数目
  const res = []; // 两数组交集（结果）

  nums1.forEach((n) => {
    map[n] = (map[n] ?? 0) + 1;
  });

  nums2.forEach((n) => {
    let count = map[n] ?? (map[n] = 0);
    if (count) {
      res.push(n);
      map[n] = count - 1;
    }
  });

  return res;
};

const arr1 = [1, 2, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 8, 2];

console.log(intersect(arr1, arr2))
