---
layout: post
title: "Mathematics Reviews"
description: "数学复习"
date: 2018-09-09
tag: Math
---
[Cracking the GRE Mathematics Subject Test]: <http://a.co/f5OSIPa> "Amazon"

[Complex Analysis]:<https://www.coursera.org/learn/complex-analysis> "Complex Analysis"


> Some review notes are from:  
> [Complex Analysis]  

**********

## Complex Analysis  

### Birth  

* Cubic equations $ x^3 = px + q $ always must be a solution  
* Del Ferro (1465-1526) and Tartaglia (1499-1577), followed by Cardano (1501-1576), showed that the solution given by  
	$$ \displaystyle x = \sqrt[3]{\sqrt{\frac{q^2}{4}-\frac{p^3}{27}}+\frac{q}{2}}-\sqrt[3]{\sqrt{\frac{q^2}{4}-\frac{p^3}{27}}-\frac{q}{2}} $$  
* About 30 years after the discovery of this formula, Bombelli (1526-1572) consider $ \displaystyle\frac{q^2}{4}-\frac{p^3}{27} < 0 $  
	* It showed that perfectly real problems require complex arithmetic for their solution.  

### Properties and definitions  

* Complex numbers: expressions of the form $ z = x + iy $, where  
	* x is called the real part of $z; x = \mathrm{Re} z $  
	* y is called the imaginary part of $ z; y = \mathrm{Im} z $  
* Set of complex numbers: $ \mathbb{C} $ (the complex plane)  
* Real numbers: subset of the complex numbers (those whose imaginary part
is zero)  
* The complex plane can be identified with $ \mathbb{R}^{2} $  

* $$ \displaystyle \underbrace{(x + iy)}_{z} + \underbrace{(u + iv)}_{w} = \underbrace{(x + u)}_{\mathrm{Re}(z+w)} + \underbrace{i(y + v)}_{\mathrm{Im}(z+w)} $$  
	* $ \mathrm{Re}(z + w) = \mathrm{Re}\ z + \mathrm{Re}\ w \ \mathrm{and} \ \mathrm{Im}(z + w) = \mathrm{Im}\ z + \mathrm{Im}\ w $  
* ___Def___: The __modulus__ of the complex number z = x + iy is the length of the vector z:  
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
* ___Def___: The principal argument of z, called __Arg z__, is the value of θ for which $ −π < θ ≤ π $.
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

* ___Def___: Let $ w $ be a complex number. An nth root of $ w $ is a complex number $ z $ such that $ z^n = w $  
	- Use the polar form for $ w $ and $ \ z:\ w\ = \ \rho e^{i\varphi}\ \mathrm{and}\ z\ = \ r e^{i\theta} $  
	- $ z^{n}\ = \ w \ : \ r^{n}e^{in\theta}\ = \ \rho e^{i\varphi}, \mathrm{so} r^n\ = \ \rho \ \mathrm{and} \ e^{in\theta} \ = \ e^{i\varphi} $  
	- $ r = \sqrt[n]{\rho} \ \mathrm{and} \ n\theta \ = \ \varphi \ + \ 2k\pi, \ k \in \mathbb{Z} $  
	- $ \displaystyle w^{\frac{1}{n}}\ = \ \sqrt[n]{\rho}\ e^{1(\frac{\varphi}{n} \ + \ \frac{2k\pi}{n})},\ k\ = \ 0, 1, \dots , \ n - 1 $  

