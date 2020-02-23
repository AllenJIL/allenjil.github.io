---
layout: post
title: 'Python Methods in Dictionaries and Sets'
description: 'Python 字典与集合的方法和属性'
date: 2020-02-23
tag: program
---

[Data Model]:<https://docs.python.org/3/reference/datamodel.html> "Data Model"

> source:  
>   - [Data Model]  
>   - Book: Fluent Python

************  

### 表3-1  

**dict、collections.defaultdict和collections.OrderedDict这三种映射类型的方法列表（依然省略了继承自object的常见方法）；可选参数以[...]表示**  

**Methods of the mapping types dict, collections.defaultdict, and collections. OrderedDict (common object methods omitted for brevity); optional arguments are enclosed in […]** 

|  |dict <br> dict|defaultdict <br> defaultdict|OrderedDict <br> OrderedDict|  |  
|:--:|:--:|:--:|:--:|:--:|  
|`d.clear() `|●|●|●| 移除所有元素 <br>  Remove all items |  
|`d.__contains__(k) `|●|●|●| 检查 k 是否在 d 中 <br>  k in d |
|`d.copy() `|●|●|●| 浅复制 <br>  Shallow copy |
|`d.__copy__() `|  |●|  | 用于支持 `copy.copy` <br>  Support for `copy.copy` |
|`d.default_factory `|  |●|  | 在 `__missing__` 函数中被调用的函数，用以给未找到的 元素设置值* <br>  Callable invoked by __missing__ to set missing valuesa |
|`d.__delitem__(k) `|●|●|●| `del d[k]`，移除键为 k 的元素 <br>  `del d[k]`—remove item with key k |
|`d.fromkeys(it, [initial]) `|●|●|●| 将迭代器 it 里的元素设置为映射里的键，如果有 `initial` 参数，就把它作为这些键对应的值（默认是 None） <br>  New mapping from keys in iterable, with optional `initial` value (defaults to None) |
|`d.get(k, [default]) `|●|●|●| 返回键 k 对应的值，如果字典里没有键 k，则返回 None 或者 default <br>  Get item with key k, return default or None if missing |
|`d.__getitem__(k) `|●|●|●| 让字典 d 能用 `d[k]`` 的形式返回键 k 对应的值 <br>  `d[k]` —get item with key k |
|`d.items() `|●|●|●| 返回 d 里所有的键值对 <br>  Get view over items—(key, value) pairs |
|`d.__iter__() `|●|●|●| 获取键的迭代器 <br>  Get iterator over keys |
|`d.keys() `|●|●|●| 获取所有的键 <br>  Get view over keys |
|`d.__len__() `|●|●|●| 可以用 `len(d)`` 的形式得到字典里键值对的数量 <br>  `len(d)`—number of items |
|`d.__missing__(k) `|  |●|  | 当 `__getitem__` 找不到对应键的时候，这个方法会被调用 <br>  Called when `__getitem__` cannot find the key |
|`d.move_to_end(k, [last]) `|  |  |●| 把键为 k 的元素移动到最靠前或者最靠后的位置（last 的默认值是 True） <br>  Move k first or last position (last is True by default) |
|`d.pop(k, [default]) `|●|●|●| 返回键 k 所对应的值，然后移除这个键值对。如果没有这个键，返回 `None` 或者 `defaul` <br>  Remove and return value at k, or `default` or `None` if missing |
|`d.popitem() `|●|●|●| 随机返回一个键值对并从字典里移除它# <br>  Remove and return an arbitrary (key, value) itemb |
|`d.__reversed__() `|  |  |●| 返回倒序的键的迭代器 <br>  Get iterator for keys from last to first inserted |
|`d.setdefault(k, [default]) `|●|●|●| 若字典里有键k，则把它对应的值设置为 default，然后返回这个值；若无，则让 `d[k] = default`，然后返回 default <br>  If k in d, return d[k]; else set `d[k] = default` and return it |
|`d.__setitem__(k, v) `|●|●|●| 实现 `d[k] = v` 操作，把 k 对应的值设为 v <br>  `d[k] = v` —put v at k |
|`d.update(m, [**kargs]) `|●|●|●| m 可以是映射或者键值对迭代器，用来更新 d 里对应的条目 <br>  Update d with items from mapping or iterable of (key, value) pairs |
|`d.values() `|●|●|●| 返回字典里的所有值 <br>  Get view over values |


************  

### 表3-2  

**集合的数学运算：这些方法或者会生成新集合，或者会在条件允许的情况下就地修改集合**  

**Mathematical set operations: these methods either produce a new set or update the target set in place, if it’s mutable** 

