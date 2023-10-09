// head: {val: 1, next: {}}
// 1 -> 2 -> 3 -> 4
// 4 -> 3 -> 2 -> 1

function reverseNodeList(head) {
  let cur = head;
  let pre = null;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  
  return pre;
}
