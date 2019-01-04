---
layout: post
title: "Mathematics Reviews (Complex)"
description: "数学复习 (Complex)"
date: 2018-09-09
tag: Math
---
[Cracking the GRE Mathematics Subject Test]: <http://a.co/f5OSIPa> "Amazon"

[Complex Analysis]:<https://www.coursera.org/learn/complex-analysis> "Complex Analysis"


> Some review notes are from:  
> [Complex Analysis]  

**********

<!-- TOC -->
- [Complex Analysis](#complex-analysis)
	- [Introduction](#introduction)
		- [Birth](#birth)
		- [Properties and Definitions](#properties-and-definitions)
		- [Polar Representation](#polar-representation)
		- [Roots of Complex Numbers](#roots-of-complex-numbers)
		- [Topology in the Plane](#topology-in-the-plane)
	- [Function](#function)
		- [Complex Functions](#complex-functions)
<!-- /TOC -->


# Complex Analysis  

## Introduction

### Birth  

* Cubic equations $ x^3 = px + q $ always must be a solution  
* Del Ferro (1465-1526) and Tartaglia (1499-1577), followed by Cardano (1501-1576), showed that the solution given by  
	$$ \displaystyle x = \sqrt[3]{\sqrt{\frac{q^2}{4}-\frac{p^3}{27}}+\frac{q}{2}}-\sqrt[3]{\sqrt{\frac{q^2}{4}-\frac{p^3}{27}}-\frac{q}{2}} $$  
* About 30 years after the discovery of this formula, Bombelli (1526-1572) consider $ \displaystyle\frac{q^2}{4}-\frac{p^3}{27} < 0 $  
	* It showed that perfectly real problems require complex arithmetic for their solution.  

### Properties and Definitions  

* Complex numbers: expressions of the form $ z = x + iy $, where  
	* x is called the real part of $z; x = \mathrm{Re} z $  
	* y is called the imaginary part of $ z; y = \mathrm{Im} z $  
* Set of complex numbers: $ \mathbb{C} $ (the complex plane)  
* Real numbers: subset of the complex numbers (those whose imaginary part
is zero)  
* The complex plane can be identified with $ \mathbb{R}^{2} $  

* 
$$ \displaystyle \underbrace{(x + iy)}_{z} + \underbrace{(u + iv)}_{w} = \underbrace{(x + u)}_{\mathrm{Re}(z+w)} + \underbrace{i(y + v)}_{\mathrm{Im}(z+w)} $$  
	* $ \mathrm{Re}(z + w) = \mathrm{Re}\ z + \mathrm{Re}\ w \ \mathrm{and} \ \mathrm{Im}(z + w) = \mathrm{Im}\ z + \mathrm{Im}\ w $  
* ___Def:___ The __modulus__ of the complex number z = x + iy is the length of the vector z:  
	* $ \vert z\vert  = \sqrt{x^2 + y^2} $  
* $ (x + iy) \cdot (u + iv) = (xu - yv) + i(xv + yu) \in \mathbb{C} $  
* $ \displaystyle \frac{x + iy}{u + iv} = \frac{xu + yv}{u^2 + v^2} + i\frac{yu - xv}{u^2 + v^2} \ (\mathrm{for} \ u + iv \neq 0) $  

* If $ z = x + iy $ then $ \overline{z} = x − iy $ is the __complex conjugate__ of z  
	* $ \overline{\overline{z}} = z $  
	* $ \overline{z + w} = \overline{z} + \overline{w} $  
	* $ \vert z\vert  = \vert \overline{z}\vert  $  
	* $ z\overline{z} = (x + iy)(x - iy) = x^2 + y^2 = \vert z\vert ^2 $  
	* $ \displaystyle \frac{1}{z} = \frac{\overline{z}}{z\overline{z}} = \frac{\overline{z}}{\vert z\vert ^2} $  
	* $ \vert z \cdot w \vert  = \vert z\vert  \cdot \vert w\vert  $  
	* $ \displaystyle \overline{(\frac{z}{w})} = \frac{\overline{z}}{\overline{w}} $  
	* $ \vert z\vert  = 0 \ \mathrm{iff} \ z = 0 $  
	* $ −\vert z\vert  ≤ \mathrm{Re}\ z ≤ \vert z\vert  $  
	* $ −\vert z\vert  ≤ \mathrm{Im}\ z ≤ \vert z\vert  $  
	* $ \vert z + w\vert  ≤ \vert z\vert  + \vert w\vert \ \mathrm{(triangle \ inequality)} $  
	* $ \vert z − w\vert  ≥ \vert z\vert  − \vert w\vert \ \mathrm{(reverse\ triangle\ inequality)} $  


* __The Fundamental Theorem of Algebra__  
	If $ a_{0}, a_{1}, \dots , a_{n} $ are complex numbers with $ a_{n} \neq 0 $ , then the polynomial  
		$ \displaystyle \displaystyle p(z) = a_{n}z^{n} + a_{n-1}z^{n-1} + \dots + a_{1}z + a_{0} $  
	has n roots $ z_{1}, z_{2}, \dots , z_{n} \ \mathrm{in} \ \mathbb{C} $  
	It can be factored as  
		$ p(z) = a_{n}(z − z_{1})(z − z_{2})\dots(z − z_{n}) $  


### Polar Representation  

* $ r = \vert z\vert $: the distance from the origin  
* $ θ $: the angle  between the positive x-axis and the line segment from 0 to z  
* $ (r, θ) $ are the polar coordinates of z  
* Relation between Cartesian and polar coordinates:  
	* $ x = r cos θ $  
	* $ y = r sin θ $  
	* $ z = r(cos θ + i sin θ) $  
* ___Def:___ The principal argument of z, called __Arg z__, is the value of θ for which $ −π < θ ≤ π $.
	* $ arg z = \lbrace Arg z + 2πk : k = 0, ±1, ±2, . . .\rbrace,\ z \neq 0 $  
* __Convenient notation__: $ e^{i\theta} = cos θ + i sin θ $  
	* the polar form of z: $ z = r e^{i\theta} $  
* $ \vert e^{i\theta}\vert = 1 $  
* $ \overline{e^{i\theta}\ =\ e^{-i\theta}} $  
* $ \displaystyle \frac{1}{e^{i\theta}}\ =\ e^{-i\theta} $  
* $ e^{i(\theta\ + \ \varphi)}\ = e^{i\theta}\ \cdot\ e^{i\varphi} $  
* $ arg(\overline{z})\ = \ -arg\ z $  
* $ arg(\frac{1}{z})\ = \ - arg\ z $  
* $ arg(z_1 z_2)\ = \ arg(z_1) \ + \ arg(z_2) $  
* $ (e^{i\theta})^n\ = \ e^{i\cdot n\theta} $  
	- $ (cos θ + i sin θ)^n \ = \ cos(nθ)\ + \ i sin(nθ) $

### Roots of Complex Numbers  

* ___Def:___ Let $ w $ be a complex number. An nth root of $ w $ is a complex number $ z $ such that $ z^n = w $  
	- Use the polar form for $ w $ and $ \ z:\ w\ = \ \rho e^{i\varphi}\ \mathrm{and}\ z\ = \ r e^{i\theta} $  
	- $ z^{n}\ = \ w \ : \ r^{n}e^{in\theta}\ = \ \rho e^{i\varphi}, \mathrm{so} r^n\ = \ \rho \ \mathrm{and} \ e^{in\theta} \ = \ e^{i\varphi} $  
	- $ r = \sqrt[n]{\rho} \ \mathrm{and} \ n\theta \ = \ \varphi \ + \ 2k\pi, \ k \in \mathbb{Z} $  
	- $ \displaystyle w^{\frac{1}{n}}\ = \ \sqrt[n]{\rho}\ e^{i(\frac{\varphi}{n} \ + \ \frac{2k\pi}{n})},\ k\ = \ 0, 1, \dots , \ n - 1 $  

* ___Def:___ The _n_th roots of 1 are called the _nth roots of unity_  
	- Since $ 1\ =\ 1\ e^{i\dot 0} $, we find that  
	$$ 
	\begin{align*}
	\displaystyle 1^{\frac{1}{n}} &\ =\ \sqrt[n]{1}\ \dot\ e^{i(\frac{0}{n}\ + \ \frac{2k\pi}{n}\ )} \\
    & = e^(i\frac{2\pi k}{n}),\ \mathrm{for}\ k\ = \ 0, 1, \dots , n\ -\ 1 
	\end{align*}
	$$  

### Topology in the Plane  

* __Sets__ in the Complex Plane
	- Circles and disks: center $ z_0\ =\ x_0\ +\ i y_0 $, radius $ r $  
		+ $ B_r(z_0) = {z ∈ \mathbb{C} : z $ has distance less than $ r $ from $ z_0} $ disk of radius $ r $ , centered
at $ z_0 $  
		+ $ K_r(z_0) = {z ∈ \mathbb{C} : z $ has distance $ r $ from $ z_0} $ circle of radius $ r $ , centered at $ z_0 $  
	- Measure distance  
		- $$
		\begin{align*}
		\displaystyle d\ & = \ \sqrt{(x\ - \ x_0)^2\ + \ (y\ - \ y_0)^2} \\
    	& = \vert (x\ - \ x_0)\ + \ i\ (y\ - \ y_0) \vert \\
    	& = \vert z\ - \ z_0 \vert
		\end{align*}
		$$  
	- so $ B_r(z_0)\ =\ {z\ ∈\ \mathbb{C}\ :\ \vert z\ −\ z_0\vert \ <\ r}\ \mathrm{and}\ K_r(z_0)\ =\ {z ∈ \mathbb{C}\ :\ \vert z\ −\ z_0\vert\ =\ r} $  

* __Interior Points and Boundary Points__  
	* ___Def:___ Let $ E ⊂ \mathbb{C} $. A point $ z_0 $ is an interior point of $ E $ if there is some $ r > 0 $ such that $ B_r(z_0) ⊂ E $.  
	* ___Def:___ Let $ E ⊂ \mathbb{C} $. A point $ b $ is a boundary point of $ E $ if every disk around $ b $ contains a point in $ E $ and a point not in $ E $.  
	The boundary of the set $ E ⊂ \mathbb{C}, ∂E, $ is the set of all boundary points of $ E $.  

* __Open and Closed Sets__  
	- A set $ U ⊂ \mathbb{C} $ is open if every one of its points is an interior point.
	- A set $ A ⊂ \mathbb{C} $ is closed if it contains all of its boundary points
	- Examples:  
		+ $ {z\ ∈\ \mathbb{C}\ :\ \vert z\ −\ z_0 \vert \ <\ r}\ \mathrm{and} {z\ ∈\ \mathbb{C}\ :\ \vert z\ −\ z_0 \vert\ >\ r} $ are open  
		+ $ \mathbb{C} $ and $ ∅ $ are open  
		+ $ {z\ ∈\ \mathbb{C}\ :\ \vert z\ −\ z_0 \vert \ ≤\ r}\ \mathrm{and} {z\ ∈\ \mathbb{C}\ :\ \vert z\ −\ z_0 \vert\ =\ r} $ are closed  
		+ $ C $ and $ ∅ $ are closed  
		+ $ {z\ ∈\ \mathbb{C}\ :\ \vert z\ −\ z_0 \vert \ <\ r}\ ∪ {z\ ∈\ \mathbb{C}\ :\ \vert z\ −\ z_0 \vert\ =\ r\ \mathrm{and Im} (z\ −\ z_0)\ >\ 0} is neither open nor closed  

* __Closure and Interior__ of a Set  
	- ___Def:___: Let $ E $ be a set in $ \mathbb{C} $.  
	The _closure_ of $ E $ is the set $ E $ together with all of its boundary points: $ \overline{E}\ =\ E\ ∪\ ∂E $.  
	The _interior_ of $ E $ , $ \circ{E} $ is the set of all interior points of $ E $.  
	- Examples:  
		+ $ \overline{B_r(z_0)}\ = \ B_r(z_0)\ \cup \ K_r(z_0)\ = \ {z\ \in\ \mathbb{C}\ :\ \vert z\ -\ z_0 \vert \ \leq \ r} $  
		+ $ \overline{K_r(z_0)}\ = \ K_r(z_0) $  
		+ $ \overline{B_r(z_0)\ \setminus \ {z_0}}\ = \ {z\ \in\ \mathbb{C}\ :\ \vert z\ -\ z_0 \vert \ \leq \ r} $  
		+ With $ E\ =\ {z\ \in\ \mathbb{C}\ :\ \vert z\ -\ z_0 \vert \ \leq \ r}, \circ{E}\ = \ B_r(z_0) $  
		+ With $ E\ =\ K_r(z_0),\ \circ{E}\ = \ \emptyset $  

* __Connectedness__  
	- ___Def:___ Two sets $ X, Y $ in $ \mathbb{C} $ are separated if there are disjoint open set $ U, V $ so that $ X\ ⊂\ U $ and $ Y\ ⊂\ V $ . A set $ W $ in $ \mathbb{C} $ is connected if it is impossible to find two separated non-empty sets whose union equals $ W $.  
	- Examples:  
		+ $ X\ =\ [0, 1) $ and $ Y\ =\ (1, 2] $ are separated  
		+ Choose $ U\ =\ B_1(0) $ and $ V\ =\ B_1(2) $ . Thus $ X\ ∪\ Y\ =\ [0, 2]\ \setminus \ {1} $ is not connected  
	- ___Theorem:___ Let $ G $ be an open set in $ \mathbb{C} $ . Then $ G $ is connected if and only if any two points in $ G $ can be joined in $ G $ by successive line segments.
	- ___Def:___ A set $ A $ in $ \mathbb{C} $ is bounded if there exists a number $ R\ >\ 0 $ such that $ A\ ⊂\ B_R(0) $ . If no such $ R $ exists then $ A $ is called unbounded.

* The Point at Infinity  
	- In $ \mathbb{R} $ , there are two directions that give rise to $ ±∞ $  
	- In $ \mathbb{C} $ , there is only one $ ∞ $ which can be attained in many directions.

## Function  

### Complex Functions  

* A function $ f:\ A\ \to\ B $ is a rule that assigns to each element $ A $ of exactly one element of $ B $  
* $ f^n(z) $ (read: "Eff n") is called the nth iterate of f  

* __Sequences and Limits__ of Complex Numbers
	- ___Def:___ A sequence {sn} of complex numbers converges to $ s ∈ \mathbb{C} $ if for every $ ε > 0 $ there exists an index $ N ≥ 1 $ such that  
	$$ \vert s_n\ −\ s\vert \ <\ ε\ \mathrm{for all}\ n\ ≥\ N. $$  
	We write  
	$$ \displaystyle\lim_{x \to \infty}\ s_n\ =\ s. $$  

* __Rules__ for Limits  
	1. Convergent sequences are bounded.  
	2. If $ {s_n} $ converges to $ s $ and $ {t_n} $ converges to $ t $ , then  
		+ $ s_n\ +\ t_n\ \to \ s\ +\ t $  
		+ $ s_n\ \dot \ t_n\ \to \ s\ \dot \ t $ (in particular: $ a\ \dot \ s_n \ \to \ a\ \dot \ s $ for any $ a \in \mathbb{C} $ )  
		+ $ \displaystyle \frac{s_n}{t_n}\ \to \ \frac{s}{t} $ , provided $ t\ \neq \ 0 $  

* __Facts__  
	- A sequence of complex numbers, $ {s_n} $, converges to $ 0 $ iff the sequence $ {\vert s_n \vert} $ of absolute values converges to $ 0 $  
	- A sequence of complex numbers, $ {s_n} $, with $ s_n\ =\ x_n\ +\ i y_n $ , converges to $ s\ =\ x\ +\ i y $ iff $ x_n\ \to \ x $ and $ y_n\ \to \ y $ as $ n\ \to \ \infty $  

* ___Squeeze Theorem:___ Suppose that $ {r_n} $ , $ {s_n} $ and $ {t_n} $ are sequences of real numbers such that $ r_n\ ≤\ s_n\ ≤\ t_n $ for all $ n $ . If both sequences $ {r_n} $ and $ {t_n} $ converge to the same limit, $ L $ , then the sequence $ {s_n} $ converges to the limit $ L $ as well.  

* ___Theorem:___ A bounded, monotone sequence of real numbers converges  


* Limits of Complex Functions  
	- ___Def:___ The complex-valued function $ f(z) $ has limit $ L $ as $ z\ \to \ z_0 $ if the values of $ f(z) $ are near $ L $ as $ z\ \to \ z_0 $ .
	- Also: $ \displaystyle \lim_{z \to z_0}\ f(z)\ = \ L $ if for all $ ε\ >\ 0 $ there exists $ δ\ >\ 0 $ such that
$ \vert f(z)\ −\ L\vert \ <\ ε $ whenever $ 0\ <\ \vert z\ −\ z_0\vert \ <\ δ $  

* __Facts__  
	- If $ f $ has a limit at $ z_0 $ then $ f $ is bounded near $ z_0 $ .  
	- If $ f(z)\ \to \ L $ and $ g(z)\ \to \ M $ as $ z\ \to \ z_0 $ then  
		+ $ f(z)\ + \ g(z) \ \to \ L \ + \ M $ as $ z\ \to \ z_0 $  
		+ $ f(z)\ \dot \ g(z) \ \to \ L \ \dot \ M $ as $ z\ \to \ z_0 $  
		+ $ \displaystyle \frac{f(z)}{g(z)} \ \to \ \frac{L}{M} $ as $ z\ \to \ z_0 $, provided that $ M\ \neq \ 0 $  

* __Continuity__  
	- ___Def:___ The function $ f $ is continuous at $ z_0 $ if $ f(z)\ \to \ f(z_0) $ as $ z\ \to \ z_0 $ .  
	- This definition implicitly says that:  
		+ $ f $ is defined at $ z_0 $  
		+ $ f $ has a limit as $ z\ \to \ z_0 $  
		+ The limit equals $ f(z_0) $  

