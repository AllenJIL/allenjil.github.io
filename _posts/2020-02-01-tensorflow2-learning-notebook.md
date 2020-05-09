---
layout: post  
title: "Tensorflow 2.0 Learning Notebook"  
description: "Tensorflow 2.0 学习笔记"  
date: 2020-02-01  
tag: TensorFlow  

---

[Others NN or RNN]:<https://blog.csdn.net/zhuiyuanzhongjia/article/details/80465171> "Others"

---- Tensorflow 2.0 学习笔记

After continuously touching Machine Learning stuffs, I want to learn it deeply. Currently, the large infectious disease outbreak in China, I try to use the few days break to review and learn the tensorflow to have a better understanding on it.  

因为新冠 在家闲着没事，所以最近重新看了一下怎么使用Tensorflow2.0。Tensorflow 2代 相比 Tensorflow 1代 有挺多的改动，一开始有的代码也找不到，后来看了下guide，发现大多代码都移到了tf.math 数学方程, tf.linalg 线代方程, tf.signal 信号类方程(FFT 傅里叶转换) 等库里。这学习笔记是为了我自己以后更好的查找，所以相对的简约。详情可在写代码时在python里, 双`?`查看，如 `??tf.math.add`。


```python
import tensorflow as tf
print('The version of Tensorflow is ',tf.__version__)
```

    The version of Tensorflow is  2.0.0
    

<!-- MarkdownTOC -->

