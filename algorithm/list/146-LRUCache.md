# 146-LRUCache

LRU（最近最少使用）缓存机制特点：缓存容量达到上限时，写入新数据之前，删除最久未使用的数据。获取数据时，刷新LRU。

操作：

+ get（key） 通过key值，获取value
+ put（key，value）如果key存在，更新；如果key不存在，插入
+ 以上两者操作均为O（1）时间复杂度



1. 通过HashTable可以直接满足get（key）时间复杂度为O（1）。
2. 维护一个队列，将队头的优先级设置为最高，也就代表经常使用，无论是Put/Get都将该（key-value）放置在队头，当容量满时，从队尾删除节点，以此达到了LRU的目的。因为数组移动时，会相应的影响到其他节点，因此用双向链表。需要设置一个**虚拟节点（哨兵）**，以O（1）的方式代表着队头和队尾。

```
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashTable = {};
    this.count = 0;
    this.dummyHead = new ListNode();
    this.dummyTail = new ListNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
  }

  get(key) {
    let node = this.hashTable[key];
    if (!node) return -1;
    this.moveToHead(node);
    return node.value;
  }

  put(key, value) {
    let node = this.hashTable[key];
    if (node == null) {
      let newNode = new ListNode(key, value);
      this.hashTable[key] = newNode;
      this.addToHead(newNode);
      this.count++;
      if (this.count > this.capacity) {
        this.removeLRUItem();
      }
    } else {
      node.value = value;
      this.moveToHead(node);
    }
  }

  moveToHead(node) {
    this.removeFromList(node);
    this.addToHead(node);
  }

  removeFromList(node) {
    let tempForPrev = node.prev;
    let tempForNext = node.next;
    tempForPrev.next = tempForNext;
    tempForNext.prev = tempForPrev;
  }

  addToHead(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
  }

  removeLRUItem() {
    let tail = this.popTail();
    delete this.hashTable[tail.key];
    this.count--;
  }

  popTail() {
    let tailItem = this.dummyTail.prev;
    this.removeFromList(tailItem);
    return tailItem;
  }
}

```

