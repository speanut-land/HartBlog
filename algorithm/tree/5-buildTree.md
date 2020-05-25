# 5-buildTree	

先序遍历的顺序是 root => left => right .  中序遍历的顺序是left => right => right.

```
//以下的伪代码
traversalTree(tree) {
	if(!tree)return;
	print('先序遍历');  //此处以及获得了root
	traversalTree(tree.left);
	print('中序遍历');
	traversalTree(tree.right);
	print('后序遍历');
}
```



```
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
```

从preorder的第一个 root  => 3

查看