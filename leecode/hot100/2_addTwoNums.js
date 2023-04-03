/**
 * 两数相加
 * 
 * 描述：
 * * 表示数的两个链表（倒序）：[0,3,4], [1,3,4,5], 计算他们的和，即430 + 5431，得到：[1, 6, 8, 5]
 * 
 * 
 * url: https://leetcode.cn/problems/add-two-numbers/
 * 
 * At 2023/04/03
 * By TangJiaHui
 */

// 思路：遍历两个列表，计算结果存放第三个链表中(尾插法)
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function addTwoNums(l1, l2) {
    let head = null
    let tail = null
    let carry = 0

    while (l1 || l2) {
        const v1 = l1 ? l1.val : 0
        const v2 = l2 ? l2.val : 0
        const sum = v1 + v2 + carry
        carry = Math.floor(sum / 10)
        value = sum % 10

        if (!head) { // 空链表
            head = tail = new ListNode(value)
        } else {
            tail.next = new ListNode(value)
            tail = tail.next
        }

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    if (carry) {
        tail.next = new ListNode(carry)
    }
    return head
}


// 测试
function listToNodeList(arr) {
    let head, tail
    arr.forEach(val => {
        if (!head) {
            head = tail = new ListNode(val)
        } else {
            tail.next = new ListNode(val)
            tail = tail.next
        }
    })
    return head
}

function show(head) {
    while (head) {
        console.log(head.val)
        head && (head = head.next)
    }
}

show(twoSum(
    listToNodeList([0, 3, 4]),
    listToNodeList([1, 3, 4, 5])
)) // 1 6 8 5