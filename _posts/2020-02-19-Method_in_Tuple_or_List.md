---
layout: post
title: 'Method in Tuple or List'
description: '列表或元组的方法和属性'
date: 2020-02-19
tag: program
---

[Data Model]:<https://docs.python.org/3/reference/datamodel.html> "Data Model"

> source:  
>   - [Data Model]  
>   - Book: Fluent Python

********

### 表2-1：

**列表或元组的方法和属性 (那些由object类支持的方法没有列出来) ** 

**Table 2-1. Methods and attributes found in list or tuple (methods implemented by object are omitted for brevity) **

|  |列表 <br> list|        元组 <br> tuple|  |
         |:--:|:--:|:--:|:--:|
`s.__add__(s2) `|●|●|` s + s2` &rarr; 拼接 <br>  concatenation |
`s.__iadd__(s2) `|●|  |` s += s2` &rarr; 就地拼接 <br>  in_place concatenation |
`s.append(e) `|●|  | 在尾部添加一个新元素 <br>  Append one element after last |
`s.clear() `|●|  | 删除所有元素 <br>  Delete all items |
`s.__contains__(e) `|●|●| s 是否包含 e <br>  e in s |
`s.copy() `|●|  | 列表的浅复制 <br>  Shallow copy of the list |
`s.count(e) `|●|●| e 在 s 中出现的次数 <br>  Count occurrences of an element |
`s.__delitem__(p) `|●|  | 把位于 p 的元素删除 <br>  Remove item at position p |
`s.extend(it) `|●|  | 把可迭代对象 it 追加给 s <br>  Append items from iterable it |
`s.__getitem__(p) `|●|●|` s[p]` &rarr; 获取位置 p 的元素 <br>  get item at position |
`s.__getnewargs__() `|  |●| 在 pickle 中支持更加优化的序列化 <br>  Support for optimized serialization with pickle |
`s.index(e) `|●|●| 在 s 中找到元素 e 第一次出现的位置 <br>  Find position of first occurrence of e |
`s.insert(p, e) `|●|  | 在位置 p 之前插入元素e <br>  Insert element e before the item at position p |
`s.__iter__() `|●|●| 获取 s 的迭代器 <br>  Get iterator |
`s.__len__() `|●|●|` len(s)` &rarr; 元素的数量 <br>  number of items |
`s.__mul__(n) `|●|●|` s * n` &rarr; n 个 s 的重复拼接 <br>  repeated concatenation |
`s.__imul__(n) `|●|  |` s *= n` &rarr; 就地重复拼接 <br>  in_place repeated concatenation |
`s.__rmul__(n) `|●|●|` n * s` &rarr; 反向拼接 * <br>  reversed repeated concatenationa |
`s.pop([p]) `|●|  |` 删除最后或者是（可选的）位于 p 的元素` &rarr; 并返回它的值 <br>  Remove and return last item or item at optional position p |
`s.remove(e) `|●|  | 删除 s 中的第一次出现的 e <br>  Remove first occurrence of element e by value |
`s.reverse() `|●|  | 就地把 s 的元素倒序排列 <br>  Reverse the order of the items in place |
`s.__reversed__() `|●|  | 返回 s 的倒序迭代器 <br>  Get iterator to scan items from last to first |
`s.__setitem__(p, e) `|●|  |` s[p] = e` &rarr; 把元素 e 放在位置p 替代已经在那个位置的元素 <br>  put e in position p, overwriting existing item |
`s.sort([key], [reverse]) `|●|  | 就地对 s 中的元素进行排序 可选的参数有键（key）和是否倒序（reverse） <br>  Sort items in place with optional keyword arguments key and reverse |



********
