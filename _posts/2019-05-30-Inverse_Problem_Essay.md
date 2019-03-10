---
layout: post
title: "Inverse Problem Essay"
description: "剑桥数学笔记 (2019)"
date: 2019-05-30
tag: Math
---

> This is the note which I extract from the sources to write my essay  


**********

<!-- MarkdownTOC -->

- [Essay](#essay)
    - [Krylov Subspace Methods for the Regularisation of Inverse Problems](#krylov-subspace-methods-for-the-regularisation-of-inverse-problems)
    - [Instruction](#instruction)
    - [Idea](#idea)
- [Abbreviation](#abbreviation)
- [Introduction to Krylov subspace methods](#introduction-to-krylov-subspace-methods)
- [Foundations of image science](#foundations-of-image-science)
    - [Classification by](#classification-by)
    - [Notation \(FOIS\)](#notation-fois)
- [Fundamentals of Radar Imaging](#fundamentals-of-radar-imaging)
    - [Ambiguity Function](#ambiguity-function)
- [Bibliography](#bibliography)
    - [Image Reconstruction](#image-reconstruction)
    - [Krylov Subspace Methods](#krylov-subspace-methods)
    - [Inverse Problems in Imaging](#inverse-problems-in-imaging)
    - [Bayesian Inverse Problems](#bayesian-inverse-problems)

<!-- /MarkdownTOC -->

## Essay  

### Krylov Subspace Methods for the Regularisation of Inverse Problems  

* Instructor: Dr O. Rath Spivack

### Instruction  

Many inverse problems in mathematical physics can be formally expressed as  
$$ Ax = y ,$$  
where A is an operator from a normed vector space X into a normed vector space $ Y , y \in Y $ is given data, often measured data, and $ x \in X $ is the unknown. Usually such problems are ill-posed, and various methods are used to ensure existence and uniqueness, as well as stability of the solution, which is referred to as ‘regularisation’.  
Regularisation can in some cases be achieved by projection onto ﬁnite-dimensional subspaces $ A_n \subset X $. Krylov subspace methods are iterative methods in which the solution is sought by successive approximations $ x_n \in K_n $, where $ K_n $ is the Krylov subspace $ span \{ d, Bd, ··· B_{n−1}d\} $, with B and d dependent on A and y. The Conjugate Gradient method and its variants are examples of Krylov subspace methods, and other have also been used, sometimes together with Tikhonov regularisation.  
This essay should explore the regularising properties of Krylov subspace methods, focusing on some particular issues according to personal interests and background. This could also be, for example, applications of Krylov methods to practical inverse problems.  
A few example references are given below, and more will be provided depending on the choice of focus.

### Idea  

* treating the method discussed as the first iteration of a krylov method and construct subsequent iterations towards least-square inversion.  
* In stead pf BiSAR geometry, also can consider distributed static transmitters and receivers as well  


> Regularization by projection with a posteriori discretization level choice for linear and nonlinear ill-posed problems  
>   * numerical implementation of regularization  
>   * finite-dimensional system of linear or nonlinear equations  
>   * priori and posterior discretization  

> On Krylov projection methods and Tikhonov regularization  
>   * framework of large-scale linear discrete ill-posed problems  
>   * tikhonov regularized problem  
>   * restoration  

> On Lanczos Based Methods for the Regularization of Discrete Ill-Posed Problems Hanke  
>   * hybrid methods for the solution of linear ill-posed problems  
>   * based on the Lanczos process and TSVD regularization  
>   * truncated SVD to stabilize the iteration  
>   * least-square projection and dual least-square method  
>   * behavior of hybrid metbods  




************************

## Abbreviation  

* __MWF__ - multistage Wiener filters  
* __AVF__ - auxiliary-vector filtering  
* __AMF__ - adaptive matched filter  
* __GLRT__ - generalized likelihood ratio test  
* __PDs__ - probabilities of detection  
* __CFAR__ - constant false alarm rate  
* __GMRES__ - generalized minimal residual method  
* __SOR__ - successive over relaxation  
* __SSOR__ - symmetric version of SOR  
* __MV__ - matrix-vector product  
* __GFBP__ - generalized filtered-back-projection  
* __BiSAR__ - bi-static synthetic aperture radar  
* __SVD__ - singular-value decomposition  

## Introduction to Krylov subspace methods  

* Large sparse linear systems of equations or large sparse matrix eigenvalue problems appear in most applications of scientific computing.

* Sparsity - most elements of the matrix involved are zero  




## Foundations of image science  

### Classification by  

* kind of radiation or field  
    1. Electromagnetic wave  
    2. Other waves  
    3. Particles  
    4. Quasi-static fields 准静态场  

* property being imaged  
    1. Optical reflectance 光学反射率  
    2. Microwave reflectance  
    3. Acoustic reflectance  
    4. Source strength  
    5. Concentration  
    6. Wave amplitude  
    7. Attenuation 衰减  
    8. Index of fraction  
    9. Scattering properties 散射属性  
    10. Field strength  
    11. Electric, magnetic properties  
    12. Surface height  

* imaging mechanism  
    1. Refraction 折射  
    2. Reflection 反射  
    3. Diffraction 衍射  
    4. Interference 干扰  
    5. Scattering 散射  
    6. Modulation 调幅  
    7. Shadow casting 投影法  

* Direct imaging: the method where the initial data set is a recognizable image  
* Indirect imaging: the method which a data-processing or reconstruction step is required to obtain the image  
* e.g.  
    - Direct-serial acquisition system (one small region of the object is interrogated at a time)  
        + scanning microdensitometer  
        + medical gamma-ray scanner  
        + confocal scanning microscope  
        + scanning-tip microscopes  
        + image dissector  
    - Direct-parallel acquisition system (detector arrays or continuous detectors are used to capture many picture elements or pixels in the object simultaneously)  
        + human eye  
        + photographic camera  
        + electronic camera  
        + optical microscope with CCD  
        + Scintillation camera  
    - Hybrid serial/parallel systems are also possible  
    - Indirect  
        + x-ray CT  
        + SPECT and PET  
        + MRI  
        + holography  
        + synthetic-aperture radar  

* Passive imaging system: the measurements are made without interacting with a source  
* Active imaging system: supplies the radiation being imaged  

* Both objects and images can be represented as either continuous functions in some number of dimensions or as sets of discrete numbers  
    - a discrete object model consisting of N pixels can be treated as a vector in a N-dimensional Euclidean space  
    - a continuous object is a vector in an infinite-dimensional Hilbert space  

* mapping operator: $ \mathcal{H} : g = \mathcal{H} f $  
    - object and image are both continuous (or discrete) functions, then $ \mathcal{H} $ is referred to a continuous-to-continuous CC (or discrete-to-discrete DD) operator  
    - If $ \mathcal{H} $ is linear, then the relation between object and image is an integral (or matrix-vector multiplication)  

### Notation (FOIS)  

* object space: $ \mathbb{U} $  
* object vector: $ f $  
* data space: $ \mathbb${V} $ (image space when direct)  
* mapping operator: $ \mathcal{H} : g = \mathcal{H} f $  
* 

************************

## Fundamentals of Radar Imaging  

### Ambiguity Function  
    - $ \mathcal{X}(\tau , f) = \int_{-\inft}^{\inft} s(t)s*(t - \tau) e^{i2\pi ft} dt $  




************************


## Bibliography  


### Image Reconstruction  

1. F. Natterer and F. Wuebbeling. Mathematical Methods in Image Reconstruction. Mathematical Modeling and Computation. Society for Industrial and Applied Mathematics, 2001.  
2. N. Bleistein, J.K. Cohen, and J.W.J. Stockwell. Mathematics of Multidimensional Seismic Imaging, Migration, and Inversion. Interdisciplinary Applied Mathematics. Springer New York, 2013.  
3. M. Cheney and B. Borden. Fundamentals of Radar Imaging. CBMS-NSF Regional Conference Series in Applied Mathematics. Society for Industrial and Applied Mathematics, 2009.  
4. H.H. Barrett and K.J. Myers. Foundations of image science. Wiley series in pure and applied optics. Wiley-Interscience, 2004.  
5. H.P. Langtangen. A Primer on Scientiﬁc Programming with Python. Texts in Computational Science and Engineering. Springer Berlin Heidelberg, 2009.  

### Krylov Subspace Methods  

6. B. Kaltenbacher. Regularization by projection with a posteriori discretization level choice for linear and nonlinear ill-posed problems. Inverse Problems, 16(5): 1523-1539, 2000.  
7. M. Hanke, The Minimal Error Conjugate Gradient method is a regularization method, Proc. of the American Math Soc (1995) 123, 3487  
8. M. Hanke On Lanczos Based Methods for the Regularization of Discrete Ill-Posed Problems Hanke, M. BIT Numerical Mathematics (2001) 41, pp 1008-1018  
9. S. Gazzola, P. Novati and M. R. Russo, On Krylov projection methods and Tikhonov regularization, Electronic Transactions on Numerical Analysis (2015) 44, p. 83-123  


### Inverse Problems in Imaging  

10. H. W. Engl, M. Hanke and A. Neubauer. Regularization of Inverse Problems. Vol. 375, Springer Science & Business Media, 1996, ISBN: 9780792341574  
11. O. Scherzer, M. Grasmair, H. Grossauer, M. Haltmeier and F. Lenzen. Variational Methods in Imaging. Applied Mathematical Sciences, Springer New York, 2008, ISBN: 9780387309316  
12. A. Chambolle, T. Pock, An introduction to continuous optimization for imaging, Acta Numerica, 25, 161-319 (2016)  


### Bayesian Inverse Problems  

13. M. Dashti and A.M. Stuart, The Bayesian approach to inverse problems, Handbook of Uncertainty Quantiﬁcation. Springer, 2017  
14. A.M. Stuart, Inverse problems: a Bayesian perspective. Acta Numerica, 2010  
15. T.J. Sullivan, Introduction to Uncertainty Quantiﬁcation. Springer, 2015


