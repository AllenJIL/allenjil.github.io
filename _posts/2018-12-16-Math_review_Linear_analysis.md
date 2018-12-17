---
layout: post
title: "Mathematics Reviews Linear Analysis"
description: "数学复习 Linear Analysis"
date: 2018-12-16
tag: Math
---
[Linear Analysis Lecture Notes]:<http://www.statslab.cam.ac.uk/~rb812/teaching/la2017/notes.pdf> "Linear Analysis Lecture Nites"


> Taking notes form [Linear Analysis Lecture Notes] for further lectures  

**********

<!-- TOC -->
- [Linear Analysis](#linear-analysis)
	- [Notations](#notations)
		- [K](#k)
		- [d(,)](#d)
		- [](#)
	- [Theorems](#theorems)
		- [Hahn_Banach](#hahn-banach)
		- [](#)
		- [](#)
	- [Definitions](#definitions)
		- [Normed Vector Space](#normed-vector-space)
		- [Vector Space Operation](#vector-space-operation)
		- [Topological Vector Space](#topological-vector-space)
		- [Extend](#extend)
		- [Sublinear](#sublinear)
<!-- /TOC -->


# Linear Analysis  

## Notations  

### K  

* $ \mathbb{K} $ : real or complex  

### d(v,w)  

* A matric is defined on V by $ d(v,w) = \lVert v - w \rVert $  



## Theorems  

### Hahn_Banach  

* Let V be a real vector space, a subspace $ W \subset V , p : V \to \mathbb{R} \mathrm{sublinear}, g: W \to \mathbb{R} $ linear s.t.  
$$ g(v) \leq p(v) \forall v \in W $$  
Then there is $ f : V \to \mathbb{R} $ linear s.t. $ f\lvert_w = g $ and  
$$ f(v) \leq p(v) \forall v \in V $$  


## Definitions  

### Normed Vector Space  

* __Normed Vector Space__ is a vector space V with a norm $ \lVert \cdot \rVert \ : \ V \to \mathbb{R}, \ v \mapsto \lVert v \rVert $ satisfying:  
	1. $ \lVert v \rVert \geqslant \ \mathrm{for all} \ v \in V \ \mathrm{and} \ \lVert v \rVert = 0 \ \mathrm{iff} \ v = 0 $ (pos. def)  
	2. $ \lVert \lambda v \rVert = \lvert \lambda \rvert \lVert v \rVert $ for every $ \lambda \in \mathbb{k} $ and $ v \in V $ (pos. homogeneity)  
	3. $ \lVert v \ + \ w \rVert \ \leqslant \ \lVert v \rVert + \lVert w \rVert $ for every $ v, w \in V $ (triangle ineq.)  

### Vector Space Operation  

* __Vector Space Operations__ are continuous maps  
	* $ \mathbb{K} \times V \to V , (\lambda , v) \mapsto \lambda v $ (scalar multi.)  
	* $ V \times V \to V , (v , w) \mapsto v + w $ (addition)  

### Topological Vector Space  

* __Topological Vector Space__ is a vector space together with a topology which makes the vector space operations continuous and points are closed  

### Extend  

* Given vector spaces $ W \subset V $ , linear maps $ g : W \to \mathbb{K} , f : V \to \mathbb{K} $ , we say that f __extends__ g if $ f \lvert_{w} = g $  

### Sublinear  

* a map $ p : V \to \mathbb{R} $ is __sublinear__ if  
	1. $ p( \alpha v ) \ = \ \alpha \ p(v) \forall v \ in V , \ \alpha \geq 0 $  
	2. $ p(v+w) \ \leq \ p(v) + p(v) \ \forall v,\ w \in V $  


