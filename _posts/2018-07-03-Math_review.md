---
layout: post
title: "Mathematics Reviews"
description: "数学复习"
date: 2018-07-03
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
	$$ x = \displaystyle\sqrt[3]{\sqrt{\frac{q^2}{4}-\frac{p^3}{27}}+\frac{q}{2}}-\displaystyle\sqrt[3]{\sqrt{\frac{q^2}{4}-\frac{p^3}{27}}-\frac{q}{2}} $$  
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


*  $$ \displaystyle \underbrace{(x + iy)}_{z} + \underbrace{(u + iv)}_{w} = \underbrace{(x + u)}_{\mathrm{Re}(z+w)} + \underbrace{i(y + v)}_{\mathrm{Im}(z+w)} $$  
	* $ \mathrm{Re}(z + w) = \mathrm{Re}\ z + \mathrm{Re}\ w \mathrm{and} \ \mathrm{Im}(z + w) = \mathrm{Im}\ z + \mathrm{Im}\ w $  
* The __modulus__ of the complex number z = x + iy is the length of the vector z:  
	* $ |z| = \sqrt{x^2 + y^2} $  
* $$ (x + iy) \cdot (u + iv) = (xu - yv) + i(xv + yu) \in \mathbb{C} $$  
* $$ \displaystyle \frac{x + iy}{u + iv} = \frac{xu + yv}{u^2 + v^2} + i\frac{yu - xv}{u^2 + v^2} (\mathrm{for} u + iv \neq 0) $$  


* If $ z = x + iy $ then $ \overline{z} = x − iy $ is the __complex conjugate__ of z  
	* $ \overline{\overline{z}} = z $  
	* $ \overline{z + w} = \overline{z} + \overline{w} $  
	* $ |z| = |\overline{z}| $  
	* $ z\overline{z} = (x + iy)(x - iy) = x^2 + y^2 = |z|^2 $  
	* $ \displaystyle \frac{1}{z} = \frac{\overline{z}}{z\overline{z}} = \frac{\overline{z}}{|z|^2} $  
	* $ |z \cdot w | = |z| \cdot |w| $  
	* $ \displaystyle \overline{(\frac{z}{w})} = \frac{\overline{z}}{\overline{w}} $  
	* $ |z| = 0 iff z = 0 $  
	* $ −|z| ≤ \mathrm{Re}\ z ≤ |z| $  
	* $ −|z| ≤ \mathrm{Im} z ≤ |z| $  
	* $ |z + w| ≤ |z| + |w| \mathrm{(triangle inequality)} $  
	* $ z − w| ≥ |z| − |w| \mathrm{(reverse triangle inequality)} $  

* __The Fundamental Theorem of Algebra__  
	If $ a_{0}, a_{1}, \dots , a_{n} $ are complex numbers with $ a_{n} \neq 0 $ , then the polynomial  
		$ p(z) = a_{n}z^{n} + a_{n-1}z^{n-1} + \dots + a_{1}z + a_{0} $  
	has n roots $ z_{1}, z_{2}, \dots , z_{n} \mathrm{in} \mathbb{C} $  
	It can be factored as  
		$ p(z) = a_{n}(z − z_{1})(z − z_{2})\dots(z − z_{n}) $  