|数学符号 <br> Math_symbol|Python <br> Python_operator|运算符 <br> Method|方法描述 <br> Description|
|:--:|:--:|:--:|:--:|
|`S ∩ Z`|`s & z `|`s.__and__(z)`|s 和 z 的交集 <br> Intersection of s and z |
|`S ∩ Z`|`z & s`|`s.__rand__(z)`|反向 & 操作 <br> Reversed & operator |
|`S ∩ Z`|`z & s`|`s.intersection(it, ...)`|把可迭代的 it 和其他所有参数转化为集合，然后求它们与 s 的交集 <br> Intersection of s and all sets built from iterables it, etc. |
|`S ∩ Z`|`s &= z`|`s.__iand__(z)`| 把 s 更新为 s 和 z 的交集 <br> s updated with intersection of s and z |
|`S ∩ Z`|`s &= z`|`s.intersection_update(it, ...)`|把可迭代的 it 和其他所有参数转化为集合，然后求得它们与 s 的交集，然后把 s 更新成这个交集 <br> s updated with intersection of s and all sets built from |
|`S ∪ Z`|`s | z`|`s.__or__(z)`|s 和 z 的并集 <br> Union of s and z |
|`S ∪ Z`|`z | s`|`s.__ror__(z)`|| 的反向操作 <br> Reversed `|`  |
|`S ∪ Z`|`z | s`|`s.union(it, ...)`|把可迭代的 it 和其他所有参数转化为集合，然后求它们和 s 的并集 <br> Union of s and all sets built from iterables it, etc. |
|`S ∪ Z`|`s |= z`|`s.__ior__(z)`|把 s 更新为 s 和 z 的并集 <br> s updated with union of s and z |
|`S ∪ Z`|`s |= z`|`s.update(it, ...)`|把可迭代的 it 和其他所有参数转化为集合，然后求它们和 s 的并集，并把 s 更新成这个并集 <br> s updated with union of s and all sets built from iterables it, etc. |
|`S \ Z`|`s - z`|`s.__sub__(z)`|s 和 z 的差集，或者叫作相对补集 <br> Relative complement or difference between s and z |
|`S \ Z`|`z - s`|`s.__rsub__(z)`|`s.__sub__(z)`` 的反向操作 <br> Reversed - operator |
|`S \ Z`|`z - s`|`s.difference(it, ...)`|把可迭代的 it 和其他所有参数转化为集合，然后求它们和 s 的差集 <br> Difference between s and all sets built from iterables it, etc. |
|`S \ Z`|`s -= z`|`s.__isub__(z)`|把 s 更新为它与 z 的差集 <br> s updated with difference between s and z |
|`S \ Z`|`s -= z`|`s.difference_update(it, ...)`|把可迭代的 it 和其他所有参数转化为集合，求它们和 s 的差集，然后把 s 更新成这个差集 <br> s updated with difference between s and all sets built from iterables it, etc. |
|`S \ Z`|`s -= z`|`s.symmetric_difference(it)`|求 s 和 set(it) 的对称差集 <br> Complement of s & set(it) |
|`S △ Z`|`s ^ z`|`s.__xor__(z)`|求 s 和 z 的对称差集 <br> Symmetric difference (the complement of the intersections & z) |
|`S △ Z`|`z ^ s`|`s.__rxor__(z)`|^ 的反向操作 <br> Reversed ^ operator |
|`S △ Z`|`z ^ s`|`s.symmetric_difference_update(it,...)`|把可迭代的 it 和其他所有参数转化为集合，然后求它们和 s 的对称差集，最后把 s 更新成该结果 <br> s updated with symmetric difference of s and all sets built from iterables it, etc. |
|`S △ Z`|`s ^= z`|`s.__ixor__(z)`|把 s 更新成它与 z 的对称差集 <br> s updated with symmetric difference of s and z |


************  

### 表3-3  

**集合的比较运算符，返回值是布尔类型**  

**Set comparison operators and methods that return a bool** 

|数学符号 <br> Math_symbol|Python运算符 <br> Python_operator|方法 <br> Method|描述 <br> Description|
|:--:|:--:|:--:|:--:|
| | |`s.isdisjoint(z)`|查看 s 和 z 是否不相交（没有共同元素） <br> s and z are disjoint (have no elements in common) |
|`e ∈ S`|`e in s`|`s.__contains__(e)`|元素 e 是否属于 s <br> Element e is a member of s |
|`S ⊆ Z`|`s <= z`|`s.__le__(z)`|是否为 z 的子集 <br> s is a subset of the z set |
|`S ⊆ Z`|`s <= z`|`s.issubset(it)`|把可迭代的 it 转化为集合，然后查看 s 是否为它的子集 <br> s is a subset of the set built from the iterable it |
|`S ⊂ Z`|`s < z`|`s.__lt__(z)`|s 是否为 z 的真子集 <br> s is a proper subset of the z set |
|`S ⊇ Z`|`s >= z`|`s.__ge__(z)`|s 是否为 z 的父集 <br> s is a superset of the z set |
|`S ⊇ Z`|`s >= z`|`s.issuperset(it)`|把可迭代的 it 转化为集合，然后查看 s 是否为它的父集 <br> s is a superset of the set built from the iterable it |
|`S ⊃ Z`|`s > z`|`s.__gt__(z)`|s 是否为 z 的真父集 <br> s is a proper superset of the z set |

************  

### 表3-4  

**集合类型的其他方法**  

**Additional set methods** 

| |set <br> set|frozenset <br> frozenset| |
|:--:|:--:|:--:|:--:|
|`s.add(e)`| ● | |把元素 e 添加到 s 中 <br> Add element e to s |
|`s.clear()`| ● | |移除掉 s 中的所有元素 <br> Remove all elements of s |
|`s.copy()`| ● | ● |对 s 浅复制 <br> Shallow copy of s |
|`s.discard(e)`| ● | |如果 s 里有 e 这个元素的话，把它移除 <br> Remove element e from s if it is present |
|`s.__iter__()`| ● | ● |返回 s 的迭代器 <br> Get iterator over s |
|`s.__len__()`| ● | ● | `len(s)` |
|`s.pop()`| ● | |从 s 中移除一个元素并返回它的值，若 s 为空，则抛出 `KeyError` 异常 <br> Remove and return an element from s, raising `KeyError` if s is empty |
|`s.remove(e)`| ● | |从 s 中移除 e 元素，若 e 元素不存在，则抛出 `KeyError` 异常 <br> Remove element e from s, raising `KeyError` if e not in s |
