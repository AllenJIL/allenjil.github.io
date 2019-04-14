---
layout: post
title: "Inverse Problems in Imaging"
description: "剑桥数学笔记 (2019)"
date: 2019-05-30
tag: Math
---
[Lecture Notes]:<http://store.maths.cam.ac.uk/DAMTP/yk362/teaching/201819_Michaelmas_InverseProblemsImaging/lecture_notes_current.pdf> "Lecture Notes"
[Fatou's lemma]:<https://en.wikipedia.org/wiki/Fatou%27s_lemma#Standard_statement_of_Fatou's_lemma> "Fatou's lemma"


> This note is taken from the lecture notes in the Part III course of University of Cambridge in 2019   
> Source of the notes:  
    Wikipedia  
    [Lecture Notes]  


**********

<!-- MarkdownTOC -->

- [1. Notation](#1-notation)
- [2. Introduction](#2-introduction)
    - [2.1. Well-Posed](#21-well-posed)
    - [2.2. Differentiation](#22-differentiation)
    - [2.3. Fatou lemma](#23-fatou-lemma)
- [3. Generalised Solutions](#3-generalised-solutions)
    - [3.1. Orthogonal decomposition](#31-orthogonal-decomposition)
- [4. Regularisation Theory](#4-regularisation-theory)
- [5. Variational Regularisation](#5-variational-regularisation)
    - [5.1. Characteristic function](#51-characteristic-function)
    - [5.2. Proper](#52-proper)
    - [5.3. Convex](#53-convex)
    - [5.4. Fenchel conjugat](#54-fenchel-conjugat)
    - [5.5. Lower-semicontinuous l.s.c](#55-lower-semicontinuous-lsc)
    - [5.6. Subdifferential](#56-subdifferential)
    - [5.7. Minimiser](#57-minimiser)
    - [5.8. Weak compact convex subset 4.1.19](#58-weak-compact-convex-subset-4119)
    - [5.9. Bregman distances](#59-bregman-distances)
    - [5.10. Absolutely one-homogeneous functionals](#510-absolutely-one-homogeneous-functionals)
    - [5.11. Coercive](#511-coercive)
    - [5.12. Level set](#512-level-set)
    - [5.13. J-minimising solutions](#513-j-minimising-solutions)
    - [5.14. Main result of well-posedness](#514-main-result-of-well-posedness)
    - [5.15. Total Variation Regularisation](#515-total-variation-regularisation)
- [6. Dual Perspective](#6-dual-perspective)
- [7. Numerical Optimisation Methods](#7-numerical-optimisation-methods)
- [8. Example](#8-example)

<!-- /MarkdownTOC -->


************************

<a id="1-notation"></a>
## 1. Notation

* $ A $ bounded linear operators  

* $ A \in \mathcal{L}(\mathcal{U}, \mathcal{V}) $  with  
    $$ \displaystyle \lVert A \rVert_{\mathcal{L}(\mathcal{U}, \mathcal{V})} := \sup_{u \in \mathcal{U} \backslash \lbrace 0 \rbrace} \frac{\lVert A u \rVert_\mathcal{V}}{\lVert u \rVert_\mathcal{U}} = \sup_{\lVert u \rVert_\mathcal{U} \leq 1} \lVert Au \rVert_\mathcal{V} \leq \infty $$  
* For $ A : \mathcal{U} \to \mathcal{V} $  
    - $ \mathsf{D}(A) := U $ the __domain__  
    - $ \mathsf{N}(A) := \lbrace u \in \mathcal{U} \mid Au = 0 \rbrace $ the __kernel__  
    - $ \mathsf{R}(A) := \lbrace f \in \mathcal{V} \mid f = Au, u \in \mathcal{U} \rbrace $ the __range__  

* A is __continuous__ at $ u \in \mathcal{U} $  
    - if $ \forall ε > 0 \exists δ > 0 $ with  
        $$ \lVert Au - Av \rVert_\mathcal{V} \leq ε \ \forall \ v\in \mathcal{U} \ \mathrm{with}\ \lVert u - v \rVert_\mathcal{U} \leq δ $$  
* $ A^* $ the (unique) __adjoint__ operator of $ A $ with  
    - $ \langle Au, v \rangle_\mathcal{V} = \langle u, A^*v \rangle_\mathcal{U} \ \forall \ u \in \mathcal{U}, v \in \mathcal{V} $  

* For a subset $ \mathcal{X} \subset \mathcal{U} $, the __orthogonal complement__ of $ \mathcal{X} $ is defined by  
    - $ \mathcal{X}^\perp := \lbrace  u \in \mathcal{U} \mid \langle u,v\rangle_\mathcal{U} = 0 \ \forall \ v \in \mathcal{X} \rbrace $  


<a id="2-introduction"></a>
## 2. Introduction

* Operator equations  
    $$ Au = f $$  
    where $ A : \mathcal{U} \to \mathcal{V} $ is the forward operator acting between some spaces  
    $ \mathcal{U} $ and $ \mathcal{V} $ , typically Hilbert or Banach Spaces  
    $ f $ are the measured data  
    $ u $ is the quantity we want to reconstruct from data  

<a id="21-well-posed"></a>
### 2.1. Well-Posed

* The well-posed problem  if  
    1. it has a solution $ \forall f \in \mathcal{V} $  
    2. the solution is unique  
    3. the solution depends continuously on the data
        i.e. small errors in the data f result in small errors in the reconstruction  

<a id="22-differentiation"></a>
### 2.2. Differentiation

* Evaluation the derivative of a function $ f \in L^2 [0, \pi /2 ] $  
    $$ D f = f^\prime $$  
    where $ D : L^2 /[ 0, \pi /2 /] \to L^2 [ 0, \pi /2 ] $  

* ___Prop___ The operator D is unbounded from $ L^2 /[ 0, \pi /2 /] \to L^2 [ 0, \pi /2 ] $  

* __Integral transform__ of the image:  
    $$ f(x) = (Au) (x) := \int K(x,\xi) u(\xi) d\xi , $$  
    $ u(\xi) $ is the "true" image  
    $ K(x,\xi) $ is the point-spread function (PSF) which models the optics of the camera  
    

<a id="23-fatou-lemma"></a>
### 2.3. Fatou lemma

[Fatou's lemma]  



************************

<a id="3-generalised-solutions"></a>
## 3. Generalised Solutions

<a id="31-orthogonal-decomposition"></a>
### 3.1. Orthogonal decomposition

* For $ A \in \mathcal{L}(\mathcal{U},\mathcal{V}) $, we have  
    - $ \mathsf{R}^\perp(A) = \mathsf{N}(A^* ) $ then $ \overline{\mathsf{R}(A)} = \mathsf{N}(A^* )^\perp $  
    - $ \mathsf{R}^\perp(A^* ) = \mathsf{N}(A) $ then $ \overline{\mathsf{R}(A^* )} = \mathsf{N}(A)^\perp $   


************************

<a id="4-regularisation-theory"></a>
## 4. Regularisation Theory



************************

<a id="5-variational-regularisation"></a>
## 5. Variational Regularisation

The __variation formulation__ of __Tikhonov regularisation__ for some data $ f_\delta \in \mathcal{V} $  
    $$ \displaystyle\min_{u\in\mathcal{U}} \lVert Au - f_\delta \rVert^2 + \alpha\lVert u \rVert^2 $$  
    * __fidelity function__ $ \mathcal{F}(Au,f) = \lVert Au - f_\delta \rVert^2 $  
    * __regulariser__ $ \mathcal{J}(U) = \lVert u \rVert^2 $  

the __variational regularisation problem__ is  
    $$ \displaystyle\min_{u\in\mathcal{U}} \mathcal{F}(Au,f) + \alpha\mathcal{J}(U) $$  

<a id="51-characteristic-function"></a>
### 5.1. Characteristic function

* Let $ \mathcal{C} \subset \mathcal{U} $ be a set.  
    The function $ \mathcal{X}_\mathcal{C} : \mathcal{U} \to \overline{\mathbb{R}} $,  
    $$ \displaystyle \mathcal{X}_\mathcal{C}(u) = {\begin{cases}0 &{\text{if }} u \in \mathcal{C},\\ \infty &{\text{if }} u \in \mathcal{U}\backslash \mathcal{C}\end{cases}} $$  
    is called the __characteristic function__ of the set $ \mathcal{C} $  
* The __CF__ $ \mathcal{X}_\mathcal{C}(u) $ is convex iff $ \mathcal{C} $ is a convex set  

***************

Let $ E : \mathcal{U} \to \overline{\mathbb{R}} $ be a functional. 

<a id="52-proper"></a>
### 5.2. Proper

* A functional E is called __proper__ if  
    the effective domain dom(E) is _not empty_  

<a id="53-convex"></a>
### 5.3. Convex

* A functional E is called __convex__ if  
    $ E (\lambda u + (1 - \lambda) v) \leq \lambda (u) + (1-\lambda) E(v) $  
    for all $ \lambda \in (0,1) $ and all $ u,v \in dom(E) \ \mathrm{with} \  u \neq v $  
* It is called _strictly_ convex if the inequality is strict  

<a id="54-fenchel-conjugat"></a>
### 5.4. Fenchel conjugat

* The functional E is called the __Fenchel conjugate__ of E, such that  
    $ E^* (p) = \displaystyle \sup_{u\in \mathcal{U}} [<u,p> - E(u)] $  
* For any functional $ E : \mathcal{U} \to \overline{\mathbb{R}} $ the following inequallity holds:  
    $ E^{* * } := (E^* )^* \leq E $  

<a id="55-lower-semicontinuous-lsc"></a>
### 5.5. Lower-semicontinuous l.s.c

* If E is proper, l.s.c and convex, then  
    $ E^{* * } = E $  

<a id="56-subdifferential"></a>
### 5.6. Subdifferential

* A functional E is called subdifferentiable at $ u \in \mathcal{U} $, if there exists an element $ p \in \mathcal{U}^* $ such that  
    $ E(v) \geq E(u) + <p,v-u> \ \forall v \in \mathcal{U} $  
* $ p $ also called a subgradient at position $ u $  
* the collection of all subgradients at position $ u $ is called subdifferential of $ E $ at $ u $, such that  
    $ \partial E(u) := \lbrace p \in \mathcal{U}^* \mid E(v) \geq E(u) + <p, v-u>, \ \forall v \in \mathcal{U} \rbrace $  

<a id="57-minimiser"></a>
### 5.7. Minimiser

* We call $ u^* $ a minimiser of $ E $ such that  
    $ u^* \in \mathcal{U} $ solves the minimisation problem $ \displaystyle \min_{u \in \mathcal{U}} E (u) $  
    if and only if $ E(u^* ) \leq \infty $ and $ E(u^* ) \leq E(u), \ \forall u \in \mathcal{U} $  
* An element $ u \in \mathcal{U} $ is a __minimiser__ of $ E $ if and only if $ 0 \in \partial E(u) $  

<a id="58-weak-compact-convex-subset-4119"></a>
### 5.8. Weak compact convex subset 4.1.19

* Let $ E $ be a proper convex fucntion and $ u \in \ \mathrm{dom} \ (E) $ . Then $ \partial E(u) $ is a weak-* compact convex subset of $ \mathcal{U}^* $ .  

<a id="59-bregman-distances"></a>
### 5.9. Bregman distances

* Let $ E $ be a convex functional. Moreover, let $ u,v \in \mathcal{U}, \ E(v) \leq \infty \ \mathrm{and} \ q \in \partial E(v) $. Then the (generalised) __Bregman distance__ of $ E $ between $ u $ and $ v $ is defined as  
    $$ D^q_E(u,v):= E(u) - E(v) - <q,u-v> $$.  

In general, the __Bregman distances__ are not symmetric that $ D^q_E (u,v) = 0 $ does not imply $ u =v $, overcome the issue, one can introduce the _symmetric_ __Bregman distance__  

* Let $ E $ be a convex functional. Moreover, let $ u,v \in \mathcal{U}, \ E(u) \leq \infty, E(v) \leq \infty \ \mathrm{and} \ q \in \partial E(v) $. Then the symmetric __Bregman distance__ of $ E $ between $ u $ and $ v $ is defined as  
    $$ D^\mathrm{symm}_E(u,v):= D^q_E(u,v) + D^p_E(v,u) = <p-q,u-v> $$. 

<a id="510-absolutely-one-homogeneous-functionals"></a>
### 5.10. Absolutely one-homogeneous functionals

* A functional $ E $ is called absolutely one-homogeneous if  
    $$ E(\lambda u) = \lvert \lambda \rvert E(u) \ \forall \ \lambda \in \mathbb{R}, \ \forall \ u\in\mathcal{U} $$  
* ___Prop 1.___ Let $ E(\cdot) $ be a convex absolutely one-homogeneous functional and let $ p \in \partial E(u) $. Then the following equality holds:  
    $$ E(u) = (p,u) $$.  
* ___Prop 2.___ Let $ E(\dot) $ be a proper, convex, l.s.c. and absolutely one-homogeneous functional. Then the Fenchel conjugate $ E^* (\cdot) $ is the characteristic function of the convex set $ \partial E(0) $.  
* ___Prop 3.___ For any $ u \in \mathcal{U}, p \in \partial E(u) $ if and only if $ p \in \partial E(0) $ and $ E (u) = (p,u) $.  

<a id="511-coercive"></a>
### 5.11. Coercive

* A functional E is called __coercive__, if for all $ \lbrace u_j \rbrace_{j\in \mathbb{N}} $ with $ \lVert u_j \rVert_\mathcal{U} \to \infty $ we have $ E(u_j) \to \infty $  

<a id="512-level-set"></a>
### 5.12. Level set

* $ L_c (f) = \lbrace (x_1, \cdots, x_n ) \mid f(x_1 , \cdots x_n ) = c \rbrace $  
* __Sub-level set__ of f is  
    - $ L_c^- (f) = \lbrace (x_1, \cdots, x_n ) \mid f(x_1 , \cdots x_n ) \leq c \rbrace $  

<a id="513-j-minimising-solutions"></a>
### 5.13. J-minimising solutions

* Suppose that the fidelity term is such that the optimisation problem  
    $$ \displaystyle\min_{u\in\mathcal{U}} \mathcal{F}(Au,f) $$  
    has a solution for any $ f \in \mathcal{V}. Let  
    - $ u^\dagger_\mathcal{J} \in \arg \min_{u\in\mathcal{U}} \mathcal{F}(Au,f) $ and  
    - $ \mathcal{J}(u^\dagger_\mathcal{J})\leq \mathcal{J}(\tilde{u})\ \forall \ \tilde{u}\in \arg \min_{u\in\mathcal{U}}\mathcal{F}(Au,f) $  
    Then $ u^\dagger_\mathcal{J} $ is called a $ \mathcal{J} $ -minimising solution of $ Au = f $  

<a id="514-main-result-of-well-posedness"></a>
### 5.14. Main result of well-posedness

Let $ \mathcal{U} $ and $ \mathcal{V} $ be Banach spaces and $ \tau_\mathcal{U} $ and $ \tau_\mathcal{V} $ some topologies (not necessarily induced by the norm) in $ \mathcal{U} $ and $ \mathcal{V} $, respectively. Suppose that problem $ Au = f $ is solvable and the solution has a finite value of $ \mathcal{J} $. Assume also that  
    1. $ A : \mathcal{U} \to \mathcal{V} $ is $ \tau_\mathcal{U} \to \tau_\mathcal{V} $ continuous;  
    2. $ \mathcal{J}: \mathcal{U} \to \overline{\mathbb{R_+}} $ is proper, $ \tau_\mathcal{U} $ -l.s.c and its non-empty sublevel-sets $ \lbrace u \in \mathcal{U} : \mathcal{J}(u) \leq C \rbrace $ are $ \tau_\mathcal{U} $ -sequentiallly compact;  
    3. $ \mathcal{F}: \mathcal{V} \times \mathcal{V} \to \overline{\mathbb{R_+}} $ is proper, $ \tau_\mathcal{V} $ -l.s.c in the first argument and norm-l.s.c in the second ne and satisfies  
        $$ \mathcal{F}(f,f) = 0 \ \mathrm{and} \  \mathcal{F}(f,f_\delta) \leq C(\delta) \to 0 \ \mathrm{as}\ \delta \to 0 $$  
        $ \ \forall \ f\in \mathcal{V} \ \mathrm{and} \ f_\delta \in \mathcal{V} \ \mathrm{s.t.} \ \lVert f_\delta - f \rVert \leq \delta $ ;  
    4. there exists an a priori parameter choice rule $ \alpha = \alpha(\delta) $ such that $ \displaystyle \lim_{\delta\to 0} \alpha(\delta) = 0 \ \mathrm{and} \ \displaystyle \lim_{\delta\to0} \frac{C(\delta)}{\alpha(\delta)} = 0 $     
    __Then__   
    i. there exists a $ \mathcal{J} $ -minimising solution $ u^\dagger_\mathcal{J} $ of $ Au=f $;  
    ii. for any fixed $ \alpha > 0 $ and $ f_\delta \in \mathcal{V} $ there exists a minimiser $ u^\alpha_\delta \in \arg \min_{u\in\mathcal{U}} \mathcal{F}(Au,f_\delta) + \alpha\mathcal{J}(u) $;  
    iii. the parameter choice rule $ \alpha = \alpha(\delta) $ from Assumption(4) guarantees that $ u_\delta := u^{\alpha(\delta)}_ \delta \xrightarrow[]{\tau_\mathcal{U}} u^\dagger_\mathcal{J} $ (possibble, along a subsequence) and $ \mathcal{J}(u_\delta) \to \mathcal{J}(u^\dagger_\mathcal{J}) $  

<a id="515-total-variation-regularisation"></a>
### 5.15. Total Variation Regularisation

* Let $ \Omega \subset \mathbb{R}^n $ be a bounded domain and $ u \in L^1(\Omega) $. Let $ \mathcal{D}(\Omega, \mathbb{R}^n) $ be the following set of vector-valued test function (i.e. functions that map from $ \Omega $ to $ \mathbb{R}^n $)  
    $$ \mathcal{D} (\Omega,\mathbb{R}^n) := \lbrace \varphi \in C^\infty_0 (\Omega;\mathbb{R}^n) \mid \ \mathrm{ess} \  \sup_{x\in\Omega} \lVert \varphi(x) \rVert_2 \leq 1 \rbrace $$.  
* __total variation__ of $ u \in L^1(\Omega) $ is defined as follows  
    $$ \ \mathrm{TV} \ (u) \displaystyle \sup_{\varphi\in\mathcal{D}(\Omega,\mathbb{R}^n)} \int_{\Omega} u(x) \ \mathrm{div} \ \varphi(x) dx $$  


************************

<a id="6-dual-perspective"></a>
## 6. Dual Perspective



************************

<a id="7-numerical-optimisation-methods"></a>
## 7. Numerical Optimisation Methods



************************

<a id="8-example"></a>
## 8. Example



************************



