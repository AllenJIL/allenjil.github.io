---
layout: post
title: "Topics in Convex Optimisation"
description: "剑桥数学笔记 (2019)"
date: 2019-05-30
tag: Math
---
[Lecture Notes]:<http://www.damtp.cam.ac.uk/user/mt748/Notes.pdf> "Lecture Notes"


> This note is taken from the lecture notes in the Part III course of University of Cambridge in 2019   
> Source of the notes:  
	Wikipedia  
	[Lecture Notes]  



**********

<!-- MarkdownTOC -->

- [Common Formul](#common-formul)
    - [Quick Finding](#quick-finding)
- [Notations](#notations)
- [Background on Measure Theory](#background-on-measure-theory)
    - [sigma-algebra properties](#sigma-algebra-properties)
    - [measure properties](#measure-properties)
    - [Borel sigma-algebra](#borel-sigma-algebra)
- [Formulation](#formulation)
- [Special Cases](#special-cases)
- [Kantorovich Duality](#kantorovich-duality)
- [Semi-Discrete Optimal Transport](#semi-discrete-optimal-transport)
- [Existence and Characterisation of Transport Maps](#existence-and-characterisation-of-transport-maps)

<!-- /MarkdownTOC -->


************************

<a id="common-formul"></a>
## Common Formul  

<a id="quick-finding"></a>
### Quick Finding  

************************

<a id="notations"></a>
## Notations  

* $ C^0_b(Z) $ is the space of all continuous and bounded functions on $ Z $  
* A sequence of probability measures $ \pi_n \in \mathcal{P}(Z) $ __converges weak*__ to $ \pi $ that $ \pi_n \to^* \pi $  
    - if for any $ f \in C^0_b(Z) $ we ave $ \int_Z f d \pi_n \to \int_Z f d \pi $  
* A __Polish space__ is a separable completely metrizable topological space  
    - i.e. a complete metric space with a countable dense subset  
* $ \mathcal{P} (Z) $ is the set of pobability measures on Z  
    - i.e. the subset of $ \mathcal{M}_+ (Z) $ with unit mass  
* $ \mathcal{M}_+ (Z) $ is the set of positive Borel measures on Z  
* 

************************

<a id="background-on-measure-theory"></a>
## Background on Measure Theory   

<a id="sigma-algebra-properties"></a>
### sigma-algebra properties  

* A σ-algebra, Σ, on a space $ X $ is a collection of subsets of $ X $ with the following properties:  
    1. $ X \in \Sigma $;  
    2. (closure under complements) if $ A \in \Sigma $ then $ A^c = X \setminus A \in \Sigma $ ;  
    3. (closure under countable unions) if $ \{ A_i \}^\infty_{i=1} \subset \Sigma $ then $ \cup^\infty_{i=1} A_i \in \Sigma $.  

<a id="measure-properties"></a>
### measure properties  

* A measure $ \mu $ is a function from $ \Sigma $ to $ \mathbb{R} \cup \{ + \infty \} $ satisfying the following properties:  
    1. (non-negativity) for all $ A \in \Sigma $ , $ \mu (A) ≥ 0 $ ;  
    2. (null-empty set) $ \mu (\varnothing) = 0 $ ;  
    3. (countable additivity) for any $ \{ A_i \}^\infty_{i=1} $ are pairwise disjoint, $ \mu (\cup^\infty_{i=1} A_i) = \sum^\infty_{i=1} \mu (A_i) $.  
    A measure $ \mu $ is a probability measure $ \mathcal{P}(X) $ if $ \mu(X) = 1 $.  

<a id="borel-sigma-algebra"></a>
### Borel sigma-algebra  

* The __Borel σ-algebra__ on a topological space is the smallest σ-algebra that contains all the open sets in X  

* The __Borel measure__ is any measure $ \mu : \mathcal{B}(X) \to \[0, + \infty \] $  

<a id="formulation"></a>
## Formulation  



<a id="special-cases"></a>
## Special Cases  


<a id="kantorovich-duality"></a>
## Kantorovich Duality  


<a id="semi-discrete-optimal-transport"></a>
## Semi-Discrete Optimal Transport  


<a id="existence-and-characterisation-of-transport-maps"></a>
## Existence and Characterisation of Transport Maps  



**********************



