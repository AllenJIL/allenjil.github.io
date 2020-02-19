---
layout: post
title: 'Python Special Methods'
description: 'Python 特殊方法'
date: 2020-02-17
tag: program
---

[Data Model]:<https://docs.python.org/3/reference/datamodel.html> "Data Model"

> source:  
>   - [Data Model]  
>   - Book: Fluent Python

********


### 表1-1：跟运算符无关的特殊方法 <br> Table 1-1. Special method names (operators excluded)

|类别|Category|方法名(Method names)|
|:--:|:--:|:--:|
| 字符串 / 字节序列表示形式 | String/bytes representation | `__repr__` <br>`__str__` <br>`__format__` <br>`__bytes__`  |
| 数值转换 | Conversion to number | `__abs__` <br>`__bool__` <br>`__complex__` <br>`__int__` <br>`__float__` <br>`__hash__` <br>`__index__`  |
| 集合模拟 | Emulating collections | `__len__` <br>`__getitem__` <br>`__setitem__` <br>`__delitem__` <br>`__contains__`  |
| 迭代枚举 | Iteration | `__iter__` <br>`__reversed__` <br>`__next__`  |
| 可调用模拟 | Emulating callables | `__call__`  |
| 上下文管理 | Context management | `__enter__` <br>`__exit__`  |
| 实例创建和销毁 | Instance creation and destruction | `__new__` <br>`__init__` <br>`__del__`  |
| 属性管理 | Attribute management | `__getattr__` <br>`__getattribute__` <br>`__setattr__` <br>`__delattr__` <br>`__dir__`  |
| 属性描述符 | Attribute descriptors | `__get__` <br>`__set__` <br>`__delete__`  |
| 跟类相关的服务 | Class services | `__prepare__` <br>`__instancecheck__` <br>`__subclasscheck__`  |


********

### 表1-2：跟运算符相关的特殊方法 <br> Table 1-2. Special method names for operators

|类别|Category|方法名和对应的运算符(Method names and related operators)|
|:--:|:--:|:--:|
| 一元运算符 | Unary numeric operators | `__neg__` &larr; `-` <br>`__pos__` &larr; `+` <br>`__abs__` &larr; `abs()`  |
| 众多比较运算符 | Rich comparison operators | `__lt__` &larr; `<` <br>`__le__` &larr; `<=` <br>`__eq__` &larr; `==` <br>`__ne__` &larr; `!=` <br>`__gt__` &larr; `>` <br>`__ge__` &larr; `>=`  |
| 算术运算符 | Arithmetic operators | `__add__` &larr; `+` <br>`__sub__` &larr; `-` <br>`__mul__` &larr; `*` <br>`__truediv__` &larr; `/` <br>`__floordiv__` &larr; `//` <br>`__mod__` &larr; `%` <br>`__divmod__` &larr; `divmod()` <br>`__pow__` &larr; `**` <br>`__round__` &larr; `round()`  |
| 反向算术运算符 | Reversed arithmetic operators | `__radd__` <br>`__rsub__` <br>`__rmul__` <br>`__rtruediv__` <br>`__rfloordiv__` <br>`__rmod__` <br>`__rdivmod__` <br>`__rpow__`  |
| 增量赋值算术运算符 | Augmented assignment arithmetic operators | `__iadd__` <br>`__isub__` <br>`__imul__` <br>`__itruediv__` <br>`__ifloordiv__` <br>`__imod__` <br>`__ipow__`  |
| 位运算符 | Bitwise operators | `__invert__` &larr; `~` <br>`__lshift__` &larr; `<<` <br>`__rshift__` &larr; `>>` <br>`__and__` &larr; `&` <br>`__or__` &larr; `|` <br>`__xor__` &larr; `^`  |
| 反向位运算符 | Reversed bitwise operators | `__rlshift__` <br>`__rrshift__` <br>`__rand__` <br>`__rxor__` <br>`__ror__`  |
| 增量赋值位运算符 | ugmented assignment bitwise operators | `__ilshift__` <br>`__irshift__` <br>`__iand__` <br>`__ixor__` <br>`__ior__`  |


