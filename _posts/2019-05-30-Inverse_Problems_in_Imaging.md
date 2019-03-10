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

- [Common Formul](#common-formul)
    - [Quick Finding](#quick-finding)
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

# Common Formul  



## Quick Finding  


************************

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

* Evaluation the derivative of a function $ f \in L^2 \[0, \pi /2 \] $  
    $$ D f = f^\prime $$  
    where $ D : L^2 /[ 0, \pi /2 /] \to L^2 \[ 0, \pi /2 \] $  

* ___Prop___ The operator D is unbounded from $ L^2 /[ 0, \pi /2 /] \to L^2 \[ 0, \pi /2 \] $  

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



