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

- [Notation](#notation)
- [1. Introduction](#1-introduction)
    - [1.1. Well-Posed](#11-well-posed)
    - [1.2. Differentiation](#12-differentiation)
    - [1.3. Fatou lemma](#13-fatou-lemma)
- [2. Generalised Solutions](#2-generalised-solutions)
    - [2.1. Orthogonal decomposition](#21-orthogonal-decomposition)
    - [2.2. Minimal-norm Solutions](#22-minimal-norm-solutions)
    - [2.3. Decomposition of compact operators](#23-decomposition-of-compact-operators)
    - [2.4. Singular Value Decomposition](#24-singular-value-decomposition)
    - [2.5. Moore-Penrose inverse](#25-moore-penrose-inverse)
    - [2.6. Picard criterion](#26-picard-criterion)
    - [2.7. ill-posed](#27-ill-posed)
- [3. Regularisation Theory](#3-regularisation-theory)
- [4. Variational Regularisation](#4-variational-regularisation)
    - [4.1. Characteristic function](#41-characteristic-function)
    - [4.2. Proper](#42-proper)
    - [4.3. Convex](#43-convex)
    - [4.4. Fenchel conjugat](#44-fenchel-conjugat)
    - [4.5. Lower-semicontinuous l.s.c](#45-lower-semicontinuous-lsc)
    - [4.6. Subdifferential](#46-subdifferential)
    - [4.7. Minimiser](#47-minimiser)
    - [4.8. Weak compact convex subset 4.1.19](#48-weak-compact-convex-subset-4119)
    - [4.9. Bregman distances](#49-bregman-distances)
    - [4.10. Absolutely one-homogeneous functionals](#410-absolutely-one-homogeneous-functionals)
    - [4.11. Coercive](#411-coercive)
    - [4.12. Level set](#412-level-set)
    - [4.13. J-minimising solutions](#413-j-minimising-solutions)
    - [4.14. Main result of well-posedness](#414-main-result-of-well-posedness)
    - [4.15. Total Variation Regularisation](#415-total-variation-regularisation)
- [5. Dual Perspective](#5-dual-perspective)
- [6. Numerical Optimisation Methods](#6-numerical-optimisation-methods)
- [7. Example](#7-example)

<!-- /MarkdownTOC -->


************************

<a id="notation"></a>
## Notation

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

* Let $ A \in \mathcal{L}(\mathcal{U},\mathcal{V}) $. Then $ A $ is saide to be __compact__ if for any bounded set $ B \subset \mathcal{U} $ the closure of its _image_ $ \overline{A(B)} $ is compact in $ \mathcal{V} $. We denote the spave of compact operators by $ \mathcal{K}(\mathcal{U},\mathcal{V}) $.  



<a id="1-introduction"></a>
## 1. Introduction

* Operator equations  
    $$ Au = f $$  
    where $ A : \mathcal{U} \to \mathcal{V} $ is the forward operator acting between some spaces  
    $ \mathcal{U} $ and $ \mathcal{V} $ , typically Hilbert or Banach Spaces  
    $ f $ are the measured data  
    $ u $ is the quantity we want to reconstruct from data  

<a id="11-well-posed"></a>
### 1.1. Well-Posed

* The well-posed problem  if  
    1. it has a solution $ \forall f \in \mathcal{V} $  
    2. the solution is unique  
    3. the solution depends continuously on the data
        i.e. small errors in the data f result in small errors in the reconstruction  

<a id="12-differentiation"></a>
### 1.2. Differentiation

* Evaluation the derivative of a function $ f \in L^2 [0, \pi /2 ] $  
    $$ D f = f^\prime $$  
    where $ D : L^2 /[ 0, \pi /2 /] \to L^2 [ 0, \pi /2 ] $  

* ___Prop___ The operator D is unbounded from $ L^2 /[ 0, \pi /2 /] \to L^2 [ 0, \pi /2 ] $  

* __Integral transform__ of the image:  
    $$ f(x) = (Au) (x) := \int K(x,\xi) u(\xi) d\xi , $$  
    $ u(\xi) $ is the "true" image  
    $ K(x,\xi) $ is the point-spread function (PSF) which models the optics of the camera  
    

<a id="13-fatou-lemma"></a>
### 1.3. Fatou lemma

[Fatou's lemma]  



************************

<a id="2-generalised-solutions"></a>
## 2. Generalised Solutions

<a id="21-orthogonal-decomposition"></a>
### 2.1. Orthogonal decomposition

* For $ A \in \mathcal{L}(\mathcal{U},\mathcal{V}) $, we have  
    - $ \mathsf{R}^\perp(A) = \mathsf{N}(A^* ) $ then $ \overline{\mathsf{R}(A)} = \mathsf{N}(A^* )^\perp $  
    - $ \mathsf{R}^\perp(A^* ) = \mathsf{N}(A) $ then $ \overline{\mathsf{R}(A^* )} = \mathsf{N}(A)^\perp $   
* Hence, we can deduce the following __orthogonal decompositions__  
    - $ \mathcal{U} = \mathsf{N}(A) \oplus \overline{\mathsf{R}(A^* )} $  
    - $ \mathcal{V} = \mathsf{N}(A^* ) \oplus \overline{\mathsf{R}(A)} $  

* ___Lemma 1.___ Let $ A \in \mathcal{L}(\mathcal{U},\mathcal{V}) $ . Then $ \overline{\mathsf{R}(A^* A)} = \overline{\mathsf{R}(A^* )} $  


<a id="22-minimal-norm-solutions"></a>
### 2.2. Minimal-norm Solutions

* An element $ u \in \mathcal{U} $ is called  
    - a __least-squares solution__ of $ Au =f $ if  
        $$ \lVert  Au - f \rVert_\mathcal{V} = inf\lbrace \lVert  Av - f \rVert_\mathcal{V}, v \in \mathcal{U} \rbrace $$  
    - a __minimal-norm solution__ of $ Au =f $ (and is denoted by $ u^\dagger $ ) if  
        $ \lVert u^\dagger \rVert_\mathcal{U} \leq \lVert v \rVert_\mathcal{U} $ for all _least squares solutions_ $ v $  

* ___Thm 1.___ Let $ f \in \mathcal{V} \ \mathrm{and} \ A \in \mathcal{L}(\mathcal{U},\mathcal{V}) $. Then the following three assertions are equivalent  
    1. $ u \in \mathcal{U} $ satisfies $ Au = P_{\overline{\mathsf{R}(A)}} f $  
    2. $ u $ is a _least squares solution_ of the inverse problem  
    3. $ u $ solves the normal equation  
        $$ A^* Au = A^* f $$  

* ___Thm 2.___ Let $ f \in \mathsf{R}(A) \oplus \mathsf{R}(A)^\perp $. Then there exists a unique minimal norm solution $ u^\dagger$ to the inverse problem and all _least squares solutions_ are given by $ \lbrace u^\dagger \rbrace + \mathsf{N}(A) $  

<a id="23-decomposition-of-compact-operators"></a>
### 2.3. Decomposition of compact operators

* ___Thm 1.___ Let $ \mathcal{U} $ be a Hilbert space and $ A \in \mathcal{K}(\mathcal{U},\mathcal{U}) $ be self-adjoint. Then there exists an orthonormal basis $ \lbrace x_j \rbrace_{j\in\mathbb{N}} \subset \mathcal{U} \ \mathrm{of} \ \mathsf{R}(A) $ and a sequence of eigenvalues $ \lbrace \lambda_j \rbrace_{j\in\mathbb{N}} \subset \mathbb{R} $ with $ \lvert \lambda_1 \rvert \geq \lvert \lambda_2 \rvert \geq \cdots > 0 $ such that for all $ u \in \mathcal{U} $ we have  
    $$ Au = \displaystyle \sum_{j=1}^{\infty} \lambda_j \langle u,x_j \rangle_\mathcal{U} x_j $$  
    The sequence $ \lbrace \lambda_j \rbrace_{j\in\mathbb{N}} $ is either finite or we have $ \lambda_j \to 0 $  

<a id="24-singular-value-decomposition"></a>
### 2.4. Singular Value Decomposition

* the sequence $ \lbrace (\sigma_j, x_j, y_j) \rbrace $ is called __singular system__ or __singular value decomposition (SVD)__ of $ A $  
* Let $ A \in \mathcal{K}(\mathcal{U},\mathcal{V}) $. Then there exists  
    1. a not-necessarily infinite null sequence $ \lbrace \sigma_j \rbrace_{j\in\mathbb{N}} $ with $ \sigma_1 \geq \sigma_2 \geq \cdots > 0 $,  
    2. an orthonormal basis $ \lbrace x_j \rbrace_{j\in\mathbb{N}} \subset \mathcal{U} \ \mathrm{of} \ \mathsf{N}(A)^\perp $,  
    3. an orthonormal basis $ \lbrace y_j \rbrace_{j\in\mathbb{N}} \subset \mathcal{V} \ \mathrm{of} \ \overline{\mathsf{R}(A)} $ with  
        $$ Ax_j = \sigma_j y_j, \ A^* y_j = \sigma_j x_j, \ \forall \ j \in \mathbb{N} $$  
    * For all $ u \in \mathcal{U} $ we have the representation  
        $ Au = \displaystyle \sum_{j=1}^{\infty} \sigma_j \langle u,x_j \rangle y_j $  
    * For the adjoint operator $ A^* $ we have the representation  
        $ A^* f = \displaystyle \sum_{j=1}^{\infty} \sigma_j \langle f,y_j \rangle x_j  \ \ \forall \ f\in \mathcal{V} $  

<a id="25-moore-penrose-inverse"></a>
### 2.5. Moore-Penrose inverse

* Let $ A \in \mathcal{L}(\mathcal{U},\mathcal{V}) $ and let $ \widetilde{A} := A\mid_{\mathsf{N}(A)^\perp} : \mathsf{N}(A)^\perp \to \mathsf{R}(A) $ denote the __restriction__ of $ A $ to $ \mathsf{N}(A)^\perp $  
    The __Moore-Penrose inverse__ $ A^\dagger $ is defined as the unique linear extension of $ \widetilde{A}^{-1} $ to  
    $$ \mathsf{D}(A^\dagger) = \mathsf{R}(A) \oplus \mathsf{R}(A)^\perp $$  
    with  
    $$ \mathsf{N}(A^\dagger) = \mathsf{R}(A)^\perp $$.  

* ___Thm 1.___ Let $ A \in \mathcal{L}(\mathcal{U},\mathcal{V}). Then $ A ^\dagger $ is continuous, i.e. $ A ^\dagger \in \mathcal{L}(\mathsf{D},\mathcal{U}), if and only iff $ \mathsf{R}(A) is closed $.  

* ___Lemma 1.___ The MP inverse $ A^\dagger $ satisfies $ \mathsf{R}(A^\dagger) = \mathsf{N}(A)^\perp $ and the MP equations  
    1. $ A A^\dagger A = A $ ,  
    2. $ A^\dagger A A^\dagger = A^\dagger $,  
    3. $ A^\dagger A = I - P_{\mathsf{N}(A)} $,  
    4. $ A A^\dagger = P_{\overline{\mathsf{R}(A)}}\mid_{\mathsf{D}(A^\dagger)} $,  
    where $ P_\mathsf{N} $ and $ P_\overline{\mathsf{R}} $ denote the orthogonal projections on $ \mathsf{N} \ \mathrm{and} \ \overline{\mathsf{R}} $, respectively  

* ___Thm 2.___ For each $ f \in \mathsf{D}(A^\dagger) $, the minimal norm solution $ u^\dagger $ to the inverse problem is given via  
    $$ u^\dagger = A^\dagger f $$.  

* ___Thm 3.___ Let $ A \in \mathcal{K}(\mathcal{U},\mathcal{V}) $ with an infinite dimensional range. Then, the MPi of $ A $ is discontinuous  

* __Thm 4.__ Let $ A \in \mathcal{K}(\mathcal{U},\mathcal{V}) $ with singular system $ \lbrace (\sigma_j, x_j, y_j) \rbrace_{j\in\mathbb{N}} $ and $ f \in \mathsf{D} (A^\dagger) $  
    then the Moore-Penrose inverse of $ A $ can be written as  
    $ A^\dagger f = \displaystyle \sum_{j = 1}^{\infty} \sigma_j^{-1} \langle f,y_j \rangle x_j $  

    - The representation makes it clear that the inverse is unbounded. Indeed, taing the sequence $ y_j $ we note that $ \lVert A^\dagger y_j \rVert = \sigma_j^{-1} \to \infty $, although $ \lVert y_j \rVert = 1 $  

<a id="26-picard-criterion"></a>
### 2.6. Picard criterion

* We say that the data $ f $ satisfy the __Picard criterion__, if  
    $$ \lVert A^\dagger f \rVert^2 = \displaystyle \sum_{j=1}^{\infty} \frac{\lvert \langle f,y_j \rangle \rvert^2}{\sigma_j^2} < \infty $$  

* ___Thm 1.___ Let $ A \in \mathcal{K}(\mathcal{U},\mathcal{V}) $ with singular system $ \lbrace (\sigma_j, x_j, y_j) \rbrace_{j \in \mathbb{N}} $, and $ f \in \overline{\mathsf{R}(A)} $. Then $ f \in \mathsf{R}(A) $ if and only if the __Picard criterion__ is met  

<a id="27-ill-posed"></a>
### 2.7. ill-posed

* An ill-posed inverse problem is __mildly ill-posed__ if the singular values decay at most with polynomial speed, i.e. there exist $ \gamma, C > 0 $ such that $ \sigma_j \geq C j^{-\gamma} $ for all $ j $. We call the ill-posed inverse problem __severely ill-posed__ if its singular values decay faster than with polynomial speed, i.e. for all $ \gamma, C > 0 $ one has that $ \sigma_j \leq C j^{-\gamma} $ for $ j $ sufficiently large.  

************************

<a id="3-regularisation-theory"></a>
## 3. Regularisation Theory

Since the Moore-Penrose inverse of $ A $ is unbounded 

************************

<a id="4-variational-regularisation"></a>
## 4. Variational Regularisation

The __variation formulation__ of __Tikhonov regularisation__ for some data $ f_\delta \in \mathcal{V} $  
    $$ \displaystyle\min_{u\in\mathcal{U}} \lVert Au - f_\delta \rVert^2 + \alpha\lVert u \rVert^2 $$  
    * __fidelity function__ $ \mathcal{F}(Au,f) = \lVert Au - f_\delta \rVert^2 $  
    * __regulariser__ $ \mathcal{J}(U) = \lVert u \rVert^2 $  

the __variational regularisation problem__ is  
    $$ \displaystyle\min_{u\in\mathcal{U}} \mathcal{F}(Au,f) + \alpha\mathcal{J}(U) $$  

<a id="41-characteristic-function"></a>
### 4.1. Characteristic function

* Let $ \mathcal{C} \subset \mathcal{U} $ be a set.  
    The function $ \mathcal{X}_\mathcal{C} : \mathcal{U} \to \overline{\mathbb{R}} $,  
    $$ \displaystyle \mathcal{X}_\mathcal{C}(u) = {\begin{cases}0 &{\text{if }} u \in \mathcal{C},\\ \infty &{\text{if }} u \in \mathcal{U}\backslash \mathcal{C}\end{cases}} $$  
    is called the __characteristic function__ of the set $ \mathcal{C} $  
* The __CF__ $ \mathcal{X}_\mathcal{C}(u) $ is convex iff $ \mathcal{C} $ is a convex set  

***************

Let $ E : \mathcal{U} \to \overline{\mathbb{R}} $ be a functional. 

<a id="42-proper"></a>
### 4.2. Proper

* A functional E is called __proper__ if  
    the effective domain dom(E) is _not empty_  

<a id="43-convex"></a>
### 4.3. Convex

* A functional E is called __convex__ if  
    $ E (\lambda u + (1 - \lambda) v) \leq \lambda (u) + (1-\lambda) E(v) $  
    for all $ \lambda \in (0,1) $ and all $ u,v \in dom(E) \ \mathrm{with} \  u \neq v $  
* It is called _strictly_ convex if the inequality is strict  

<a id="44-fenchel-conjugat"></a>
### 4.4. Fenchel conjugat

* The functional E is called the __Fenchel conjugate__ of E, such that  
    $ E^* (p) = \displaystyle \sup_{u\in \mathcal{U}} [<u,p> - E(u)] $  
* For any functional $ E : \mathcal{U} \to \overline{\mathbb{R}} $ the following inequallity holds:  
    $ E^{* * } := (E^* )^* \leq E $  

<a id="45-lower-semicontinuous-lsc"></a>
### 4.5. Lower-semicontinuous l.s.c

* If E is proper, l.s.c and convex, then  
    $ E^{* * } = E $  

<a id="46-subdifferential"></a>
### 4.6. Subdifferential

* A functional E is called subdifferentiable at $ u \in \mathcal{U} $, if there exists an element $ p \in \mathcal{U}^* $ such that  
    $ E(v) \geq E(u) + <p,v-u> \ \forall v \in \mathcal{U} $  
* $ p $ also called a subgradient at position $ u $  
* the collection of all subgradients at position $ u $ is called subdifferential of $ E $ at $ u $, such that  
    $ \partial E(u) := \lbrace p \in \mathcal{U}^* \mid E(v) \geq E(u) + <p, v-u>, \ \forall v \in \mathcal{U} \rbrace $  

<a id="47-minimiser"></a>
### 4.7. Minimiser

* We call $ u^* $ a minimiser of $ E $ such that  
    $ u^* \in \mathcal{U} $ solves the minimisation problem $ \displaystyle \min_{u \in \mathcal{U}} E (u) $  
    if and only if $ E(u^* ) \leq \infty $ and $ E(u^* ) \leq E(u), \ \forall u \in \mathcal{U} $  
* An element $ u \in \mathcal{U} $ is a __minimiser__ of $ E $ if and only if $ 0 \in \partial E(u) $  

<a id="48-weak-compact-convex-subset-4119"></a>
### 4.8. Weak compact convex subset 4.1.19

* Let $ E $ be a proper convex fucntion and $ u \in \ \mathrm{dom} \ (E) $ . Then $ \partial E(u) $ is a weak-* compact convex subset of $ \mathcal{U}^* $ .  

<a id="49-bregman-distances"></a>
### 4.9. Bregman distances

* Let $ E $ be a convex functional. Moreover, let $ u,v \in \mathcal{U}, \ E(v) \leq \infty \ \mathrm{and} \ q \in \partial E(v) $. Then the (generalised) __Bregman distance__ of $ E $ between $ u $ and $ v $ is defined as  
    $$ D^q_E(u,v):= E(u) - E(v) - <q,u-v> $$.  

In general, the __Bregman distances__ are not symmetric that $ D^q_E (u,v) = 0 $ does not imply $ u =v $, overcome the issue, one can introduce the _symmetric_ __Bregman distance__  

* Let $ E $ be a convex functional. Moreover, let $ u,v \in \mathcal{U}, \ E(u) \leq \infty, E(v) \leq \infty \ \mathrm{and} \ q \in \partial E(v) $. Then the symmetric __Bregman distance__ of $ E $ between $ u $ and $ v $ is defined as  
    $$ D^\mathrm{symm}_E(u,v):= D^q_E(u,v) + D^p_E(v,u) = <p-q,u-v> $$. 

<a id="410-absolutely-one-homogeneous-functionals"></a>
### 4.10. Absolutely one-homogeneous functionals

* A functional $ E $ is called absolutely one-homogeneous if  
    $$ E(\lambda u) = \lvert \lambda \rvert E(u) \ \forall \ \lambda \in \mathbb{R}, \ \forall \ u\in\mathcal{U} $$  
* ___Prop 1.___ Let $ E(\cdot) $ be a convex absolutely one-homogeneous functional and let $ p \in \partial E(u) $. Then the following equality holds:  
    $$ E(u) = (p,u) $$.  
* ___Prop 2.___ Let $ E(\dot) $ be a proper, convex, l.s.c. and absolutely one-homogeneous functional. Then the Fenchel conjugate $ E^* (\cdot) $ is the characteristic function of the convex set $ \partial E(0) $.  
* ___Prop 3.___ For any $ u \in \mathcal{U}, p \in \partial E(u) $ if and only if $ p \in \partial E(0) $ and $ E (u) = (p,u) $.  

<a id="411-coercive"></a>
### 4.11. Coercive

* A functional E is called __coercive__, if for all $ \lbrace u_j \rbrace_{j\in \mathbb{N}} $ with $ \lVert u_j \rVert_\mathcal{U} \to \infty $ we have $ E(u_j) \to \infty $  

<a id="412-level-set"></a>
### 4.12. Level set

* $ L_c (f) = \lbrace (x_1, \cdots, x_n ) \mid f(x_1 , \cdots x_n ) = c \rbrace $  
* __Sub-level set__ of f is  
    - $ L_c^- (f) = \lbrace (x_1, \cdots, x_n ) \mid f(x_1 , \cdots x_n ) \leq c \rbrace $  

<a id="413-j-minimising-solutions"></a>
### 4.13. J-minimising solutions

* Suppose that the fidelity term is such that the optimisation problem  
    $$ \displaystyle\min_{u\in\mathcal{U}} \mathcal{F}(Au,f) $$  
    has a solution for any $ f \in \mathcal{V}. Let  
    - $ u^\dagger_\mathcal{J} \in \arg \min_{u\in\mathcal{U}} \mathcal{F}(Au,f) $ and  
    - $ \mathcal{J}(u^\dagger_\mathcal{J})\leq \mathcal{J}(\tilde{u})\ \forall \ \tilde{u}\in \arg \min_{u\in\mathcal{U}}\mathcal{F}(Au,f) $  
    Then $ u^\dagger_\mathcal{J} $ is called a $ \mathcal{J} $ -minimising solution of $ Au = f $  

<a id="414-main-result-of-well-posedness"></a>
### 4.14. Main result of well-posedness

* Let $ \mathcal{U} $ and $ \mathcal{V} $ be Banach spaces and $ \tau_\mathcal{U} $ and $ \tau_\mathcal{V} $ some topologies (not necessarily induced by the norm) in $ \mathcal{U} $ and $ \mathcal{V} $, respectively. Suppose that problem $ Au = f $ is solvable and the solution has a finite value of $ \mathcal{J} $. Assume also that  
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

<a id="415-total-variation-regularisation"></a>
### 4.15. Total Variation Regularisation

* Let $ \Omega \subset \mathbb{R}^n $ be a bounded domain and $ u \in L^1(\Omega) $. Let $ \mathcal{D}(\Omega, \mathbb{R}^n) $ be the following set of vector-valued test function (i.e. functions that map from $ \Omega $ to $ \mathbb{R}^n $)  
    $$ \mathcal{D} (\Omega,\mathbb{R}^n) := \lbrace \varphi \in C^\infty_0 (\Omega;\mathbb{R}^n) \mid \ \mathrm{ess} \  \sup_{x\in\Omega} \lVert \varphi(x) \rVert_2 \leq 1 \rbrace $$.  
* __total variation__ of $ u \in L^1(\Omega) $ is defined as follows  
    $$ \ \mathrm{TV} \ (u) \displaystyle \sup_{\varphi\in\mathcal{D}(\Omega,\mathbb{R}^n)} \int_{\Omega} u(x) \ \mathrm{div} \ \varphi(x) dx $$  


************************

<a id="5-dual-perspective"></a>
## 5. Dual Perspective



************************

<a id="6-numerical-optimisation-methods"></a>
## 6. Numerical Optimisation Methods



************************

<a id="7-example"></a>
## 7. Example



************************



