---
layout: post  
title: 'Signals and Systems'  
description: '信号与系统 学习笔记'  
date: 2020-02-27  
tag: Math  

---

<!-- MarkdownTOC -->

- [1. Introduction](#1-introduction)
    - [1.1. 周期信号](#11-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7)
        - [1.1.1. 连续信号周期](#111-%E8%BF%9E%E7%BB%AD%E4%BF%A1%E5%8F%B7%E5%91%A8%E6%9C%9F)
        - [1.1.2. 离散信号周期](#112-%E7%A6%BB%E6%95%A3%E4%BF%A1%E5%8F%B7%E5%91%A8%E6%9C%9F)
    - [1.2. 信号分类](#12-%E4%BF%A1%E5%8F%B7%E5%88%86%E7%B1%BB)
        - [1.2.1. 能量信号](#121-%E8%83%BD%E9%87%8F%E4%BF%A1%E5%8F%B7)
        - [1.2.2. 功率信号](#122-%E5%8A%9F%E7%8E%87%E4%BF%A1%E5%8F%B7)
        - [1.2.3. 因果信号](#123-%E5%9B%A0%E6%9E%9C%E4%BF%A1%E5%8F%B7)
        - [1.2.4. 反因果信号](#124-%E5%8F%8D%E5%9B%A0%E6%9E%9C%E4%BF%A1%E5%8F%B7)
        - [1.2.5. 其他类型](#125-%E5%85%B6%E4%BB%96%E7%B1%BB%E5%9E%8B)
        - [1.2.6. Remark](#126-remark)
    - [1.3. 冲激函数](#13-%E5%86%B2%E6%BF%80%E5%87%BD%E6%95%B0)
        - [1.3.1. 单位冲激函数  Dirac delta function](#131-%E5%8D%95%E4%BD%8D%E5%86%B2%E6%BF%80%E5%87%BD%E6%95%B0-dirac-delta-function)
        - [1.3.2. 阶跃函数](#132-%E9%98%B6%E8%B7%83%E5%87%BD%E6%95%B0)
        - [1.3.3. 广义函数定义](#133-%E5%B9%BF%E4%B9%89%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89)
        - [1.3.4. 取样性质](#134-%E5%8F%96%E6%A0%B7%E6%80%A7%E8%B4%A8)
        - [1.3.5. 导数](#135-%E5%AF%BC%E6%95%B0)
        - [1.3.6. 尺度变化](#136-%E5%B0%BA%E5%BA%A6%E5%8F%98%E5%8C%96)

<!-- /MarkdownTOC -->


********

<a id="1-introduction"></a>
# 1. Introduction

<a id="11-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7"></a>
## 1.1. 周期信号

* Period Signal

<a id="111-%E8%BF%9E%E7%BB%AD%E4%BF%A1%E5%8F%B7%E5%91%A8%E6%9C%9F"></a>
### 1.1.1. 连续信号周期

* 连续周期信号 $ f(t) $, 周期为 $ T $, 满足 
    $$ f(t) = f(t + mT), \ m = 0, \pm 1, \pm 2, \dots $$ 
    * 典型周期连续信号: 余弦信号 $ \cos \omega t $ 周期为 $ T = \frac{2\pi}{\omega}(s) $  
    
<a id="112-%E7%A6%BB%E6%95%A3%E4%BF%A1%E5%8F%B7%E5%91%A8%E6%9C%9F"></a>
### 1.1.2. 离散信号周期

* 离散周期信号 $ f(k) $, 周期为 $ N $, 满足  
    $$ f(k) = f(k +mN), \ m = 0, \pm 1, \pm 2, \dots $$  

********

<a id="12-%E4%BF%A1%E5%8F%B7%E5%88%86%E7%B1%BB"></a>
## 1.2. 信号分类

* 将信号 $ f(t) $ 施加于 $ 1 \Omega $ 电阻上， 所消耗的瞬时功率为 $ \lvert f(t) \rvert ^2 $, 在区间 $ ( -\infty, \infty) $ 的**能量**和**平均功率**定义为  
    $$ E \overset{def}{=} \int_{-\infty}^\infty \lvert f(t) \rvert ^2 dt $$  
    $$ P \overset{def}{=} \lim_{T \to \infty} \frac{1}{T} \int_{-T/2}^{T/2} \lvert f(t) \rvert ^2 dt $$  

<a id="121-%E8%83%BD%E9%87%8F%E4%BF%A1%E5%8F%B7"></a>
### 1.2.1. 能量信号

* **能量有限信号**: 信号的能量 $ E < \infty $ , 简称 **能量信号** , 此时 $ P = 0 $.
    * 离散: $ E = \displaystyle\sum_{k=-\infty}^{\infty} \lvert f(k) \rvert ^2 < \infty $  

<a id="122-%E5%8A%9F%E7%8E%87%E4%BF%A1%E5%8F%B7"></a>
### 1.2.2. 功率信号

* **功率有限信号**: 信号的功率 $ P < \infty $ , 简称 **功率信号** , 此时 $ E = \infty $.  
    * 离散: $ P = \displaystyle \lim_{N \to \infty} \frac{1}{N} \sum_{k=-N/2}^{N/2} \lvert f(k) \rvert ^2 < \infty $  

<a id="123-%E5%9B%A0%E6%9E%9C%E4%BF%A1%E5%8F%B7"></a>
### 1.2.3. 因果信号

* **因果信号**: $ t <0, \ f(t) = 0 $ 的信号  
    * 例如: 阶跃信号  

<a id="124-%E5%8F%8D%E5%9B%A0%E6%9E%9C%E4%BF%A1%E5%8F%B7"></a>
### 1.2.4. 反因果信号

* **反因果信号**: $ t \leq 0, \ f(t) = 0 $ 的信号  

<a id="125-%E5%85%B6%E4%BB%96%E7%B1%BB%E5%9E%8B"></a>
### 1.2.5. 其他类型

* 一维信号， 多维信号； 实信号，复信号； 左信号， 右信号。。。。。。

<a id="126-remark"></a>
### 1.2.6. Remark

1. 时限信号为能量信号  
2. 周期信号为功率信号  
3. 非周期信号 可能为能量也可能为功率信号  
4. $ f(t) = e^t $ 既不是能量也不是功率信号  


<a id="13-%E5%86%B2%E6%BF%80%E5%87%BD%E6%95%B0"></a>
## 1.3. 冲激函数

$$ \delta (x) \overset{def}{=} {\begin{cases} 0 , & x\neq 0 \\ 1 , & x = 0 \end{cases}} $$  

<a id="131-%E5%8D%95%E4%BD%8D%E5%86%B2%E6%BF%80%E5%87%BD%E6%95%B0-dirac-delta-function"></a>
### 1.3.1. 单位冲激函数  Dirac delta function

* **单位冲激函数**: 奇异函数, 强度极大, 作用时间极短的物理量的理想化模型  
    $$ {\begin{cases} \delta (x) = 0 , & x\neq 0 \\ \int_{-\infty}^{\infty} \delta(x) dx = 1 \end{cases}} $$  
    * aka Dirac delta function  
    * 高度无穷大, 宽度无穷小, 面积为 1 的对称窄脉冲  
    
<a id="132-%E9%98%B6%E8%B7%83%E5%87%BD%E6%95%B0"></a>
### 1.3.2. 阶跃函数

* **阶跃函数**:  
    $$ \varepsilon(t) \overset{def}{=} {\begin{cases} 0, & t<0 \\ 1, & t>0 \end{cases}} $$
    * 积分: $ \int_{-\infty}^{t} \varepsilon(\tau)d\tau = t \cdot \varepsilon(t) $  
    * 与 冲激函数 关联:  
        * $ \delta(t) = \frac{d \varepsilon(t)}{dt} $  
        * $ \varepsilon(t) = \int_{-\infty}^{t} \delta(\tau) d\tau $  
        
<a id="133-%E5%B9%BF%E4%B9%89%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89"></a>
### 1.3.3. 广义函数定义

* Dirac Delta function **广义函数定义**:  
    $$ \int_{-\infty}^{\infty} \delta(t) \varphi(t)dt = \varphi(0) $$  
    * 冲激函数 $ \delta (t) $ 作用于检验函数 $ \varphi (t) $ 的结果是赋值为 $ \varphi (0) $, 称为 冲激函数的取样性质。  
    * 例如: 
        * 高斯函数 $ \delta(t) = \lim_{b\to \infty} b e^{-\pi(b\cdot t)^2} $  
        * 取样函数 $ \delta(t) =  \lim_{b\to \infty} \frac{\sin(bt)}{\pi t} $  

<a id="134-%E5%8F%96%E6%A0%B7%E6%80%A7%E8%B4%A8"></a>
### 1.3.4. 取样性质

* Dirac Delta function **取样性质**:  
    $$ f(t) \delta(t-a) = f(a) \delta(t-a) \longrightarrow f(t) \delta(t) = f(0) \delta(t) $$  
    $$ \int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a) \longrightarrow \int_{-\infty}^{\infty} f(t) \delta(t) dt = f(0) $$  
    * Notice: 积分区间要包含 t=a  
    
<a id="135-%E5%AF%BC%E6%95%B0"></a>
### 1.3.5. 导数

* Dirac Delta function **导数**:  
    * 冲激偶 $ \delta^\prime (t) $:  
        $$ f(t) \delta^\prime (t) = f(0)\delta^\prime(t) - f^\prime(0)\delta(t) $$  
        $$ \int_{-\infty}^{\infty} f(t) \delta^\prime(t) dt = - f^\prime(0) $$  
        $$ \int_{-\infty}^{\infty} f(t) \delta^\prime(t-a) dt = - f^\prime(a) $$  
        $$ \int_{-\infty}^{\infty} f(t) \delta^{(n)}(t) dt = (-1)^nf^{(n)}(0) $$  
        
<a id="136-%E5%B0%BA%E5%BA%A6%E5%8F%98%E5%8C%96"></a>
### 1.3.6. 尺度变化

* Dirac Delta function **尺度变化**:  
    $$ \delta(at) = \frac{1}{\lvert a \rvert} \delta(t) $$  
    $$ \delta^{(n)} (at) = \frac{1}{\lvert a \rvert} \frac{1}{a^n} \delta^{(n)}(t) $$  


