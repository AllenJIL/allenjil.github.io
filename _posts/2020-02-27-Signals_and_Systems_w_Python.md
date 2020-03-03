---
layout: post  
title: 'Signals and Systems with Python'  
description: '信号与系统(使用Python) 学习笔记摘录'  
date: 2020-02-27  
tag: Math  

---

[信号与系统]:<https://www.icourse163.org/course/XIDIAN-483006 https://www.icourse163.org/course/XIDIAN-1001638014> "信号与系统"

> 本笔记知识点摘录自 西安电子科技大学 郭宝龙 的 网课 [信号与系统]  

<!-- MarkdownTOC -->

- [1. Introduction](#1-introduction)
    - [1.1. 周期信号](#11-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7)
        - [1.1.1. 连续信号周期](#111-%E8%BF%9E%E7%BB%AD%E4%BF%A1%E5%8F%B7%E5%91%A8%E6%9C%9F)
        - [1.1.2. 离散信号周期](#112-%E7%A6%BB%E6%95%A3%E4%BF%A1%E5%8F%B7%E5%91%A8%E6%9C%9F)
        - [1.1.3. 信号的 Python 表示与绘图](#113-%E4%BF%A1%E5%8F%B7%E7%9A%84-python-%E8%A1%A8%E7%A4%BA%E4%B8%8E%E7%BB%98%E5%9B%BE)
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
    - [1.4. LTI 连续系统](#14-lti-%E8%BF%9E%E7%BB%AD%E7%B3%BB%E7%BB%9F)
        - [1.4.1. 微分方程的经典解法](#141-%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E7%9A%84%E7%BB%8F%E5%85%B8%E8%A7%A3%E6%B3%95)
        - [1.4.2. 初始值](#142-%E5%88%9D%E5%A7%8B%E5%80%BC)
        - [1.4.3. 响应](#143-%E5%93%8D%E5%BA%94)
        - [1.4.4. Python 求解系统的响应](#144-python-%E6%B1%82%E8%A7%A3%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%93%8D%E5%BA%94)
        - [1.4.5. 冲激响应](#145-%E5%86%B2%E6%BF%80%E5%93%8D%E5%BA%94)
        - [1.4.6. 阶跃响应](#146-%E9%98%B6%E8%B7%83%E5%93%8D%E5%BA%94)
        - [1.4.7. Python 冲激响应与阶跃响应](#147-python-%E5%86%B2%E6%BF%80%E5%93%8D%E5%BA%94%E4%B8%8E%E9%98%B6%E8%B7%83%E5%93%8D%E5%BA%94)
        - [1.4.8. 卷积积分 Convolution](#148-%E5%8D%B7%E7%A7%AF%E7%A7%AF%E5%88%86-convolution)
        - [1.4.9. Python 求卷积积分](#149-python-%E6%B1%82%E5%8D%B7%E7%A7%AF%E7%A7%AF%E5%88%86)
        - [1.4.10. 连续系统的算子 P](#1410-%E8%BF%9E%E7%BB%AD%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%AE%97%E5%AD%90-p)
    - [1.5. 差分方程](#15-%E5%B7%AE%E5%88%86%E6%96%B9%E7%A8%8B)
        - [1.5.1. 定义](#151-%E5%AE%9A%E4%B9%89)
        - [1.5.2. 经典解法](#152-%E7%BB%8F%E5%85%B8%E8%A7%A3%E6%B3%95)
        - [1.5.3. 初始值](#153-%E5%88%9D%E5%A7%8B%E5%80%BC)
        - [1.5.4. 响应](#154-%E5%93%8D%E5%BA%94)
        - [1.5.5. Python 求解离散系统的零状态响应](#155-python-%E6%B1%82%E8%A7%A3%E7%A6%BB%E6%95%A3%E7%B3%BB%E7%BB%9F%E7%9A%84%E9%9B%B6%E7%8A%B6%E6%80%81%E5%93%8D%E5%BA%94)
        - [1.5.6. 单位脉冲序列](#156-%E5%8D%95%E4%BD%8D%E8%84%89%E5%86%B2%E5%BA%8F%E5%88%97)
        - [1.5.7. 单位阶跃序列](#157-%E5%8D%95%E4%BD%8D%E9%98%B6%E8%B7%83%E5%BA%8F%E5%88%97)
        - [1.5.8. 单位脉冲响应](#158-%E5%8D%95%E4%BD%8D%E8%84%89%E5%86%B2%E5%93%8D%E5%BA%94)
        - [1.5.9. 单位阶跃响应](#159-%E5%8D%95%E4%BD%8D%E9%98%B6%E8%B7%83%E5%93%8D%E5%BA%94)
        - [1.5.10. Python 求解单位脉冲响应](#1510-python-%E6%B1%82%E8%A7%A3%E5%8D%95%E4%BD%8D%E8%84%89%E5%86%B2%E5%93%8D%E5%BA%94)
        - [1.5.11. 卷积和](#1511-%E5%8D%B7%E7%A7%AF%E5%92%8C)
        - [1.5.12. Python 求卷积和](#1512-python-%E6%B1%82%E5%8D%B7%E7%A7%AF%E5%92%8C)
        - [1.5.13. 差分算子 E](#1513-%E5%B7%AE%E5%88%86%E7%AE%97%E5%AD%90-e)

<!-- /MarkdownTOC -->



********

<a id="1-introduction"></a>
# 1. Introduction

<a id="11-%E5%91%A8%E6%9C%9F%E4%BF%A1%E5%8F%B7"></a>
## 1.1. 周期信号

* Period Signal

<a id="111-%E8%BF%9E%E7%BB%AD%E4%BF%A1%E5%8F%B7%E5%91%A8%E6%9C%9F"></a>
### 1.1.1. 连续信号周期

* 连续周期信号 $f(t)$, 周期为 $T$, 满足 
    $$ f(t) = f(t + mT), \ m = 0, \pm 1, \pm 2, \dots $$ 
    * 典型周期连续信号: 余弦信号 $\cos \omega t$ 周期为 $T = \frac{2\pi}{\omega}(s)$  
    
<a id="112-%E7%A6%BB%E6%95%A3%E4%BF%A1%E5%8F%B7%E5%91%A8%E6%9C%9F"></a>
### 1.1.2. 离散信号周期

* 离散周期信号 $f(k)$, 周期为 $N$, 满足  
    $$ f(k) = f(k +mN), \ m = 0, \pm 1, \pm 2, \dots $$  

<a id="113-%E4%BF%A1%E5%8F%B7%E7%9A%84-python-%E8%A1%A8%E7%A4%BA%E4%B8%8E%E7%BB%98%E5%9B%BE"></a>
### 1.1.3. 信号的 Python 表示与绘图

* 连续信号 $f(t) = 5 e^{-0.8t} \sin(\pi t), \, 0<t<5$ 绘图  


```python
    # 导入 numpy 与 plot 库  
    import numpy as np
    import matplotlib.pyplot as plt

    b = 5  
    a = 0.8
    # t = np.mgrid[0:5:0.01]
    t = np.linspace(0,5,100)
    y = b*np.exp(-a*t)*np.sin(np.pi*t)
    plt.xlabel('time')
    plt.ylabel('Y')
    plt.plot(t,y)
    plt.grid(True)
    plt.show()
```

<img src="/images/signal/2.png">


********

<a id="12-%E4%BF%A1%E5%8F%B7%E5%88%86%E7%B1%BB"></a>
## 1.2. 信号分类

* 将信号 $f(t)$ 施加于 $1 \Omega$ 电阻上， 所消耗的瞬时功率为 $\lvert f(t) \rvert ^2$, 在区间 $( -\infty, \infty)$ 的**能量**和**平均功率**定义为  
    $$ E \overset{def}{=} \int_{-\infty}^\infty \lvert f(t) \rvert ^2 dt $$  
    $$ P \overset{def}{=} \lim_{T \to \infty} \frac{1}{T} \int_{-T/2}^{T/2} \lvert f(t) \rvert ^2 dt $$  

<a id="121-%E8%83%BD%E9%87%8F%E4%BF%A1%E5%8F%B7"></a>
### 1.2.1. 能量信号

* **能量有限信号**: 信号的能量 $E < \infty$ , 简称 **能量信号** , 此时 $P = 0$.
    * 离散: $E = \displaystyle\sum_{k=-\infty}^{\infty} \lvert f(k) \rvert ^2 < \infty$  

<a id="122-%E5%8A%9F%E7%8E%87%E4%BF%A1%E5%8F%B7"></a>
### 1.2.2. 功率信号

* **功率有限信号**: 信号的功率 $P < \infty$ , 简称 **功率信号** , 此时 $E = \infty$.  
    * 离散: $P = \displaystyle \lim_{N \to \infty} \frac{1}{N} \sum_{k=-N/2}^{N/2} \lvert f(k) \rvert ^2 < \infty$  

<a id="123-%E5%9B%A0%E6%9E%9C%E4%BF%A1%E5%8F%B7"></a>
### 1.2.3. 因果信号

* **因果信号**: $t <0, \ f(t) = 0$ 的信号  
    * 例如: 阶跃信号  

<a id="124-%E5%8F%8D%E5%9B%A0%E6%9E%9C%E4%BF%A1%E5%8F%B7"></a>
### 1.2.4. 反因果信号

* **反因果信号**: $t \leq 0, \ f(t) = 0$ 的信号  

<a id="125-%E5%85%B6%E4%BB%96%E7%B1%BB%E5%9E%8B"></a>
### 1.2.5. 其他类型

* 一维信号， 多维信号； 实信号，复信号； 左信号， 右信号。。。。。。

<a id="126-remark"></a>
### 1.2.6. Remark

1. 时限信号为能量信号  
2. 周期信号为功率信号  
3. 非周期信号 可能为能量也可能为功率信号  
4. $f(t) = e^t$ 既不是能量也不是功率信号  


*******************

<a id="13-%E5%86%B2%E6%BF%80%E5%87%BD%E6%95%B0"></a>
## 1.3. 冲激函数

$$\begin{align} \delta (x) \overset{def}{=} {\begin{cases} 0 , & x\neq 0 \\ 1 , & x = 0 \end{cases}} \end{align}$$  

<a id="131-%E5%8D%95%E4%BD%8D%E5%86%B2%E6%BF%80%E5%87%BD%E6%95%B0-dirac-delta-function"></a>
### 1.3.1. 单位冲激函数  Dirac delta function

* **单位冲激函数**: 奇异函数, 强度极大, 作用时间极短的物理量的理想化模型  
    $$\begin{align} {\begin{cases} \delta (x) = 0 , & x\neq 0 \\ \int_{-\infty}^{\infty} \delta(x) dx = 1 \end{cases}} \end{align}$$  
    * aka Dirac delta function  
    * 高度无穷大, 宽度无穷小, 面积为 1 的对称窄脉冲  
    
<a id="132-%E9%98%B6%E8%B7%83%E5%87%BD%E6%95%B0"></a>
### 1.3.2. 阶跃函数

* **阶跃函数**:  
    $$ \varepsilon(t) \overset{def}{=} {\begin{cases} 0, & t<0 \\ 1, & t>0 \end{cases}} $$
    * 积分: $\int_{-\infty}^{t} \varepsilon(\tau)d\tau = t \cdot \varepsilon(t)$  
    * 与 冲激函数 关联:  
        * $\delta(t) = \frac{d \varepsilon(t)}{dt}$  
        * $\varepsilon(t) = \int_{-\infty}^{t} \delta(\tau) d\tau$  
        
<a id="133-%E5%B9%BF%E4%B9%89%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89"></a>
### 1.3.3. 广义函数定义

* Dirac Delta function **广义函数定义**:  
    $$ \int_{-\infty}^{\infty} \delta(t) \varphi(t)dt = \varphi(0) $$  
    * 冲激函数 $\delta (t)$ 作用于检验函数 $\varphi (t)$ 的结果是赋值为 $\varphi (0)$, 称为 冲激函数的取样性质。  
    * 例如: 
        * 高斯函数 $\delta(t) = \lim_{b\to \infty} b e^{-\pi(b\cdot t)^2}$  
        * 取样函数 $\delta(t) =  \lim_{b\to \infty} \frac{\sin(bt)}{\pi t}$  

<a id="134-%E5%8F%96%E6%A0%B7%E6%80%A7%E8%B4%A8"></a>
### 1.3.4. 取样性质

* Dirac Delta function **取样性质**:  
    $$ f(t) \delta(t-a) = f(a) \delta(t-a) \longrightarrow f(t) \delta(t) = f(0) \delta(t) $$  
    $$ \int_{-\infty}^{\infty} f(t) \delta(t-a) dt = f(a) \longrightarrow \int_{-\infty}^{\infty} f(t) \delta(t) dt = f(0) $$  
    * Notice: 积分区间要包含 $t=a$  
    
<a id="135-%E5%AF%BC%E6%95%B0"></a>
### 1.3.5. 导数

* Dirac Delta function **导数**:  
    * 冲激偶 $\delta^\prime (t)$:  
        $$ f(t) \delta^\prime (t) = f(0)\delta^\prime(t) - f^\prime(0)\delta(t) $$  
        $$ \int_{-\infty}^{\infty} f(t) \delta^\prime(t) dt = - f^\prime(0) $$  
        $$ \int_{-\infty}^{\infty} f(t) \delta^\prime(t-a) dt = - f^\prime(a) $$  
        $$ \int_{-\infty}^{\infty} f(t) \delta^{(n)}(t) dt = (-1)^nf^{(n)}(0) $$  
        
<a id="136-%E5%B0%BA%E5%BA%A6%E5%8F%98%E5%8C%96"></a>
### 1.3.6. 尺度变化

* Dirac Delta function **尺度变化**:  
    $$ \delta(at) = \frac{1}{\lvert a \rvert} \delta(t) $$  
    $$ \delta^{(n)} (at) = \frac{1}{\lvert a \rvert} \frac{1}{a^n} \delta^{(n)}(t) $$  

************

<a id="14-lti-%E8%BF%9E%E7%BB%AD%E7%B3%BB%E7%BB%9F"></a>
## 1.4. LTI 连续系统

$$f(t) \to \text{LTI (linear time-invariant systems)} \to y(t)$$

<a id="141-%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E7%9A%84%E7%BB%8F%E5%85%B8%E8%A7%A3%E6%B3%95"></a>
### 1.4.1. 微分方程的经典解法

$$y^{(n)}(t) + a_{n-1}y^{(n-1)}(t)+\dots + a_1y^{(1)}(t) + a_0y(t) \\ = b_mf^{(m)}(t)+b_{m-1}f^{(m-1)}(t) + \dots + b_1f^{(1)}(t) +b_0f(t)$$ 

* **经典解法**: $y(t) = y_h(t) + y_p(t)$  
    * $y(t)$ **完全解**   
    * $y_h(t)$ **齐次解** **homogeneous solution**  
    * $y_p(t)$ **特解** 

* **特征根**: eigenvalue 特征值  
    $$ \lambda^n + a_{n-1}\lambda^{n-1} + \dots + a_0 = 0\, \to\, \lambda_i(i=1,2,\dots, n)$$

<img src="/images/signal/diffw.PNG">  

<a id="142-%E5%88%9D%E5%A7%8B%E5%80%BC"></a>
### 1.4.2. 初始值

* **初始值**: 是n阶系统在 $t=0$ 时接入激励, 其响应在 $t=0_+$ 时刻的值, 即 $y^{(j)}(0_+) \, (j=0,1,2,\dots,{n-1})$  

* **初始状态**: 是系统在激励尚未接入的 $t=0_-$ 时刻的响应值 $y^{(j)}(0_-)$, 该值反映了系统的历史情况，且与激励无关。  

<a id="143-%E5%93%8D%E5%BA%94"></a>
### 1.4.3. 响应

$$y(t) = y_{zi}(t) + y_{zs}(t)$$

* **零输入响应**: $y_{zi}(t)$ (zero input)  

* **零状态响应**: $y_{zs}(t)$ (zero status)
    * $y_{zs}(0_-) = 0 \longrightarrow y_{zi}(0_+)=y_{zi}(0_-)=y(0_-)$

* **响应分类**:  
    * 固有响应：系统固有频率 或叫自由响应  
    * 强迫响应：与激励函数有关  
    * 暂态响应：随时间增长而消失  
    * 稳态响应：通常为阶跃函数和周期  

<a id="144-python-%E6%B1%82%E8%A7%A3%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%93%8D%E5%BA%94"></a>
### 1.4.4. Python 求解系统的响应

* 系统的微分方程为 
    $$ 77 y{\left(t \right)} + 2 \frac{d}{d t} y{\left(t \right)} + \frac{d^{2}}{d t^{2}} y{\left(t \right)} = f(t)$$  
    * 在 $t\geq0$ 时，接入激励 $f(t)=10\sin(2\pi t)$, 求零状态响应  
    * 可得 $y^{\prime\prime}{\left(t \right)} = - 77 y{\left(t \right)} - 2 y^{\prime}{\left(t \right)} + f(t) , \, t\geq0$



```python
    # 使用方程解  
    from scipy.integrate import odeint, solve_bvp, solve_ivp
    # odeint: Integrate a system of ordinary differential equations
    # solve_bvp: Solve a boundary-value problem for a system of ODEs
    # solve_ivp: Solve an initial value problem for a system of ODEs

    # 一阶微分方程组  
    def fvdp(t,y):
        '''
        来源：https://www.jianshu.com/p/ab57b600b854?utm_campaign=shakespeare
        要把y看出一个向量，y = [dy0,dy1,dy2,...]分别表示y的n阶导
        对于二阶微分方程，肯定是由0阶和1阶函数组合而成的，所以下面把y看成向量的话，y0表示最初始的函数，也就是我们要求解的函数，y1表示一阶导，对于高阶微分方程也可以以此类推
        '''
        y0, y1 = y
        ft = 10*np.sin(2*np.pi*t)
        y2 = -2*y1-77*y0+ft
        # y0是需要求解的函数，y1是一阶导
        # 返回的顺序是[一阶导， 二阶导]，这就形成了一阶微分方程组
        return [y1, y2]

    y0 = [0, 0] # 初值[0,0]表示y(0)=0,y'(0)=0  
    t = np.linspace(0,5,100)
    y = odeint(fvdp, y0, t, tfirst=True) # 用 odeint 计算 y(t)
    y_ = solve_ivp(fvdp, t_span=(0,5), y0=y0, t_eval=t) # 用 solve_ivp 计算 y(t)

    # 开始绘图
    plt.subplot(211)
    y1, = plt.plot(t, y[:,0], label='y')
    y1_, = plt.plot(t,y[:,1],label='y‘')            
    plt.legend(handles=[y1,y1_], loc='upper right')
    plt.grid(True)

    plt.subplot(212)
    y2, = plt.plot(y_.t, y_.y[0,:],'g--',label='y(0)')
    y2_, = plt.plot(y_.t, y_.y[1,:],'r-',label='y(1)')
    plt.legend(handles=[y2,y2_], loc='upper right')
    plt.grid(True)

    plt.show()
```

<img src="/images/signal/6.png">



```python
    # 用已有库的方法解  
    import scipy.signal as sg
    
    sys = sg.lti([1],[1, 2, 77]) # 方程里的系数  
    ft = 10*np.sin(2*np.pi*t)
    _,y,_ = sg.lsim(sys,ft,T=t)
    # 开始绘图
    plt.plot(t,y,label='simple way') 
    plt.grid(True)
    plt.show()
```


<img src="/images/signal/7.png">


<a id="145-%E5%86%B2%E6%BF%80%E5%93%8D%E5%BA%94"></a>
### 1.4.5. 冲激响应

* 由单位冲激函数 $\delta(t)$ 所引起的零状态响应，记为 $h(t)$ 。  
    * $\delta(t) \to \text{LTI} \to h(t)$  
    * 隐含条件:  
        $f(t) = \delta(t)$  
        对二阶系统 $h(0_-) = h^\prime(0_-) = 0$  

<a id="146-%E9%98%B6%E8%B7%83%E5%93%8D%E5%BA%94"></a>
### 1.4.6. 阶跃响应

* 由单位阶跃函数 $\varepsilon(t)$ 所引起的零状态响应，记为 $g(t)$  
    * $\varepsilon(t) \to \text{LTI} \to g(t)$  
    * 隐含条件:  
        $f(t) = \varepsilon(t)$  
        $g(0_-)=g^\prime(0_-)=0$  
        
* 关联:  
    $g(t) = \int^t_{-\infty} h(\tau) d\tau$  
    $h(t) = \frac{d }{d t}g(t)$  
    
<a id="147-python-%E5%86%B2%E6%BF%80%E5%93%8D%E5%BA%94%E4%B8%8E%E9%98%B6%E8%B7%83%E5%93%8D%E5%BA%94"></a>
### 1.4.7. Python 冲激响应与阶跃响应

* 求以下系统的冲激响应和阶跃响应:  
    $$7y^{\prime\prime}(t) + 4y^{\prime}(t) + 6y(t) = f^\prime(t) + f(t)$$


```python
    sys = sg.lti([1,1],[7,4,6]) # 方程里的系数 由高次幂到低次幂  
    st, sy = sg.step2(sys)
    it, iy = sg.impulse2(sys)
    sy1, = plt.plot(st, sy, label='step')
    iy1, = plt.plot(it, iy, label='impluse')
    # 开始绘图
    plt.legend(handles=[sy1,iy1], loc='upper right')
    plt.grid(True)
    plt.show()
```


<img src="/images/signal/9.png">


*******************

<a id="148-%E5%8D%B7%E7%A7%AF%E7%A7%AF%E5%88%86-convolution"></a>
### 1.4.8. 卷积积分 Convolution

* 来源 $\hat{f}(t) = \displaystyle\sum_{n=-\infty}^{\infty} f(n\Delta)\Delta p(t-n\Delta)$ , p 为脉冲  
    $$\lim_{\Delta\to0} \hat{f}(t) = f(t) = \int_{-\infty}^{\infty} f(\tau)\delta(t-\tau)d\tau$$  
    
* 由 $\int_{-\infty}^{\infty} f(\tau)\delta(t-\tau)d\tau \longrightarrow \int_{-\infty}^{\infty} f(\tau)h(t-\tau)d\tau$  
    可得 $f(t) \to \text{LTI} \to y_{zs}(t)$  
    * 卷积积分 $y_{zs}= \int_{-\infty}^{\infty} f(\tau)h(t-\tau)d\tau$  

* 定义:  
    * $f_1$ 与 $f_2$ 的 卷积: $f(t) =  \int_{-\infty}^{\infty} f_1(\tau)f_2(t-\tau)d\tau$   
    * 记为 $f(t) = f_1(t) \star f_2(t)$  

* 代数性质:  
    * 三定律:  
        1. 交换律: $f_1 \star f_2 = f_2 \star f_1$  
        2. 分配律: $f_1 \star [f_2 + f_3] = f_1\star f_2 + f_1 \star f_3$  
        3. 结合律: $[f_1\star f_2]\star f_3 = f_1\star [f_2 \star f_3]$  
       
* 特性:  
    * $f(t)\star\delta(t-t_0) = \delta(t-t_0) \star f(t) = f(t-t_0)$  
    * $f(t)\star \delta^{(n)}(t) = f^{(n)}(t)$  
    * $f(t) \star \varepsilon(t) = \int_{-\infty}^{t} f(\tau)d\tau$  
    * $\varepsilon(t) \star \varepsilon(t) = t \cdot \varepsilon(t)$  
    * 衍生:  
        * $f(t) = f_1(t)\star f_2(t)$  
        * $f(t-t_1-t_2) = f_1(t-t_1)\star f_2(t-t_2) = f_1(t-t_1-t_2)\star f_2(t) = f_1 \star f_2(t-t_1-t_2)$  
    
* 微分特性:  
    * $\frac{d^n}{d t^n}[f_1(t) \star f_2(t)] = f_1^{(n)}(t) \star f_2(t) = f_1(t) \star f_2^{(n)}(t)$  
    * $\int_{-\infty}^{t}[f_1(\tau) \star f_2(\tau)]d\tau = [\int_{-\infty}^{t}f_1(\tau)d\tau]\star f_2(t) = f_1(t) \star [\int_{-\infty}^{t}f_2(\tau)d\tau]$  
    * if $f_1(-\infty) = 0 \, \text{or} \, f_2^{(-1)}(\infty)=0, \, \text{then} \, f_1(t)\star f_2(t) = f_1^\prime(t) \star f_2^{(-1)}(t)$  


* 常用公式汇总:  
    * $K \star f(t) = K \cdot [f(t) \text{净面积}]$  
    * $f(t) \star \delta(t) = f(t)$  
    * $f(t) \star \delta^\prime(t) = f^\prime(t) \star \delta(t) = f^\prime(t)$  
    * $f(t) \star \varepsilon(t) = f(t) \star \delta^{(-1)} (t) = f^{(-1)}(t) \star \delta(t) = f^{(-1)}(t)$  
    * $\varepsilon(t) \star \varepsilon(t) = t \cdot \varepsilon(t)$  
    * $e^{-\alpha t}\varepsilon(t) \star e^{-\alpha t}\varepsilon(t) = t\cdot e^{-\alpha t}\varepsilon(t)$  
    * $e^{-\alpha_1 t}\varepsilon(t) \star e^{-\alpha_2 t}\varepsilon(t) =\displaystyle\frac{1}{\alpha_2 - \alpha_1}(e^{-\alpha_1 t} - e^{-\alpha_2 t})\varepsilon(t) \, (\alpha_1 \neq \alpha_2)$  
    * $\varepsilon(t) \star e^{-\alpha t}\varepsilon(t) = \frac{1}{\alpha} (1-e^{-\alpha t})\varepsilon(t)$  
    * $f(t) \star \delta_T (t) = f(t) \star \displaystyle \sum^{\infty}_{m=-\infty} \delta(t-mT) =  \sum^{\infty}_{m=-\infty} f(t-mT)$  
        * 周期为 $T$ 的周期单位冲激函数序列 $\delta_T(t) = \sum^\infty_{m=-\infty} \delta(t-mT)$ ， 常称为**梳状 comb 函数**。
        
* 相关函数:  
    * 雷达卷积函数:  
        $$R_{12} (t) = f_1(t) \star f_2(-t) = \int_{-\infty}^{\infty}f_1(\tau)f_2(\tau-t)d\tau = \int_{-\infty}^{\infty}f_1(\tau+t)f_2(\tau)d\tau = R_{21}(-t)$$  
        $$R_{21} (t) = f_1(-t) \star f_2(t) = \int_{-\infty}^{\infty}f_1(\tau)f_2(\tau+t)d\tau = \int_{-\infty}^{\infty}f_1(\tau-t)f_2(\tau)d\tau = R_{12}(-t)$$  
        * Normally $R_{12}(\tau) \neq R_{21}(\tau)$
    * 自相关函数:  
        $$R (t) = f(t) \star f(-t) = \int_{-\infty}^{\infty}f(\tau)f(\tau-t)d\tau = \int_{-\infty}^{\infty}f(\tau+t)f(\tau)d\tau = R(-t)$$  

* 其他:  
    * 多径传输中存在失真问题， 发射机经某些物体反射产生**回波**现象，就算是反射信号也被采集。  
        把在多条路径上 由延迟时间与衰减系数 的情况 称为混响。  
        为了从 有干扰信号的回波系统中提取正常信号，可以设计**逆系统**进行补偿。  
        $$e(t) \to \text{回波系统} h(t) \to r(t) \to \text{逆系统} h_i (t) \to e(t)$$  
        为了保证 输出为原激励信号 $e(t) = e(t) \star \delta (t)$ 必须满足 $h(t) \star h_i(t) = \delta(t)$  
        求 $h_i(t)$ 的问题 称为 **解卷积** 或 **反卷积**  
    * **自适应滤波器** AF (**Adaptive Filter**) 可以根据误差信号调整系数 去对消 噪声信号，使得输出信号趋近于真实信号。  

<a id="149-python-%E6%B1%82%E5%8D%B7%E7%A7%AF%E7%A7%AF%E5%88%86"></a>
### 1.4.9. Python 求卷积积分

* 已知两个连续时间信号为:  
    $$ f_1(t) = \begin{cases} 2, \, & 0<t<1 \\ 0, \, & \text{else} \end{cases} \hspace{3em} f_2(t) = \begin{cases} t, \, & 0<t<2 \\ 0, \, & \text{else} \end{cases}  $$ 


```python
    t1 = np.array([t*0.1 for t in range(-10,31)]) # t in [-1, 3]
    f1t = np.array([2 if 0<t<10 else 0 for t in range(-10,31)])
    t2 = np.array([t*0.1 for t in range(-10,31)]) # t in [-1,3]
    f2t = np.array([t*0.1 if 0<t<20 else 0 for t in range(-10,31)]) 
    yt = sg.convolve(f1t, f2t,'full')*0.1 # calculate convolution  
    t3 = np.array([t*0.1 for t in range(-20,61)]) # t in [-1+-1, 3+3]
    # 开始绘图
    plt.plot(t3, yt, label='conv')
    plt.grid(True)
    plt.show()
```


<img src="/images/signal/12.png">


<a id="1410-%E8%BF%9E%E7%BB%AD%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%AE%97%E5%AD%90-p"></a>
### 1.4.10. 连续系统的算子 P

* 微分算子: $P = \frac{d}{dt}$ ;  $P^{(n)} = \frac{d^n}{dt^n}$  

* 积分算子: $P^{-1} = \int^{t}_{-\infty} (\cdot) d\tau$  

* 性质: 
    * $P$ 的 **正幂** 多项式可以因式分解  
    * 设 $A(P), B(P)$ 为 $P$ 的**正幂**多项式，则 $A(P)B(P) = B(P)A(P)$  
    * 微分算子方程公因子 **不能随意** 消去  
    * 设 $A(P), B(P), D(P)$ 为 $P$ 的**正幂**多项式,  
        有 $\displaystyle D(P) \cdot [\frac{A(P)}{D(P)\cdot B(P)}]f(t) = \frac{A(P)}{B(P)}f(t)$  
        但 $\displaystyle\frac{A(P)}{D(P)\cdot B(P)}[D(p)f(t)] \neq \frac{A(P)}{B(P)}f(t)$  

* **传输算子**:  
    $$H(P) = \displaystyle \frac{B(P)}{A(P)} = \frac{b_m P^m+ b_{m-1} P^{m-1} + \dots + b_0}{P^n + a_{n-1}P^{n-1} + \dots + a_0}$$  


***************

<a id="15-%E5%B7%AE%E5%88%86%E6%96%B9%E7%A8%8B"></a>
## 1.5. 差分方程

<a id="151-%E5%AE%9A%E4%B9%89"></a>
### 1.5.1. 定义

* 一阶差分:  
    $$\text{一阶前向差分}\, \displaystyle \frac{\Delta f(k)}{\Delta k} = \frac{f(k+1)-f(k)}{(k+1)-k} \\ \longrightarrow \Delta f(k) = f(k+1) - f(k)$$  
    $$\text{一阶后向差分}\, \displaystyle \frac{\nabla f(k)}{\nabla k} = \frac{f(k)-f(k-1)}{k-(k-1)} \\ \longrightarrow \nabla f(k) = f(k) - f(k-1)$$

* 线性性质:  
    $$\nabla[\alpha f_1(k) + bf_2(k)] = \alpha \nabla f_1(k) + b\nabla f_2(k)$$

* 二阶差分:  
    $$\nabla^2 f(k) = \nabla[\nabla f(k)] = f(k) - 2f(k-1) + f(k-2)$$  
    
* m阶差分:  
    $$\nabla^{m} f(k) = f(k) + b_1f(k-1) + \dots + b_mf(k-m)$$

<a id="152-%E7%BB%8F%E5%85%B8%E8%A7%A3%E6%B3%95"></a>
### 1.5.2. 经典解法

* **差分方程** 本质上是 **递推的代数方程**, 若已知初始条件和激励, 利用**迭代法**可求其数值解。  

$$y(k) + a_{n-1}y(k-1)+\dots + a_0y(k-n) \\ = b_mf(k)+b_{m-1}f^(k-1) + \dots + b_0f(k-m)$$ 

* **经典解法**: $y(k) = y_h(k) + y_p(k)$  
    * $y(k)$ **完全解**   
    * $y_h(k)$ **齐次解** **homogeneous solution**  
        $$y(k) + a_{n-1}y(k-1)+\dots + a_0y(k-n) =  0$$
    * $y_p(k)$ **特解** 

* **特征根**: eigenvalue 特征值  
    $$ 1 + a_{n-1}\lambda^{-1} + \dots + a_0\lambda^{-n} = 0\, \to\, \lambda_i(i=1,2,\dots, n)$$

<img src="/images/signal/diffw.PNG">  

<a id="153-%E5%88%9D%E5%A7%8B%E5%80%BC"></a>
### 1.5.3. 初始值

* **初始状态**: 用 $y(-1), y(-2), \dots, y(-n)$ 描述 n阶系统的初始状态。  

<a id="154-%E5%93%8D%E5%BA%94"></a>
### 1.5.4. 响应

$$y(-l) = y_{zi}(-l) + y_{zs}(-l)$$

* **零输入响应**: $y_{zi}(k)$ (zero input)
    * 离散系统的激励为零，仅由系统的初始状态引起的响应  
    $$y_{zi}(k) +\alpha_{n-1} y_{zi}(k-1) + \dots + \alpha_0 y_{zi}(k-n) = 0$$

* **零状态响应**: $y_{zs}(k)$ (zero status)
    * 系统的初始状态 $y_{zs}(-l) = 0, \, l = 1,2, \dots, n$为零，仅由激励 $f(k)$ 引起的响应  
    * **初始值**：由迭代法求出 $y_{zs}(j),\, j = 0,1,\dots,n-1$  

* **响应分类**:  
    * 固有响应：系统固有频率 或叫自由响应  
    * 强迫响应：与激励函数有关  
    * 暂态响应：随时间增长而消失  
    * 稳态响应：通常为阶跃函数和周期  

<a id="155-python-%E6%B1%82%E8%A7%A3%E7%A6%BB%E6%95%A3%E7%B3%BB%E7%BB%9F%E7%9A%84%E9%9B%B6%E7%8A%B6%E6%80%81%E5%93%8D%E5%BA%94"></a>
### 1.5.5. Python 求解离散系统的零状态响应

* 输入信号 $f(k) = s(k) + d(k)$, 其中 $s(k)= (2k)0.9^k, \, d(k)$ 是随机噪声信号。求以下系统的零状态响应(均值滤波结果)，取 $M=5$。 
    $$y(k) = \displaystyle \frac{1}{M}\sum^{M-1}_{n=0}f(k-n)$$  



```python
    d = np.random.rand(1,51)-0.5
    k = np.array([k for k in range(0,51)])
    s = 2*k*np.power(0.9,k)
    f = s+d[0]

    plt.subplot(211)
    plt.stem(k,f,'-',use_line_collection=True)
    plt.grid(True)

    M = 5
    a = 1
    b = np.ones(5)/5
    plt.subplot(212)
    y = sg.filtfilt(b,a,f) # digital filter forward and backward to a signal
    plt.stem(k,y,':',use_line_collection=True)
    plt.grid(True)
    
    plt.xlabel('time index k')
    plt.show()
```


<img src="/images/signal/15.png">


<a id="156-%E5%8D%95%E4%BD%8D%E8%84%89%E5%86%B2%E5%BA%8F%E5%88%97"></a>
### 1.5.6. 单位脉冲序列

* 单位脉冲序列 (单位样值序列/单位取样序列)  
    $$\begin{align}\delta(k) = \begin{cases} 1 & k = 0 \\ 0  & k \neq 0\end{cases}\end{align}$$  
    * 位移:  
        $$\begin{align}\delta(k-k_0) = \begin{cases} 1 & k = k_0 \\ 0  & k \neq k_0\end{cases}\end{align}$$  
    * 加: $\delta(k) + 2\delta(k) = 3\delta(k)$  
    * 乘: $\delta(k) \cdot \delta(k) = \delta(k)$  
    * 延时: $\delta(k-1) \cdot \delta(k-2) = 0$  
    * 迭分:  
        $$\begin{align}\displaystyle \sum^{k}_{i=-\infty} \delta(i) & = \begin{cases} 0, & k<0 \\ 1, & k\geq0 \end{cases} \\ & = \varepsilon(k)\end{align}$$  
    * 取样性质:  
        * $f(k)\delta(k) = f(0) \delta(k)$  
        * $f(k)\delta(k-k_0) = f(k_0)\delta(k-k_0)$  
        * $\displaystyle \sum_{k=-\infty}^{\infty} \delta(k) = 1$  
        * $\displaystyle \sum_{k=-\infty}^{\infty} f(k) \delta(k) = f(0)$  
        * $\displaystyle \sum_{k=-\infty}^{\infty} f(k) \delta(k-k_0) = f(k_0)$  
    * 偶函数: $\delta(k) = \delta(-k)$  


<a id="157-%E5%8D%95%E4%BD%8D%E9%98%B6%E8%B7%83%E5%BA%8F%E5%88%97"></a>
### 1.5.7. 单位阶跃序列

* 单位阶跃序列   
    $$\begin{align}\varepsilon(k) = \begin{cases} 0 & k < 0 \\ 1 & k \geq 0\end{cases}\end{align}$$  
    * 位移:  
        $$\begin{align}\varepsilon(k-k_0) = \begin{cases} 0 & k < k_0 \\ 1  & k \geq k_0\end{cases}\end{align}$$  
    * 加: $\varepsilon(k) + 2\varepsilon(k) = 3\varepsilon(k)$  
    * 乘: $\varepsilon(k) \cdot \varepsilon(k) = \varepsilon(k)$  
    * 延时: $\varepsilon(k-1) \cdot \varepsilon(k-5) = \varepsilon(k-5)$  
    * 迭分:  
        $$\begin{align}\displaystyle \sum^{k}_{i=-\infty} \varepsilon(i) & = \begin{cases} 0, & k<0 \\ k+1, & k\geq0 \end{cases} \\ & = (k+1)\varepsilon(k)\end{align}$$  
    * 与 $\delta(k)$ 的关系:  
        $$\begin{align} \delta(k) & = \varepsilon(k) - \varepsilon(k-1) \\ \varepsilon(k) & = \displaystyle \sum_{i=-\infty}^{k}\delta(i) \end{align}$$


<a id="158-%E5%8D%95%E4%BD%8D%E8%84%89%E5%86%B2%E5%93%8D%E5%BA%94"></a>
### 1.5.8. 单位脉冲响应

* 由单位脉冲序列 $\delta(k)$ 所引起的零状态响应，记为 $h(k)$ 。  
    * 隐含条件:  
        $f(k) = \delta(k)$  
        对二阶系统 $h(-1) = h(-2) = 0$  

<a id="159-%E5%8D%95%E4%BD%8D%E9%98%B6%E8%B7%83%E5%93%8D%E5%BA%94"></a>
### 1.5.9. 单位阶跃响应

* 由单位阶跃序列 $\varepsilon(k)$ 所引起的零状态响应，记为 $g(k)$  
    * 隐含条件:  
        $f(k) = \varepsilon(k)$  
        对二阶系统 $g(-1)=g(-2)=0$  
        
* 关联:  
    $g(t) = \displaystyle \sum^{k}_{i=-\infty} h(i)$  
    $h(t) = \nabla g(k) = g(k) - g(k-1)$  
    
<a id="1510-python-%E6%B1%82%E8%A7%A3%E5%8D%95%E4%BD%8D%E8%84%89%E5%86%B2%E5%93%8D%E5%BA%94"></a>
### 1.5.10. Python 求解单位脉冲响应

* 求以下离散系统的单位脉冲响应:  
    $$y(k) + 3y(k-1) +2y(k-2) = f(k)$$


```python
k = np.array([k for k in range(11)])
a = [1., 3., 2.]
b = [1.]
h = sg.lfilter(b,a,k) # IIR or FIR filter
plt.stem(k,h,'-', use_line_collection = True)
plt.grid(True)
plt.show()
```


<img src="/images/signal/19.png">


*******************

<a id="1511-%E5%8D%B7%E7%A7%AF%E5%92%8C"></a>
### 1.5.11. 卷积和

* 由 $\displaystyle\sum_{i=-\infty}^{\infty} f(i)\delta(k-i) \longrightarrow \sum_{i=-\infty}^{\infty} f(i)h(k-i)$  
    可得 $f(k) \to \text{LTI 零状态} \to y_{zs}(k)$  
    * 卷积和 $y_{zs}(k)= \displaystyle\sum_{i = -\infty}^{\infty} f(i)h(k-i)$  
    
* 定义:  
    * $f_1$ 与 $f_2$ 在区间 $(-\infty,\infty)$ 的 卷积: $f(k) = \displaystyle\sum_{i=-\infty}^{\infty} f_1(i)f_2(k-i)$   
    * 记为 $f(k) = f_1(k) \star f_2(k)$  
    * $y_{zs}(k)= \displaystyle\sum_{i = -\infty}^{\infty} f(i)h(k-i)= f(k)\star h(k)$  
    * 若 $f_1(k)$ 是因果序列 ($f_1(k)=0,\, k<0$), 则: $f(k) = \displaystyle\sum_{i=0}^{\infty} f_1(i)f_2(k-i)$  
    * 若 $f_2(k)$ 是因果序列 ($f_2(k)=0,\, k<0$), 则: $f(k) = \displaystyle\sum_{i=-\infty}^{k} f_1(i)f_2(k-i)$  
    * 若 $f_1(k), \, f_2(k)$ 均是因果序列 ($f_1(k)=f_2(k)=0,\, k<0$), 则: $f(k) = \displaystyle[\sum_{i=0}^{k} f_1(i)f_2(k-i)]\varepsilon(k)$  

* 代数性质:  
    * 三定律:  
        1. 交换律: $f_1 \star f_2 = f_2 \star f_1$  
        2. 分配律: $f_1 \star [f_2 + f_3] = f_1\star f_2 + f_1 \star f_3$  
        3. 结合律: $[f_1\star f_2]\star f_3 = f_1\star [f_2 \star f_3]$  

* 特性:  
    * $f(k)\star\delta(k-k_0) = \delta(k-k_0) \star f(k) = f(k-k_0)$  
    * $\delta(k) \star \delta(k) = \delta(k)$  
    * $f(k) \star \varepsilon(k) = \displaystyle\sum_{-\infty}^{k} f(i)$  
    * $\varepsilon(k) \star \varepsilon(k) = (k+1) \cdot \varepsilon(k)$  
    * $\nabla[f_1(k) \star f_2(k)] = \nabla f_1(k) \star f_2(k) = f_1(k) \star \nabla f_2(k)$  
    * 衍生:  
        $\begin{align}f(k) &= f_1(k)\star f_2(k) \\ f(k-k_1-k_2) & = f_1(k-k_1)\star f_2(k-k_2) \\ &= f_1(k-k_1-k_2)\star f_2(k) \\ & = f_1 \star f_2(k-k_1-k_2)\end{align}$  
    
<a id="1512-python-%E6%B1%82%E5%8D%B7%E7%A7%AF%E5%92%8C"></a>
### 1.5.12. Python 求卷积和

* 求以下两个离散序列的卷积：  
    $$x_1(k) = \sin(k),\, 0\leq k \leq 10 \hspace{3em} x_2(k) = 0.8^k,\, 0\leq k\leq 15$$  


```python
    k1 = np.linspace(0,10,11)
    x1 = np.sin(k1)
    plt.subplot(221)
    plt.stem(k1,x1,'-',use_line_collection=True)
    plt.grid(True)
    plt.title('x_1(k)')
    
    k2 = np.linspace(0,15,16)
    x2 = np.power(0.8,k2)
    plt.subplot(222)
    plt.stem(k2,x2,'-',use_line_collection=True)
    plt.grid(True)
    plt.title('x_2(k)')
    
    plt.subplot(212)
    y = sg.convolve(x1, x2,'full')
    k3 = np.linspace(0, 25,26)
    plt.stem(k3,y,'-',use_line_collection=True)
    plt.grid(True)
    plt.title('y(k)')
    
    plt.xlabel('time index k')
    plt.subplots_adjust(top=1, wspace=0.4, hspace=0.5)
    plt.show()
```


<img src="/images/signal/21.png">

<a id="1513-%E5%B7%AE%E5%88%86%E7%AE%97%E5%AD%90-e"></a>
### 1.5.13. 差分算子 E

$$\begin{align} E^{-1} & \to \text{延迟算子} \hspace{3em} & E & \to \text{超前算子} \\ E^{-1}f(k) & = f(k-1) & Ef(k) & = f(k+1) \\ E^{-2}f(k) & = f(k-2)  & E^{2}f(k) & = f(k+2) \\ E^{-n}f(k) & = f(k-n) & E^{n}f(k) & = f(k+n)\end{align}$$  

* 性质: 
    * $E$ 的 **正幂** 多项式可以因式分解 也可以相乘  
    * 设 $A(E), B(E)$ 为 $E$ 的正幂或负幂多项式，则 $A(E)B(E) = B(E)A(E)$  
    * 差分算子方程公因子 **不能随意** 消去  
    * 设 $A(E), B(E), D(E)$ 为 $E$ 的**正幂**多项式,  
        有 $\displaystyle D(E) \cdot [\frac{A(E)}{D(E)\cdot B(E)}]f(t) = \frac{A(E)}{B(E)}f(t)$  
        但 $\displaystyle\frac{A(E)}{D(E)\cdot B(E)}[D(E)f(t)] \neq \frac{A(E)}{B(E)}f(t)$  

* **传输算子**:  
    $$H(E) = \displaystyle \frac{B(E)}{A(E)} = \frac{b_m E^m+ b_{m-1} E^{m-1} + \dots + b_0}{E^n + a_{n-1}E^{n-1} + \dots + a_0}$$  

