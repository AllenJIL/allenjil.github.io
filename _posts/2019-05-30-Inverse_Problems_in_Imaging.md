---
layout: post
title: "Inverse Problems in Imaging"
description: "剑桥数学笔记 (2019)"
date: 2019-05-30
tag: Math
---
[Lecture Notes]:<http://store.maths.cam.ac.uk/DAMTP/yk362/teaching/201819_Michaelmas_InverseProblemsImaging/lecture_notes_current.pdf> "Lecture Notes"

> This note is taken from the lecture notes in the Part III course of University of Cambridge in 2019   
> Source of the notes:  
    Wikipedia  
    [Lecture Notes]  



**********

<!-- MarkdownTOC -->

- [Notation](#notation)
- [Introduction](#introduction)
- [Well-Posed](#well-posed)
- [Differentiation](#differentiation)
- [Generalised Solutions](#generalised-solutions)
- [Regularisation Theory](#regularisation-theory)
- [Variational Regularisation](#variational-regularisation)
- [Dual Perspective](#dual-perspective)
- [Numerical Optimisation Methods](#numerical-optimisation-methods)
- [Example](#example)

<!-- /MarkdownTOC -->


************************

### Notation  

* $ A $ bounded linear operators  

* $ A \in \mathcal{L}(\mathcal{U}, \mathcal{V})  with  
    $$ \displaystyle \lVert A \rVert_{\mathcal{L}(\mathcal{U}, \mathcal{V})} := \sup_{u \in \mathcal{U} \backslash \{ 0 \}} \frac{\lVert A u \rVert_\mathcal{V}}{\lVert u \rVert_\mathcal{U}} = \sup_{\lVert u \rVert_\mathcal{U} \leq 1} \lVert Au \rVert_\mathcal{V} \leq \infty $$  
* For $ A : \mathcal{U} \to \mathcal{V} $  
    - $ \mathcal{D}(A) := U $ the __domain__  
    - $ \mathcal{N}(A) := \{ u \in \mathcal{U} \mid Au = 0 \} $ the __kernel__  
    - $ \mathcal{R}(A) := \{ f \in \mathcal{V} \mid f = Au, u \in \mathcal{U} \} $ the __range__  

* A is __continuous__ at $ u \in \mathcal{U} $  
    - if $ \forall ε > 0 \exists δ > 0 $ with  
        $$ \lVert Au - Av \rVert_\mathcal{V} \leq ε \ \forall \ v\in \mathcal{U} \ \mathrm{with}\ \lVert u - v \rVert_\mathcal{U} \leq δ $$  
* $ A^* $ the (unique) __adjoint__ operator of $ A $ with  
    - $ \langle Au, v \rangle_\mathcal{V} = \langle u, A^*v \rangle_\mathcal{U} \ \forall \ u \in \mathcal{U}, v \in \mathcal{V} $  

* For a subset $ \mathcal{X} \subset \mathcal{U} $, the __orthogonal complement__ of $ \mathcal{X} $ is defined by  
    - $ \mathcal{X}^\perp := \{ u \in \mathcal{U} \mid \langle u,v\rangle_\mathcal{U} = 0 \ \forall \ v \in \mathcal{X} \} $  


## Introduction  

* Operator equations  
    $$ Au = f $$  
    where $ A : \mathcal{U} \to \mathcal{V} $ is the forward operator acting between some spaces  
    $ \mathcal{U} $ and $ \mathcal{V} $ , typically Hilbert or Banach Spaces  
    $ f $ are the measured data  
    $ u $ is the quantity we want to reconstruct from data  

### Well-Posed  

* The well-posed problem  if  
    1. it has a solution $ \forall f \in \mathcal{V} $  
    2. the solution is unique  
    3. the solution depends continuously on the data
        i.e. small errors in the data f result in small errors in the reconstruction  

### Differentiation  

* Evaluation the derivative of a function $ f \in L^2 [0, \pi /2 ] $  
    $$ D f = f^\prime $$  
    where $ D : L^2 /[ 0, \pi /2 /] \to L^2 [ 0, \pi /2 ] $  

* ___Prop___ The operator D is unbounded from $ L^2 /[ 0, \pi /2 /] \to L^2 [ 0, \pi /2 ] $  

* __Integral transform__ of the image:  
    $$ f(x) = (Au) (x) := \int K(x,\xi) u(\xi) d\xi , $$  
    $ u(\xi) $ is the "true" image  
    $ K(x,\xi) $ is the point-spread function (PSF) which models the optics of the camera  
    

************************

## Generalised Solutions    




************************

## Regularisation Theory    



************************

## Variational Regularisation  



************************

## Dual Perspective  



************************

## Numerical Optimisation Methods  



************************

## Example  



************************