- [1. Basic Create](#1-basic-create)
    - [1.1. Basic](#11-basic)
    - [1.2. Distribution](#12-distribution)
    - [1.3. Loop](#13-loop)
- [2. Mathematic Symbols with tf](#2-mathematic-symbols-with-tf)
    - [2.1. math](#21-math)
    - [2.2. Linear Algebra](#22-linear-algebra)
- [3. Functions 函数](#3-functions-%E5%87%BD%E6%95%B0)
    - [3.1. Basic](#31-basic)
    - [3.2. Loss Function 损失函数](#32-loss-function-%E6%8D%9F%E5%A4%B1%E5%87%BD%E6%95%B0)
    - [3.3. Neural Network](#33-neural-network)

<!-- /MarkdownTOC -->



<a id="1-basic-create"></a>
## 1. Basic Create

******************

<a id="11-basic"></a>
### 1.1. Basic

* tf.constant 简单的定义
    - scalar 标量
    - vector 向量
    - matrix 矩阵


```python
scalar = tf.constant(1., name='scalar') 
vector = tf.constant([1.,1.,2.,3.,4.,3.,3.,2.,1.,2.], name='vector')
matrix = tf.constant([[1., 2.],[3., 4.]], name ='matrix')
tf.print(scalar,' scalar \n', vector, 'vector \n', matrix, ' matrix')
```

    1  scalar 
     [1 1 2 ... 2 1 2] vector 
     [[1 2]
     [3 4]]  matrix


* tf.convert_to_tensor(value, dtype=tf.float32): 转换成 tensor 格式
    - value: Tensor, numpy arrays, python lists, python scalars 可转换类型 
* tf.zeros([...,a,b], dtype=tf.float32): 创建 ...个(a*b) 的空矩阵  $ \pmatrix{ 0_{1,1} & \dots & 0_{1,b} \\ \dots & \dots & \dots \\  0_{a,1} & \dots & 0_{a,b} }_{a \times b} ,\dots $
    - tf.ones(shape, dtype=tf.float32): 创建shape的全1矩阵
    - tf.zeros_like(input): 创建相同shape的空矩阵
    - tf.fill(shape,value): 创建shape的全value矩阵
* tf.identity(input) 恒等映射 类似copy, 输出相同输入值
* tf.cast(value, dtype): 类型转换
    - dtypes: `uint8`, `uint16`, `uint32`, `uint64`, `int8`, `int16`, `int32`, `int64`, `float16`, `float32`, `float64`, `complex64`, `complex128`, `bfloat16`.
    - For complex number, only real part of value is return
* tf.shape(input, out_type=tf.int32)
    - tensor.shape
* tf.size(input, out_type=tf.int32)
* tf.rank(input, out_type=tf.int32) 
* tf.reshape(input, shape) 
* tf.expand_dims(input, axis) 插入一维
* tf.slice(input_, begin, size) 切片
* tf.split(split_dim, num_split, value, name='split') 分离
* tf.concat(values, axis, name='concat') 连结合并
* tf.reverse(tensor, axis, name=None) 序列反转
* tf.transpose(a, perm=None, conjugate=False, name='transpose') 调换维度顺序
* tf.gather() 合并索引indices所指示params中的切片
* tf.one_hot() 


```python
tf.one_hot([0,2,3,2],4, on_value=5, off_value=0)
```




    <tf.Tensor: id=10, shape=(4, 4), dtype=int32, numpy=
    array([[5, 0, 0, 0],
           [0, 0, 5, 0],
           [0, 0, 0, 5],
           [0, 0, 5, 0]])>



* tf.print(): `print()` in Tensorflow
* tf.summary...: summary tag used for TensorBoard

<a id="12-distribution"></a>
### 1.2. Distribution

* tf.random.unifrom 随机均匀分布
    - minval, maxval: 最小与最大值

* tf.random.normal 随机正态分布
    - mean: 正态分布的均值
    - stddev: 正态分布的标准差
    - tf.random.truncated_normal 截断正态分布


```python
random_uniform_2_2 = tf.random.uniform([2,2],minval=0,maxval=1,name='uniform_distribution')
tf.print('Uniform distribution: \n', random_uniform_2_2)

random_normal_2_2 = tf.random.normal([2,2], mean=0.0, stddev=1.0, dtype=tf.float32, seed=None, name='normal_distribution')
tf.print('Normal distribution: \n', random_normal_2_2)
```

    Uniform distribution: 
     [[0.067463994 0.870353]
     [0.81344986 0.0281436443]]
    Normal distribution: 
     [[1.282112 -0.353030533]
     [-0.508329332 1.42963946]]
    

<a id="13-loop"></a>
### 1.3. Loop

* 使用 tf.while_loop 实现 for loop
    - cond: 返回 bool 值
    - body: 返回 input 的相同格式的值


```python
def cond(a,b)->bool: return a< 5 # return bool formate
def body(a,b): return a+1, tf.add(b,b) # return same formate as input
tf.print('For 5 loops: ', tf.while_loop(cond, body, [1,scalar],name='for5loop'))
```

    For 5 loops:  (5, 16)


<a id="2-mathematic-symbols-with-tf"></a>
## 2. Mathematic Symbols with tf

***********************

<a id="21-math"></a>
### 2.1. math

Using tf.math

* tf.add(a,b): $ a_i + b_i $ 加法 两个相加
* tf.add_n([a,b,c, ...]): $ a_i + b_i + c_i + \dots $ 几个数相加
* tf.multiply(a,b, name='dot_product'): $ a_i \times b_i $ elements dot product 元素相乘


```python
matrix1 = tf.constant([[2., 3.],[1., 4.]])
matrix2 = tf.constant([[4., 3.],[2., 1.]])
tf.print('Add: ', matrix + matrix1 + matrix2)
tf.print('Add: ', tf.add(matrix, matrix2,name='add'))
tf.print('Add element wise: ', tf.add_n([matrix,matrix1, matrix2],name='addwise'))
tf.print('Multiply(dot_product): ', tf.multiply(matrix,matrix2,name='multi'))
```

    Add:  [[7 8]
     [6 9]]
    Add:  [[5 5]
     [5 5]]
    Add element wise:  [[7 8]
     [6 9]]
    Multiply(dot_product):  [[4 6]
     [6 4]]
    

* tf.subtract(a,b, name='minus'): $ a_i - b_i $ 减法
* tf.divide(a,b, name ='divide'): $ a_i \div b_i $ 除法
* tf.pow(a,b): $ a^b $ Power 幂
* tf.square(a): $ a_i^2 $ 平方
* tf.sqrt(a): $ \sqrt{a_i} $ 平方根
* tf.negative(a): $ - a_i $ 取负
* tf.abs(a): $ \vert a_i \vert $ 绝对值
* tf.sign(a): $ sign(a_i) = -1 \ \mathrm{if} \ a_i < 0; 0 \ \mathrm{if}\ a_i == 0; 1 \ \mathrm{if} \  a_i > 0 $ 取符号
* tf.exp(a): $ e^{a_i} $ 自然数e指数取值
* tf.math.reciprocal(a): $ \frac{1}{a_i} $ 取倒数
* tf.round(a): round 四舍五入
* tf.math.ceil(a): $ \lceil a \rceil $ 向上取整
* tf.math.floor(a): $ \lfloor a \rfloor $ 向下取整
* tf.math.rint(a): most close integer 取最近整数

* 三角函数：
    - tf.math.cos(a): $ \cos{(a)} $
    - tf.math.cosh(a): $ \cosh{(a)} $ 
    - etc.


```python
tf.math.cosh(matrix)
```




    <tf.Tensor: id=45, shape=(2, 2), dtype=float32, numpy=
    array([[ 1.5430807,  3.7621956],
           [10.067662 , 27.308233 ]], dtype=float32)>



*******************

**Complex number**

* tf.complex(real_tensor, imag_tensor, name=None)
* tf.abs(x, name=None) 复数绝对值(长度)
* tf.math.conj(input, name=None) 共轭复数
* tf.math.image(input, name=None) 取虚数
* tf.math.real(input, name=None) 取实数
* tf.signal.fft(input, name=None) Fast Fourier transform 傅里叶变换

<a id="22-linear-algebra"></a>
### 2.2. Linear Algebra

Using tf.linalg

******************

**Calculate Matrix**

* tf.matmul(A,B): $ A \times B $ matrixs times 矩阵乘法
* tf.linalg.inv(A): $ A^{-1} $ inverse matrix 逆矩阵
* tf.linalg.matrix_transpose(A): $ A^\top $ 矩阵轴变换(最后两维进行转置)
* tf.linalg.adjoint(A): conjugates last two dimensions of matrix $ A^* $ 伴随矩阵
* tf.linalg.matvect(A,B): $ [a_1, a_2, \dots, a_i]_j \times [b_1, b_2, \dots, b_i]_j $ 横向相乘

******************

**Matrix Create**

* tf.linalg.diag([a,b,...]): **Diagonal matrix** -> $ \pmatrix{a & 0 & 0 \\ 0 & b & 0 \\  0 & 0 & \dots } $
* tf.eye(num_rows): **Identity matrix** -> $ \pmatrix{ 1 & 0 & 0 \\ 0 & 1 & 0 \\  0 & 0 & \dots } $

******************

**Matrix compute**

* tf.linalg.eigh(A): return eigenvalues, eigenvectors
* tf.linalg.trace(A): Trace of A 对角线和 (矩阵迹)
* tf.linalg.norm(A, ord='euclidean'): norm of A 求范数
* tf.matrix_determinant(input, name=None): 返回方阵的行列式


```python
tf.print('Multiply(matrix): \n', tf.matmul(matrix,matrix2,name='matrixmulti'))
```

    Multiply(matrix): 
     [[8 5]
     [20 13]]


<a id="3-functions-%E5%87%BD%E6%95%B0"></a>
## 3. Functions 函数

**************

<a id="31-basic"></a>
### 3.1. Basic

* params: `input_tensor, axis=None, keepdims=False, name=None`
    - `keepdims`: 是否保留原维度
    - `axis = 0`: horizontal 横向
    - `axis = 1`: vertical 纵向
* tf.reduce_mean() 求平均数
* tf.reduce_max() 求最大值
* tf.reduce_sum() 求所有和
* tf.reduce_prod() 求所有乘积
* tf.reduce_logsumexp()  求 $ \log( \sum_{i=1}{(e^{a_i})}) $
* tf.reduce_all(bool_input) 求所有值是否都是正确
* tf.reduce_any(bool_input) 求所有值是否有正确
* tf.math.count_nonzero() 计算非零数


```python
tf.print('Mean value: \n', tf.reduce_mean(matrix,0,True))
tf.print('Production value: \n', tf.reduce_prod(matrix))
tf.print('Matrix1: \n', matrix1)
tf.print('Argmax horizontal: \n', tf.argmax(matrix1,1))
tf.print('Argmax vertical: \n', tf.argmax(matrix1,0))
```

    Mean value: 
     [[2 3]]
    Production value: 
     24
    Matrix1: 
     [[2 3]
     [1 4]]
    Argmax horizontal: 
     [1 1]
    Argmax vertical: 
     [0 1]
    

******************
* 大小比较
    - 对比元素, 返回 bool 值

* tf.equal(a,b)
* tf.not_equal(a,b)
* tf.less(a,b)
* tf.less_equal(a,b)
* tf.greater(a,b)
* tf.greater_equal(a,b)

*****************

* tf.unique(value, out_idx = tf.int32): 输出唯一值与它的坐标index
* tf.where(bool_input, x=None, y=None): 输出每个True的坐标 若x,y为空
* tf.argmax(pred, axis=1)  返回最大数值所在的坐标
* tf.argmin(pred, axis=1)  返回最小数值所在的坐标
* tf.math.invert_permutation(value) 返回反坐标


```python
tf.print('Does two matrixs equal: \n', tf.equal(matrix, matrix1))
tf.print('Get vector unique: \n', tf.unique(vector))
```

    Does two matrixs equal: 
     [[0 0]
     [0 1]]
    Get vector unique: 
     Unique(y=[1 2 3 4], idx=[0 0 1 ... 1 0 1])
    

<a id="32-loss-function-%E6%8D%9F%E5%A4%B1%E5%87%BD%E6%95%B0"></a>
### 3.2. Loss Function 损失函数

* L2 Norm
    - tf.nn.l2_loss(x): $ \frac{\sum {t^2}}{2} $
* Cross Entropy 交叉熵函数
    - tf.nn.softmax_cross_entropy_with_logits(pred, y)


```python
tf.print('Cross entropy: ', tf.nn.softmax_cross_entropy_with_logits(matrix,matrix2))
```

    Cross entropy:  [2.939785 6.19283152]


<a id="33-neural-network"></a>
### 3.3. Neural Network

* tf.sigmoid(x) sigmoid 激活: $ \frac{1}{(1+e^{-x})} $
    - 还可用其他形式:  tf.nn.sigmoid(x), tf.math.sigmoid(x)
* tf.nn.relu(x) 整流函数: $ \max (x,0) $ 
* tf.nn.relu(x) 以6为阈值的整流函数: $ \min (\max(x,0),6) $
* tf.nn.elu(x) exponential linear: $ e^x -1 \ \text{if}\ < 0 \ \text{otherwise}\ x $ 
* tf.nn.softplus(x): $ \log{(e^x +1)} $
* tf.nn.dropout(x,rate,noise_shape=None,seed=None): rate=0.1 drop 10% of x
* tf.nn.bias_add(value, 1D_bias, data_format=None): 加一偏置量
* tf.nn.tanh(x) hyperbolic tangent 双曲线切线激活函数: $ [-\inf, \inf] \to [-1,1] $
* tf.nn.l2_normalize(x, axis=None, epsilon=1e-12) L2范式标准化: $ \frac{x}{\sqrt{\max(\sum x^2, \ \epsilon)}} $
* tf.nn.softmax(x, axis=-1): $ \frac{e^{x_{i,j}}}{\sum(e^{x_{i,j}}, \text{axis})} $
* tf.nn.log_softmax(x, axis=-1): $ x_{i,j} - \ln(\sum (e^{x_{i,j}}, \text{axis})) $
* [Others NN or RNN]


```python
tf.print('Sigmoid: ', tf.sigmoid(matrix, name='sigmoid'))
```

    Sigmoid:  [[0.731058598 0.880797]
     [0.952574134 0.982013762]]

