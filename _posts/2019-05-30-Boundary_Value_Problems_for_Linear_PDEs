---
layout: post
title: "Boundary Value Problems for Linear PDEs"
description: "剑桥数学笔记 (2019)"
date: 2019-05-30
tag: Math
---
[Lecture Notes]:<http://www.damtp.cam.ac.uk/user/kk364/> "Lecture Notes"
[essential singularity]:<https://en.wikipedia.org/wiki/Essential_singularity> "essential singularity"
[hyperbolic function]:<https://en.wikipedia.org/wiki/Hyperbolic_function#Definitions> "hyperbolic function"


> This note is taken from the lecture notes in the Part III course of University of Cambridge in 2019   
> Source of the notes:  
	> Wikipedia  
	> [Lecture Notes]  



**********

<!-- TOC -->
- [Common Formula](#common-formula)
	- [](#)
		- [](#)
- [Boundary Value Problems for Linear PDEs](#boundary)
	- [Complex Variables](#complex-variables)
		- [Analytic](#analytic)
		- [Cauchy–Riemann equations](#cauchy-riemann-equations)
		- [Holomorphic](#holomorphic)
		- [dbar-Derivative](#dbar-derivative)
		- [Cauchy's Theorem](#cauchy-theorem)
		- [Green's Theorem](#green-theorem)
		- [Residue Theorem](#residue-theorem)
		- [Taylor's Series](#taylor-series)
		- [Principal Value integrals](#principal-value-integrals)
		- [Jordan’s Lemma](#jordan-lemma)
		- [Fourier Transform](#fourier-transform)
<!-- /TOC -->

************************

# Common Formul  

## Quick Finding  


************************


# Boundary  

## Complex Variables  

### Analytic  

* $ f(z) = u(x, y) + iv(x, y) $ where $ u , v $ are real functions  
  We called $ f(z) $ an [analytic](#analytic) at point $ z_0 $  
  if it is differentiable in a neighbourhood of $ z_0 $   
* $ f(z) $ is [analytic](#analytic) iff functions $ u , v $ satisfy [Cauchy–Riemann equations](#cauchy-riemann-equations)  
* $ f $ is an [analytic](#analytic) function iff [dbar-Derivative](#dbar-derivative)  
$\displaystyle \frac{\partial f}{\partial \bar{z}} = 0 $ or $ \displaystyle \frac{\partial f}{\partial z} = u_x - i u_y = v_y + i v_x $  

* __Liouville’s theorem__:  
  If $ f(z) $ is everywhere analytic (in the finite complex plane) and bounded (including infinity), then $ f(z) $ is a constant.  

* __Rouche’s theorem__:  
  Let $ f(z) $ and $ g(z) $ be analytic on and inside a simple contour $ C $.  
  If $ |f(z)| > |g(z)| $ on $ C $, then $ f(z) $ and $ f(z) + g(z) $ have the same number of zeros inside the contour $ C $.  

* __Morera’s theorem__:  
  If $ f(z) $ is continuous in a domain $ D $ and if  
  $ \displaystyle \oint_C f(z) dz = 0 $  
  for every simple closed contour $ C $ lying in $ D $,  
  then $ f(z) $ is analytic in $ D $.  

* __Maximum Principle__:  
  If $ f(z) $ is analytic in a bounded region $ D $  
  and $ \lvert f(z) \rvert $ is continuous in the closed region $ \bar{D} $,  
  then $ \lvert f(z)\rvert $ obtains its maximum on the boundary of the region  
  
* __Minimum Principle__:  
  If, in addition, it is _non-zero_ at all points of $ D $, then $ \lvert f(z) \rvert $ obtains its minimum on the boundary of the region.  

* __Laurent Series__:  
  A function $ f(z) $ analytic in an annulus(环) $ R_1 < \lvert z - z_0 \rvert < R_2 $ may be presented by the expansion  
  $ f(z) = \displaystyle\sum_{m=-\infty}^{\infty} A_m(z-z_0)^m $  
  where $ A_m = \displaystyle \frac{1}{2i\pi} \oint_C \frac{f(z)dz}{(z-z_0)^{m+1}} $  
  and $ C $ is any simple closed contour in the region of analyticity enclosing the inner boundary $ \lvert z - z_0 \rvert = R_1 $.  

### Cauchy Riemann equations  

* The __Cauchy–Riemann equations__ on a pair of real-valued functions of two real variables $ u(x,y) $ and $ v(x,y) $ are the two equations:  
  1. $ \displaystyle \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} $  
  2. $ \displaystyle \frac{\partial u}{\partial y} = - \frac{\partial v}{\partial x} $  
  That $ u_x = v_y , \; u_y = - v_x $  

### Holomorphic  

* __Holomorphy__ is the property of a complex function of being differentiable at every point of an open and connected subset of $ C $ (a domain in $ C $)  
* If f is _complex-differentiable_ at every point $ z_0 $ in an open set $ U $, we say that $ f $ is __holomorphic__ on $ U $.  
  We say that $ f $ is __holomorphic__ at the point $ z_0 $ if it is __holomorphic__ on some neighbourhood of $ z_0 $.  
* In complex analysis, a function that is complex-differentiable in a whole domain (__holomorphic__) is the same as an [analytic](#analytic) function  
  __NOT__ true for real differentiable functions  
* Any __holomorphic__ function is actually infinitely differentiable and equal to its own Taylor series (analytic)  

### dbar Derivative  

* the __dbar-derivative__ with respect to $ \bar{z} $  
  i.e. the derivative with respect to the _complex conjugate_ of $ z $  
  The equations $ z = x + iy , \; \bar{z} = x - iy  $  
  imply $ x = \displaystyle \frac{z+\bar{z}}{2} , \; y = \frac{z-\bar{z}}{2i} $  
  Chain rule yields  
  $ \displaystyle \frac{\partial}{\partial z} = \frac{1}{2} (\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}) , \; \displaystyle \frac{\partial}{\partial \bar{z}} = \frac{1}{2} (\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}) $  

### Cauchy Theorem  

> __Cauchy integral theorem__ (also known as the __Cauchy–Goursat theorem__)  

* Suppose that $ f(z) $ is [analytic](#analytic) in the domain $ D $.  
  Then, the integral of $ f(z) $ along the boundary of $ D $ __vanishes__.  

### Green Theorem  

* Let $ C $ be a positively oriented, piecewise smooth, simple closed curve in a plane, and let $ D $ be the region bounded by $ C $.  
  If $ L $ and $ M $ are functions of $ (x, y) $ defined on an open region containing $ D $ and have continuous partial derivatives there, then  
  $ \displaystyle \oint_C (L dx + M dy) = \int \int_D (\frac{\partial M}{\partial x} - \frac{\partial L}{\partial y}) dx dy $  
  where the path of integration along C is __anticlockwise__  

### Residue Theorem  

* Suppose that the function $ f(z) $ is [analytic](#analytic) in the domain $ D $,  
  except at the single point $ z_0 $ where the function has a pole with __residue__ $ g(z_0) $, namely in the neighborhood of $ z_0 $, this function can be written as  
  $ f(z) = \displaystyle \frac{g(z)}{z - z_0} $ 
  where $ g(z) $ is analytic.  
  Then, the integral of $ f(z) $ along the boundary of $ D $ equals $ 2i\pi g(z_0) $  

* __Cauchy's Residue Theorem__  

* $ \oint_C f(z)dz = 2 \pi i \displaystyle \sum_{k = 1}^n \mathrm{Res} (f(z), z_k) $  
* If $ z_k $ is a pole of order k, then the residue of f around $ z = z_k $ can be found by the formula:  
	Res $ (f , z_k) = \displaystyle \frac{1}{(k-1)!} \lim_{z\to z_k} \frac{d^{k-1}}{dz^{k-1}} ((z-z_k)^k f(z)) $
* For [essential singularity] case, the residues must usually be taken directly from series expansions  

### Taylor Series

* __Analytic real function__ can be expanded in terms of an infinite series:  
	$$ f(x) = \displaystyle \sum_{m=0}^\infty \frac{(x-x_0)^m}{m!} \frac{d^m}{dx^m} f(x_0) $$  
	where this series is valid provided that $ \lvert x - x_0 \rvert < R $ and $ R $ is called the radius of convergence  

* __Complexification__  
  Let $ f(z) $ be [analytic](#analytic) for  $ \lvert z - z_0 \rvert < R $  
  Then $ f(z) = \displaystyle \sum_{m=0}^\infty \frac{(z-z_0)^m}{m!} \frac{d^m}{dz^m} f(z_0) $  
  implies $ f(\zeta) = \displaystyle \frac{1}{2i\pi}\oint_{\partial D} \frac{f(z)dz}{z-\zeta} $  
  implies $ \displaystyle \frac{d^m}{d\zeta^m} f(\zeta) = \frac{m!}{2i\pi}\oint_{\partial D} \frac{f(z)dz}{(z-\zeta)^{m+1}} $  

### Principal Value integrals:  
  Let $ 0 < a < b $ and $ z_0 \in (a, b) $ be a pole of $ f(z) $.  
  The __principal value integral__ is given as  
  $ \displaystyle PV\int_a^b f(z) dz = \lim_{\epsilon \to 0} (\int_{a}^{z_0 - \epsilon} + \int_{z_0 + \epsilon}^{b}) f(z) dz $  
  This notion is extended to integration over curves in the complex plane.  
    * In the simplest cases equip the above contour of integration with a small semicircle center at $ z_0 $ and radius $ \epsilon $, denoted by $ C_\epsilon $ . Then using the parametrisation $ z_0 + \epsilon e^{i\theta} $ and letting $ \epsilon \to 0 $ , compute the contribution of this pole  

### Jordan Lemma  

* Let $ C_R $ denote the semi-circle of radius $ R $ in the upper half complex $ z $-plane centered at the origin.  
  Assume that the analytic function $ f(z) $ vanishes on $ C_R $ as $ R \to \infty $ , namely  
  $ \lvert f(z) \rvert < K (R),\; z \in C_R $  
  and $ K(R) \to 0 $ as $ R \to \infty $  
  Then, $ \displaystyle\int_{C_R} e^{iaz} f(z) dz \to 0 $ as $ R \to \infty $ for $ a > 0 $  

> [ExerciseB01]
> $ \int_{-\infty}^{+\infty} = \displaystyle \frac{sinx}{x} $  


### Fourier Transform  

* The __Fourier Transform__ of a function $ f(x) , \; -\infty < x < \infty $ , is defined by  
  $ \hat{f}(\lambda) = \displaystyle \int_{-\infty}^{\infty} e^{-i\lambda x} f(x) dx, \; -\infty < \lambda < \infty $  

* The __Inverse Fourier Transform__ of a function $ f(\lambda) , \; -\infty < \lambda < \infty $ , is defined by  
  $ f(x) = \displaystyle \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{i\lambda x} \hat{f}(\lambda) d\lambda, \; -\infty < x < \infty $  

* In order to be well-defined, we need that $ f(x) \in L_2$ that is  
  $ \displaystyle \int_{-\infty}^{\infty} \lvert f(x) \rvert ^2 dx < \infty $  

* Fourier transform of derivative  
  $ \widehat{f^{(n)}} (\lambda) = (i\lambda)^n \hat{f}(\lambda) $  



************************



