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
		- [d(,)](#matric)
		- [L(,), B(,)](#space)
	- [Theorems](#theorems)
		- [Hahn-Banach](#hahn-banach)
		- [Finite-dimensional](#finit-dimentional)
		- [](#)
	- [Definitions](#definitions)
		- [Normed Vector Space](#normed-vector-space)
		- [Vector Space Operation](#vector-space-operation)
		- [Topological Vector Space](#topological-vector-space)
		- [Bounded](#bounded)
		- [Banach Space](#banach-space)
		- [Linear Map](#linear-map)
		- [Operator Norm](#operator-norm)
		- [Dual Space /reflexive](#dual-space)
		- [Adjoint map](#adjoint-map)
		- [Finite-dimensional v.s.](#f.d)
		- [Partially Ordered Set (poset)](#poset)
		- [Totally Ordered (Chain)](#totally-ordered)
		- [Extend](#extend)
		- [Sublinear](#sublinear)
		- [](#)
<!-- /TOC -->


# Linear Analysis  

## Notations  

### K  

* $ \mathbb{K} $ : real or complex  

### Matric  

* A matric is defined on V by $ d(v,w) = \lVert v - w \rVert $  

### Space

* $ \mathfrak{L} (V, W) $ the space of linear maps $ V \to W $  
* $ \mathfrak{B} (V, W) $ the space of __bounded__ linear maps $ V \to W $  


## Theorems  

### Hahn Banach  

* Let V be a real vector space, a subspace $ W \subset V , p : V \to \mathbb{R} \mathrm{sublinear}, g: W \to \mathbb{R} $ linear s.t.  
$$ g(v) \leq p(v) \; \forall v \in W $$  
Then there is $ f : V \to \mathbb{R} $ linear s.t. $ f\lvert_w = g $ and  
$$ f(v) \leq p(v) \; \forall v \in V $$  

### Finit Dimentional  

* Let V be a normed v.s. s.t. $ \bar{B_1(0)} is compact. Then V is __finite-dimentional__  

## Definitions  

### Normed Vector Space  

* __Normed Vector Space__ is a vector space (v.s.) V with a norm $ \lVert \cdot \rVert \ : \ V \to \mathbb{R}, \ v \mapsto \lVert v \rVert $ satisfying:  
	1. $ \lVert v \rVert \geqslant \ \mathrm{for all} \ v \in V \ \mathrm{and} \ \lVert v \rVert = 0 \ \mathrm{iff} \ v = 0 $ (pos. def)  
	2. $ \lVert \lambda v \rVert = \lvert \lambda \rvert \lVert v \rVert $ for every $ \lambda \in \mathbb{k} $ and $ v \in V $ (pos. homogeneity)  
	3. $ \lVert v \ + \ w \rVert \ \leqslant \ \lVert v \rVert + \lVert w \rVert $ for every $ v, w \in V $ (triangle ineq.)  

### Vector Space Operation  

* __Vector Space Operations__ are continuous maps  
	* $ \mathbb{K} \times V \to V , (\lambda , v) \mapsto \lambda v $ (scalar multi.)  
	* $ V \times V \to V , (v , w) \mapsto v + w $ (addition)  

### Topological Vector Space  

* __Topological Vector Space__ (top.) is a vector space together with a topology which makes the vector space operations continuous and points are closed  

### Bounded  

* Let V be a topological vector space and $ B \subset V $  
	We say that B is __bounded__ if  
	for every open neighbourhood u of 0, there exists $ t > 0 $  
	s.t. $ sU \supset B \; \forall \; s \geq t $  

### Banach Space  

* a __Banach Space__ is a normed vector space that is complete as a metric space  
	i.e. every Cauchy sequence converges  
* Let V be a normed space and W a Banach space. Then $ \mathfrak{B} (V, W) $ is a __Banach space__  
* Let V be a normed v.s. then $ V^{\star} $ is a __Banach space__  

### Linear Map  

* In any topological vector spaces V, W ;  
	a __linear map__ $ T: V \to W $ is countinuous iff it is countinuous at 0  

* T is __bounded__ if $ T(B) $ is bounded for any bounded $ B \subset V $

Fact:  
* If V,W are __normed v.s.__, a linear map $ T : V \to W $ is bounded iff  
	there is a $ \lambda > 0 $ s.t. $ T (B_1(0)) \subseteq B_\lambda (0) $  
	i.e. $ \lVert TV \rVert \leq \lambda \; \forall \; v \in V $ with $ \lVert v \rVert \leq 1 $  

### Operator Norm  

* Let V,W be __normed v.s.__  
	The __operator norm__ of a linear map $ T : V \to W $ is  
	$$ \displaystyle \lVert T \rVert = \sup_{\lVert v \rVert = 1} \lVert Tv \rVert = \sup_{\lVert v \rVert \leq 1} \lVert Tv \rVert = \sup_{\lVert v \rVert < 1} \lVert Tv \rVert $$  
* Denote by $ \mathfrak{L} (V, W) $ the space of linear maps $ V \to W $  
	by $ \mathfrak{B} (V, W) $ the space of __bounded__ linear maps $ V \to W $  

Fact:  
* The operator norm $ \lVert \dot \rVert $ is a norm on $ \mathfrak{B} (V, W) $  

Prop:  
* Let V,W be __normed v.s.__  
	Then a linear map $ T : V \to W $ is __bounded__ iff it is countinous  

### Dual Space  

* Let V be a top. v.s.  
	The $ V^{\star} $ (top.) __dual space__ of V is the space of all continuous linear maps $ V \to \mathbb{K} $  
	* We call $ \mathfrak{L} (V, \mathbb{k}) $ the __algebraic dual__ of V  
* Let V be a normed v.s.  
	The __double dual__ of V is the dual space of $ V^{\star} $  
	i.e. $ V^{\star \star} = (V^{\star})^{\star} $  

Fact:
* The map $ \phi : V \to V^{\star \star} $ , $ v \mapsto \tilde{v} $ where $ \tilde{v} (f) = f(v) $ is bounded and linear  
* A Banach space is __reflexive__ if $ \phi $ is bijection  

### Adjoint Map  

* Let V,W be normed v.s. and $ T \in \mathfrak{B}(V, W) $  
	Then the __adjoint map__ $ T^{\star} : W^{\star} \to V^{\star} $ is defined by  
	$ [T^{\star} f] v = f (T v) \; \mathrm{for} \; f \in W^{\star}, v \in V $  

Fact:
* $ T^\star f $ is indeed in $ V^\star = \mathfrak{B} (V, \mathbb{K}) $ and $ \lVert T^\star \rVert \leq \lVert T \rVert $   

### f.d  

* Any __finite-dimensional vector space__ can be identified with $ \mathbb{K}^n $ by choosing a basis. there __n__ is the dimension  
* Two norms $ \lVert \dot \rVert $ and $ \lvert \lVert \dot \rVert \rvert $ on a vector space V are __equivalent__ iff  
	there exists a constant $ C > 0 $ s.t.  
	$ C^{-1} \lvert \lVert v \rVert \rvert \leq \lVert v \rVert \leq C \lvert \lVert v \rVert \rvert $ for all $ v \in V $  
prop:  
* All norms on a f.d.v.s. are ___equivalent__  
* In any f.d.v.s., the closed unit ball is __compact__  
* Every f.d. normed v.s. is a __Banach space__  
* Let V be a normed v.s. and $ W \subset V $ be a f.d. subspace, then W is __closed__  

### Poset  

* A __partially ordered set (poset)__ is a set P with a binary relation $ \leq $ s.t. for all $ x, y \in P $ either $ x \leq y $ or $ x \nleq y $ , and  
	$ x \leq x $ (reflexive)  
	$ x \leq y , y \leq z \; \Rightarrow \; x \leq z $ (transitive)  
	$ x \leq y , y \leq x \; \Rightarrow \; x = y $ (antisymmetric)  

### Totally Ordered  

* Let P be a poset. a subset $ T \subset P $ is called __totally ordered (or a chain)__ if  
	$ x \nleq y \Rightarrow y \leq x $  
i.e.  
	either $ x \leq y or y \leq x $  

### Extend  

* Given vector spaces $ W \subset V $ , linear maps $ g : W \to \mathbb{K} , f : V \to \mathbb{K} $ , we say that f __extends__ g if $ f \lvert_{w} = g $  

### Sublinear  

* a map $ p : V \to \mathbb{R} $ is __sublinear__ if  
	1. $ p( \alpha v ) \ = \ \alpha \ p(v) \; \forall v \in V , \ \alpha \geq 0 $  
	2. $ p(v+w) \ \leq \ p(v) + p(v) \; \forall v,\ w \in V $  


