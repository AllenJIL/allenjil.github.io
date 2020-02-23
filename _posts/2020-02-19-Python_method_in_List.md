---
layout: post
title: 'Python Method in List'
description: 'Python 列表的方法和属性'
date: 2020-02-19
tag: program
---

[Data Model]:<https://docs.python.org/3/reference/datamodel.html> "Data Model"

> source:  
>   - [Data Model]  
>   - Book: Fluent Python

********

************  

### 列表或元组或元组或双向队列的方法和属性  

**列表或元组或元组或双向队列的方法和属性（那些由object类支持的方法没有列出来）**  

**Methods and attributes found in list or tuple or array or deque (methods implemented by object are omitted for brevity)** 

|  |列表 <br> list|元组 <br> tuple|数组 <br> array|双向队列 <br> deque|  |
|:--:|:--:|:--:|:--:|:--:|:--:|
|`s.__add__(s2) `|●|●|●|  |` s + s2` &rarr; 拼接 <br>  concatenation |
|`s.__iadd__(s2) `|●|  |●|●|` s += s2` &rarr; 就地拼接 <br>  in-place concatenation |
|`s.append(e) `|●|  |●|●| 在尾部添加一个新元素 <br>  Append one element after last |
|`s.clear() `|●|  |  |●| 删除所有元素 <br>  Delete all items |
|`s.__contains__(e) `|●|●|●|  | s 是否包含 e <br>  e in s |
|`s.copy() `|●|  |  |  | 列表的浅复制 <br>  Shallow copy of the list |
|`s.count(e) `|●|●|●|●| e 在 s 中出现的次数 <br>  Count occurrences of an element |
|`s.__delitem__(p) `|●|  |●|●| 把位于 p 的元素删除 <br>  Remove item at position p |
|`s.extend(i) `|●|  |●|●| 将可迭代对象 i 中的元素添加到尾部 <br>  Append items from iterable i to the right |
|`s.__getitem__(p) `|●|●|●|●|` s[p]` &rarr; 获取位置 p 的元素 <br>  get item at position |
|`s.__getnewargs__() `|  |●||| 在 pickle 中支持更加优化的序列化 <br>  Support for optimized serialization with pickle |
|`s.index(e) `|●|●|●|  | 在 s 中找到元素 e 第一次出现的位置 <br>  Find position of first occurrence of e |
|`s.insert(p, e) `|●|  |●|  | 在位置 p 之前插入元素e <br>  Insert element e before the item at position p |
|`s.__iter__() `|●|●|●|●| 获取 s 的迭代器 <br>  Get iterator |
|`s.__len__() `|●|●|●|●|` len(s)` &rarr; 元素的数量 <br>  number of items |
|`s.__mul__(n) `|●|●|●|  |` s * n` &rarr; n 个 s 的重复拼接 <br>  repeated concatenation |
|`s.__imul__(n) `|●|  |●|  |` s *= n` &rarr; 就地重复拼接 <br>  in-place repeated concatenation |
|`s.__rmul__(n) `|●|●|●|  |` n * s` &rarr; 反向拼接 * <br>  reversed repeated concatenationa |
|`s.pop([p]) `|●|  |●|| 删除最后或者是（可选的）位于 p 的元素 并返回它的值 <br>  Remove and return last item or item at optional position p |
|`s.remove(e) `|●|  |●|●| 删除 s 中的第一次出现的 e <br>  Remove first occurrence of element e by value |
|`s.reverse() `|●|  |●|●| 就地把 s 的元素倒序排列 <br>  Reverse the order of the items in place |
|`s.__reversed__() `|●|  |  |●| 返回 s 的倒序迭代器 <br>  Get iterator to scan items from last to first |
|`s.__setitem__(p, e) `|●|  |●|●|` s[p] = e` &rarr; 把元素 e 放在位置p 替代已经在那个位置的元素 <br>  put e in position p, overwriting existing item |
|`s.sort([key], [reverse]) `|●|  |  |  | 就地对 s 中的元素进行排序 可选的参数有键（key）和是否倒序（reverse） <br>  Sort items in place with optional keyword arguments key and reverse |
|`s.byteswap() `|  ||●|| 翻转数组内每个元素的字节序列 转换字节序 <br>  Swap bytes of all items in array for endianess conversion |
|`s.__copy__() `|  ||●|●| 对 copy.copy 的支持 <br>  Support for copy.copy |
|`s.__deepcopy__() `|  ||●|| 对 copy.deepcopy 的支持 <br>  Optimized support for copy.deepcopy |
|`s.frombytes(b) `|  ||●|| 将压缩成机器值的字节序列读出来添加到尾部 <br>  Append items from byte sequence interpreted as packed machine values |
|`s.fromfile(f, n) `|  ||●|| 将二进制文件 f 内含有机器值读出来添加到尾部 最多添加 n 项 <br>  Append n items from binary file f interpreted as packed machine values |
|`s.fromlist(l) `|  ||●|| 将列表里的元素添加到尾部 如果其中任何一个元素导致了 TypeError 异常 那么所有的添加都会取消 <br>  Append items from list; if one causes TypeError, none are appended |
|`s.itemsize `|  ||●|| 数组中每个元素的长度是几个字节 <br>  Length in bytes of each array item |
|`s.tobytes() `|  ||●|| 把所有元素的机器值用 bytes 对象的形式返回 <br>  Return items as packed machine values in a bytes object |
|`s.tofile(f) `|  ||●|| 把所有元素以机器值的形式写入一个文件 <br>  Save items as packed machine values to binary file f |
|`s.tolist() `|  ||●|| 把数组转换成列表 列表里的元素类型是数字对象 <br>  Return items as numeric objects in a list |
|`s.typecode `|  ||●|| 返回只有一个字符的字符串 代表数组元素在 C 语言中的类型 <br>  One-character string identifying the C type of the items |
|`s.appendleft(e) `|  |||●| 添加一个元素到最左侧（到第一个元素之前） <br>  Append one element to the left (before first) |
|`s.extendleft(i) `|  |||●| 将可迭代对象 i 中的元素添加到头部 <br>  Append items from iterable i to the left |
|`s.pop() `|●|||●| 移除最后一个元素并返回它的值# <br>  Remove and return last itemb |
|`s.popleft() `|  |||●| 移除第一个元素并返回它的值 <br>  Remove and return first item |
|`s.rotate(n) `|  |||●| 把 n 个元素从队列的一端移到另一端 <br>  Move n items from one end to the other |
