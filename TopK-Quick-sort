### 分治思想--快速排序解决TopK问题

> ----前言
>
> ​	最近一直研究算法，上个星期刷leetcode遇到从两个数组中找TopK问题，因此写下此篇，在一个数组中如何利用快速排序解决TopK问题。

先理清一个逻辑解决TopK问题→快速排序→递归→分治思想，因此本章内容会从此逻辑由后往前叙述

#### 何为分治思想？

从字面上就很容易能够推出"分而治之"，**维基百科的解释为"就是把一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。"** 简述一下后半部分"遇到子问题可以简单的直接求解"，打个比方，当最后分解到最后子问题不可再分时，例如只有一个元素或者该元素小于某个值。返回该值，这时子问题就成功解决。通过一个函数，将子问题合并，最后解决了原问题。这里用归并排序来让大家可以更容易的理解。

在讲解归并排序之前，通过简单的介绍一下递归，这是分治思想的基础。

用递归需要满足三个条件

- 一个问题的解可以分为多个子问题的解
- 这个问题分解之后的子问题，除数据规模不同，其余完全相同
- 有边界条件以此限制

若是不容易理解，打个比方，当你与朋友去电影院观影时，**你现在想知道自己的位置是第几排，恰好现场黑灯瞎火，什么都看不见**，这时你询问你前一排座位号是什么，若恰好他也不知道，这时，他同你一样做出相同的行为也问前面的人，最终问到第一排，第一排就是边界条件，第一排告诉第二排，以此类推，最后你就清楚当前你所在的排数。以下是一张归并排序的图片与一张gif动图

归并排序首先是分解成子问题，如下所示，分解到只剩下一个元素，然后从这个元素开始，通过归并排序，由下而上返回结果，最终解决原问题，因此关键是**分解问题函数与归并函数**

以下是我用Python写的源代码，可供参考

```Python
def merge_sort(array):
    if (len(array) <= 1):
        return array
    mid = int(len(array) / 2)
    left = merge_sort(array[:mid])
    right = merge_sort(array[mid:])
    return merge(left, right)


def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    #此处有i,j两个索引,当其中一边推入完成,另一边可直接将剩下的推入
    result += left[i:]
    result += right[j:]
    return result


array = [5, 3, 2, 8, 6, 1, 4, 7]
print(merge_sort(array))
```

此处解决递归与分治思想的问题

#### 快速排序

快速排序同样是运用分治思想，以一个中枢轴元素，左边放置小于中枢轴元素，右边大于中枢轴元素，中枢元素一般选为最后一个元素(更方便理解)，通过分治思想--下面的qucik_sort_c函数为划分为成子问题，partition为分区函数，最后得出原问题的答案。

快速排序的**难点在于partition分区函数**，但本质也是很简单，同样是有两个索引，一个索引用于遍历当前分区数组所有元素(下面即为j)，一个索引为指向小于中枢轴元素，若是小于中枢轴元素，增加该索引的值，如下i即为该索引，下面的gif图片的中枢轴元素为第一个元素

```Python
def quick_sort(A):
    qucik_sort_c(A, 0, len(A) - 1)


def qucik_sort_c(A, p, r):
    if p >= r: return
    q = partition(A, p, r)  # 获得分区点
    qucik_sort_c(A, p, q - 1)
    qucik_sort_c(A, q + 1, r)


def partition(A, p, r):
    pivot = A[r]
    i = p
    for j in range(p, r):
        if A[j] < pivot:
            A[i], A[j] = A[j], A[i]
            i = i + 1
    A[i], A[r] = A[r], A[i]
    return i
A = [8,10,2,3,6,1,5]
quick_sort(A)
print(A)
```

当然，快速排序也可以像归并排序，创建一个新的数组，最后两个数组归并，返回成一个新的数组，但这样增加了空间复杂度，且快速排序由于中枢轴的选取不同，最坏时间复杂度为n2，因此最好还是原地排序。

### 快速排序解决TopK问题

TopK问题是一个数组中第K大的数字，比如[1,7,3,5,4]中第2大的数字为3，如果说成第K小的数字也可以，只要能够理解即可。TopK问题在大数据中是一个常用的算法，比如说从100万的数据中找出前100个热点频率最高的词。解决TopK问题有很多种方法，大家若是有兴趣可以自己搜索，因为作者本人对算法也只是处在初步的阶段。这里仅仅是通过快速排序的方法解决TopK问题。

选择当前数组元素的最后一个为中枢轴，由上面的快速排序可以知道，每一次的排序都可以知道中枢轴的下标是多少，这样可以确定当前中枢轴为第几大的数字，这里通过快速排序的思想，TopK小于当前的中枢轴下标，那么向左走，反之，若是中枢轴下标等于TopK的值，直接返回即可。原理其实并不难，下面有一处地方需注意，当TopK的值大于中枢轴下标时，需要向右走，每一次需要减去之前的中枢轴下标，可以通过下面自己所画的图理解。

```python
def smallest_k(arr, l, r, k):
    if (k > 0 and k <= r - l + 1):
        index = partiton(arr, l, r)
        if (index - l == k - 1):
            return arr[index]
        elif (index - l > k - 1):
            return smallest_k(arr, l, index - 1, k)
        else:
            return smallest_k(arr, index + 1, r, k - 1 - index + l )


def partiton(arr, l, r):
    pivot = arr[r]
    i = l
    for j in range(l, r):
        if arr[j] < pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i = i + 1
    arr[i], arr[r] = arr[r], arr[i]
    return i


array = [13,4,12,17,2,44,55,92,1,18,6]
print(smallest_k(array, 0, len(array) - 1, 8),array)
```

### 后记

自己本身是打算去搜索找到答案，但并没有自己认同的答案，因此只能不断的尝试。此文章借鉴了许多大佬的推文，之后会推如何在两个数组中找到TopK问题，这是自己刷leetcode 中的[寻找两个有序数组的中位数](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/ )有感，因为得考虑时间复杂度，自己也通过各种途径才知道如何解决的。

若是觉的不错，欢迎点赞与评论

参考链接：

极客时间-数据结构与算法之美：https://time.geekbang.org/column/intro/126

算法动画：https://visualgo.net/en

GeeksForGeek：https://www.geeksforgeeks.org/quick-sort/
