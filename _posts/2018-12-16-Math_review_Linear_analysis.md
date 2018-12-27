---
layout: post
title: "Mathematics Reviews (Analysis)"
description: "数学复习 (Analysis)"
date: 2018-12-16
tag: Math
---
[Linear Analysis Lecture Notes]:<http://www.statslab.cam.ac.uk/~rb812/teaching/la2017/notes.pdf> "Linear Analysis Lecture Notes"
[Linear Analysis Part II]:<https://www.dpmms.cam.ac.uk/~md384/snmeiwseis-ga.pdf> "Linear Analysis Part II"


> This review is for myself further learning to find notations def. & thm. easier  
> Some notes from [Linear Analysis Lecture Notes] and [Linear Analysis Part II]  
> Some notes from wikipedia  
> f.d.v.s $ \to $ finite dimentional vector space  
> top. $ \to $ topological  
> s.t. $ \to $ such that  


**********

<!-- TOC -->
- [Linear Analysis](#linear-analysis)
	- [Notations](#notations)
		- [K](#k)
		- [d(,)](#matric)
		- [L(,), B(,)](#space)
		- [supp(f)](#set-theoretic-support)
		- [Inner product](#inner-product)
		- [Jections](#jections)
		- [](#)
	- [Theorems and Definitions](#theorems-and-definitions)
		- [Morphism](#morphism)
		- [Normed Vector Space](#normed-vector-space)
		- [Vector Space Operation](#vector-space-operation)
		- [Topological Vector Space](#topological-vector-space)
		- [Bounded](#bounded)
		- [Banach Space](#banach-space)
		- [Linear Map](#linear-map)
		- [Operator Norm](#operator-norm)
		- [Dual Space](#dual-space)
		- [Adjoint map](#adjoint-map)
		- [Finite-dimensional v.s.](#finite-dimentional)
		- [Sublinear](#sublinear)
		- [Partially Ordered Set (poset)](#poset)
		- [Totally Ordered (Chain)](#totally-ordered)
		- [Linearly Independent](#linearly-independent)
		- [Extend](#extend)
		- [Hahn-Banach](#hahn-banach)
		- [Support](#support)
		- [Dense](#dense)
		- [Baire Category Theorem](#baire-category-theorem)
		- [Meagre](#meagre)
		- [Uniform Boundedness](#uniform-boundedness)
		- [Open Mapping Theorem](#open-mapping-theorem)
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

### Set theoretic Support  

* The __set-theoretic support__ of $ f ： X \to \mathbb{R} $ where X arbitrary set, written __supp(f)__, is the set of points in X where f is non-zero  
	$ supp(f) = \{ x \in X \mid f(x) \neq 0 \} $  
	* If $ f(x) = 0 $ for all but a finite number of points x in X, then f is said to have __finite support__  

### Inner product  

* __$ f_v(w) $__ $ = < w, v > $  

### Jections  

* Injections $ \hookrightarrow $  
* Surjections $ \twoheadrightarrow $  
* Bijections $ \xrightarrow{\sim} $  
  <img src="/images/Mathreviews/jections.PNG">  

## Theorems and Definitions  

### Morphism  

* A ___category___ $ \mathsf{C} $ consists of  
  * a class $ Obj(\mathsf{C}) $ of objects of the category  
  * for every two objects $ A $, $ B $ of $ \mathsf{C} $, a set $ Hom_\mathsf{C} (A, B) $ of morphisms, with the properties below:  
    1. For every object $ A $ of $ \mathsf{C} $, $ \exists \one_A $ $ \in Hom_\mathsf{C} (A, A) $ the identity of $ A $  
    2. One can compose morphism:  
      Two morphisms $ f \in Hom_\mathsf{C}(A, B) $ and $ g \in Hom_\mathsf{C}(B, C) $ determine a morphism $ gf \in Hom_\mathsf{C}(A, C) $  
      There is a function (of sets)  
      $ Hom_\mathsf{C}(A, B) \times Hom_\mathsf{C}(B, C) \to Hom_\mathsf{C}(A, C) $  
      and the image of the pair $ (f, g) $ is denoted $ g f $  
    3. Associative: $ h \in Hom_\mathsf{C}(C, D) $  
      $ (hg)f = h(gf) $  
    4. Identity morphisms are identities  
      $ f \one_A = f, \; \; \one_B f = f $  
    5. the sets $ Hom_\mathsf{C} (A, B), \; Hom_\mathsf{C} (C, D) $ be disjoint unless $ A = C, B = D $  


* __Homomorphism__  
  A homomorphism is a map between two algebraic structures of the same type, that preserves the operations of the structures  
  Formally, a map $ {\displaystyle f:A\to B} $ preserves an operation $ \mu $ of arity $ k $, defined on both $ A $ and $ B $ if  
  $\displaystyle f(\mu_{A}(a_{1},\ldots ,a_{k}))=\mu_{B}(f(a_{1}),\ldots ,f(a_{k})), $  
  for all elements $ a_1, ..., a_k \in A $  

* __Endomorphsim__  
  A morphism od an object $ A $ of a category $ \mathsf{C} $ to itself  
  $ Hom_\mathsf{C}(A, A) $ is denoted $ End_\mathsf{C} (A) $  

* __Monomorphism (or Monic)__  
  * A function $ f : A \to B $ is a __monomorphism (or monic)__ if holds:  
  for all sets $ Z $ and all functions $ \alpha^\prime, \alpha^{\prime\prime} : Z \to A $  
  (for all objects $ Z $ of $ \mathsf{C} $ and all morphisms $ \alpha^\prime, \alpha^{\prime\prime} \in Hom_\mathsf{C}(Z, A) $ )  
  $ f \circ \alpha^\prime = f \circ \alpha^{\prime\prime} \to \alpha^\prime = \alpha^{\prime\prime} $  
  * A function is injective iff it is a monomorphism  

* __Epimorphism__  
  * for all objects $ Z $ of $ \mathsf{C} $ and all morphisms $ \beta^\prime, \beta^{\prime\prime} \in Hom_\mathsf{C}(B, Z) $   
  $ \beta^\prime \circ f = \beta^{\prime\prime} \circ f \to \beta^\prime = \beta^{\prime\prime} $  
  * A function is surjective iff it is epimorphism  

* __Isomorphism__  
  * A morphism $ f \in Hom_\mathsf{C} (A, B) $ is __isomorphism__ if it has a (two sided) __inverse__ under composition: that is  
  if $ \exists g \in Hom_\mathsf{C}(B, A) $ s.t. $ gf = \one_A, fg = \one_B $  
  * The inverse of an __isomorphism__ is unique  
  * ___prop___.  
    * Each identity $ \one_A $ is an isomorphism and is its own inverse  
    * If $ f $ is an isomorphism, then $ f^{-1} $ is also and $ (f^{-1})^{-1} = f $  
    If $ f, g $ are isomorphisms, the $ gf $ is also and $ (gf)^{-1} = f^{-1}g^{-1} $  

* __Endomorphism__  
  An __endomorphism__ is a homomorphism whose __domain = codomain__, or  
  A morphism whose source is equal to the target  
  <img src="/images/Mathreviews/codomain.PNG">  

* __Automorphism__  
  An __automorphism__ is an endomorphism also an isomorphism  

### Normed Vector Space  

* __Normed Vector Space__ is a vector space (v.s.) V with a norm $ \lVert \cdot \rVert \ : \ V \to \mathbb{R}, \ v \mapsto \lVert v \rVert $ satisfying:  
	1. $ \lVert v \rVert \geqslant \ \forall \ v \in V \ \mathrm{and} \ \lVert v \rVert = 0 \ \mathrm{iff} \ v = 0 $ (pos. def)  
	2. $ \lVert \lambda v \rVert = \lvert \lambda \rvert \lVert v \rVert $ for every $ \lambda \in \mathbb{k} $ and $ v \in V $ (pos. homogeneity)  
	3. $ \lVert v \ + \ w \rVert \ \leqslant \ \lVert v \rVert + \lVert w \rVert $ for every $ v, w \in V $ (triangle ineq.)  
* If $ V $ is a __separable normed__ space, then $ V $ embeds isometrically into $ l_\infty $   

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
* __Vector-valued Liouville's Theorem__  
  Let X be a comple Banach Space, and $ f: \mathbb{C} \to X $ a bounded analytic function  
  then $ f $ is __constant__  

### Linear Map  

* In any topological vector spaces V, W ;  
	a __linear map__ $ T: V \to W $ is countinuous iff it is countinuous at 0  

* T is __bounded__ if $ T(B) $ is bounded for any bounded $ B \subset V $

___Fact___.  

* If V,W are __normed v.s.__, a linear map $ T : V \to W $ is bounded iff  
	there is a $ \lambda > 0 $ s.t. $ T (B_1(0)) \subseteq B_\lambda (0) $  
	i.e. $ \lVert TV \rVert \leq \lambda \; \forall \; v \in V $ with $ \lVert v \rVert \leq 1 $  

### Operator Norm  

* Let V,W be __normed v.s.__  
	The __operator norm__ of a linear map $ T : V \to W $ is  
	$$ \displaystyle \lVert T \rVert = \sup_{\lVert v \rVert = 1} \lVert Tv \rVert = \sup_{\lVert v \rVert \leq 1} \lVert Tv \rVert = \sup_{\lVert v \rVert < 1} \lVert Tv \rVert $$  
* Denote by $ \mathfrak{L} (V, W) $ the space of linear maps $ V \to W $  
	by $ \mathfrak{B} (V, W) $ the space of __bounded__ linear maps $ V \to W $  

___Fact___.  

* The operator norm $ \lVert \cdot \rVert $ is a norm on $ \mathfrak{B} (V, W) $  

___Prop___.  

* Let V,W be __normed v.s.__  
	Then a linear map $ T : V \to W $ is __bounded__ iff it is countinous  

### Dual Space  

* Let V be a top. v.s.  
	The $ V^{\star} $ (top.) __dual space__ of V is the space of all continuous linear maps $ V \to \mathbb{K} $  
	* We call $ \mathfrak{L} (V, \mathbb{k}) $ the __algebraic dual__ of V  
* Let V be a normed v.s.  
	The __double dual__ of V is the dual space of $ V^{\star} $  
	i.e. $ V^{\star \star} = (V^{\star})^{\star} $  
  $ V^{\star\star} $ is also called __bidual__ or the __second dual__ of $ V $  
  For each $ x \in X $, define $ \hat{x} : X^\star \to $ scalars by $ \hat{x}(f) = f(x) $  
  then $ \hat{x} $ is linear, and $ \lvert \hat{x} (f) \rvert = \lvert f(x) \rvert \leq \lVert f \rVert \cdot \lVert x \rVert $  
  so $ \hat{x} \in X^{\star\star} $ with $ \lVert \hat{x} \rVert \leq \Vert f \rVert $  

* If X be a normed space  
	The dual space $ X^\star $ is the space of all __bounded linear functionals__ on $ X $  
	This is a normed space with norm $ \lVert f \rVert = \sup\{\lvert f(x) \rvert : x \in B_X \} $ , where $ B_X = \{ x \in X : \lVert x \rVert \leq 1\} $  
  $ X^\star $ is always complete  

___Fact___.  

* The map $ \phi : V \to V^{\star \star} $ , $ v \mapsto \tilde{v} $ where $ \tilde{v} (f) = f(v) $ is bounded and linear  
* A Banach space is __reflexive__ if $ \phi $ is bijection  

* __Dual operators__  

  Define the __dual operator__ of $ T $ by $ T^\star : X^\star \to Y^\star , T^\star (g) = g \circ T $ for $ g \in Y^\star $  
  This is well-defined as $ g \circ T $ is a composition of bounded linear operators  
  Furthermore, $ T^\star $ is linear and bounded, since  
  $$ 
  \begin{align*}
  \lVert T^\star \rVert & = \sup_{g \in B_{Y^\star}} \lVert T^\star g \rVert = \sup_{g \in B_{Y^\star}} \sup_{x \in B_{X}} \lvert \langle x, T^\star y \rangle \rvert \\
  & =\sup_{x \in B_{X}} \sup_{g \in B_{Y^\star}} \lvert \langle T^\star y \rangle \rvert = \sup_{x \in B_X}  \lVert T x \rVert =  \lVert T \rVert 
  \end{align*}
  $$  


### Adjoint Map  

* Let V,W be normed v.s. and $ T \in \mathfrak{B}(V, W) $  
	Then the __adjoint map__ $ T^{\star} : W^{\star} \to V^{\star} $ is defined by  
	$ [T^{\star} f] v = f (T v) \; \mathrm{for} \; f \in W^{\star}, v \in V $  

___Fact___.  

* $ T^\star f $ is indeed in $ V^\star = \mathfrak{B} (V, \mathbb{K}) $ and $ \lVert T^\star \rVert \leq \lVert T \rVert $   

### Finite Dimentional  

* Any __finite-dimensional vector space__ can be identified with $ \mathbb{K}^n $ by choosing a basis. there __n__ is the dimension  
* Two norms $ \lVert \cdot \rVert $ and $ \lvert \lVert \cdot \rVert \rvert $ on a vector space V are __equivalent__ iff  
	there exists a constant $ C > 0 $ s.t.  
	$ C^{-1} \lvert \lVert v \rVert \rvert \leq \lVert v \rVert \leq C \lvert \lVert v \rVert \rvert $ for all $ v \in V $  

___Prop___.  

* All norms on a f.d.v.s. are __equivalent__  
* In any f.d.v.s., the closed unit ball is __compact__  
* Every f.d. normed v.s. is a __Banach space__  
* Let V be a normed v.s. and $ W \subset V $ be a f.d. subspace, then W is __closed__  

___Thm___.  

* Let V be a normed v.s. s.t. $ \overline{B_1(0)} $ is compact. Then V is __finite-dimentional__  

### Sublinear  

* a map $ p : V \to \mathbb{R} $ is __sublinear__ if  
	1. $ p( \alpha v ) \ = \ \alpha \ p(v) \; \forall v \in V , \ \alpha \geq 0 $  
	2. $ p(v+w) \ \leq \ p(v) + p(v) \; \forall v,\ w \in V $  

### Poset  

* A __partially ordered set (poset)__ is a set P with a binary relation $ \leq $ s.t. for all $ x, y \in P $ either $ x \leq y $ or $ x \nleq y $ , and  
	$ x \leq x $ (reflexive)  
	$ x \leq y , y \leq z \; \Rightarrow \; x \leq z $ (transitive)  
	$ x \leq y , y \leq x \; \Rightarrow \; x = y $ (antisymmetric)  

* Let P be a poset. An element $ m \in P $ is __maximal__ if $ m \leq x \to m = x $  

### Totally Ordered  

* Let P be a poset. a subset $ T \subset P $ is called __totally ordered (or a chain)__ if  
	$ x \nleq y \Rightarrow y \leq x $  
i.e.  
	either $ x \leq y or y \leq x $  

### Linearly Independent  

* In a v.s. V, elements $ v_1, \cdots , v_k $ are __linearly independent__ if  
	$ \sum_{i = 1}^{k} \alpha_i v_i = 0 \; \to \; \alpha_1 = \alpha_2 = \cdots = 0 $  
* a set $ S \subset V $ is __linearly independent__ if any __finite__ subset is  
* A __basis__ of V is a set $ B \subset V $ that is __linearly independent__ and such that every element of V is a __finite__ linear combination of elements in B  

___Prop___.  

* Let $ V \neq \lbrace 0 \rbrace $ be a vector space and $ S \subset V $ linearly independent. Then V has a basis B s.t. $ S \subset B $  

### Extend  

* Given vector spaces $ W \subset V $ , linear maps $ g : W \to \mathbb{K} , f : V \to \mathbb{K} $ , we say that f __extends__ g if $ f \lvert_{w} = g $  

### Hahn Banach  

* Let V be a real vector space, a subspace $ W \subset V , p : V \to \mathbb{R} \; \mathrm{sublinear}, g: W \to \mathbb{R} $ linear s.t.  
$$ g(v) \leq p(v) \; \forall v \in W $$  
Then there is $ f : V \to \mathbb{R} $ linear s.t. $ f\lvert_W = g $ and  
$$ f(v) \leq p(v) \; \forall v \in V $$  

___Cor___.  

* Let $ V \in \mathbb{K} $ be a normed v.s., $ W \subset V $ a subspace  
	For any $ g \in W^\star $ there exists $ f\in V^{star} $  
	s.t. $ f\lvert_{W} = g $ and $ \lVert f \rVert \leq \lVert g \rVert $  
* Let V be a normed vector space and $ v \in V $  
	Then $ \exists f_v \in V^\star $ s.t. $ \lVert f_v \rVert = 1 $ and $ f_v (V) = \lVert v \rVert $  
	* Here $ f_v $ is called a __support functional__ for V  
* Let V be a normed v.s. and $ v \in V $ , then  
	$ v = 0 \Leftrightarrow f(v) = 0 \; \forall \; f \in V^\star $  
	In particular, $ V^\star \neq 0 $  
* Let V be a normed v.s., $ v, w \in V , \ v \neq w $ . Then  
	there exists $ f \in V^\star $ s.t. $ f(v) \neq f(w) $  

___Prop___.  

* The map $ \phi : V \to V^{\star \star } $ is an isometry  
	($ d_Y(f(x),f(y)) = d_X(x,y) $ for a map $ f: X \to Y $) that  
	$ \lVert \phi (v) \rVert = \lVert v \rVert $  
* Let V, W be a normed v.s.  
	For any $ T \in \mathfrak{B} (V, W) $ , the dual map $ T^\star \in \mathfrak{B} (W^\star, V^\star ) $ satisifies $ \lVert T^\star \rVert = \lVert T \rVert $  

### Support  

* If the domain of f is a top. space, the support of f is the smallest closed set containing all points not mapped to zero  

__Closed Support__:  

* The support of f is defined topologically as the closure of the subset of X where f is non-zero  
	i.e. $ supp(f) := \overline{\lbrace x \in X \mid f(x) \neq 0 \rbrace} $ $ = \overline{f^{-1}(\lbrace 0 \rbrace^c)} $  

__Compact Support__:  

* The closed support is a compact subset of $ X $  
* If $ X $ is the real line, or n-dimensional Euclidean space, then a function has compact support iff it has bounded support  

__Essential Support__:  

*   If X is a top. measure space with a Borel measure μ  
   the __essential support__ of a measurable function $ f : X \to \mathbb{R} $, written __ess supp(f)__, is defined to be 
   the __smallest closed__ subset $ F $ of $ X $ such that $ f = 0 $ μ-almost everywhere outside $ F $  
   Equivalently, __ess supp(f)__ is the complement of the largest open set on which f = 0 μ-almost everywhere
   $ \displaystyle \mathrm{ess supp}(f) := X \setminus \bigcup \lbrace \Omega \subset X \mid \Omega $ is open and $ f = 0 $ μ-almost everywhere in $ \Omega \rbrace $  

__Support Function__:  

* The __support function__ $ h_A : \mathbb{R}^n \to \mathbb{R} $ of a non-empty closed convex set A in $ \mathbb{R}^n $ is given by  
	$ h_A (x) = sup \lbrace x \cdot a : a \in A \rbrace , \; x \in \mathbb{R}^n $  

__Supporting Functional__:  
In convex analysis and mathematical optimization, the __supporting functional__ is a generalization of the supporting hyperplane of a set  

* Let X be a locally convex top. space and $ C \subset X $ be a convex set, then  
	the continuous linear functional $ \phi : X \to \mathbb{R} $ is a __supporting functional__ of C at the point $ x_0 $  
	if $ \phi(x) \leq \phi(x_0) $ for every $ x \in C $  
* If $ h_C : X^\star \to \mathbb{R} $ is a __support function__ of the set C, then  
	if $ h_C (x^\star) = x^\star (x_0) $ , it follows that  
	$ h_C $ defines a __supporting functional__ $ \phi : X \to \mathbb{R} $ of $ C $ at the point $ x_0 $ s.t.  
	$ \phi(x) = x^\star (x) $ for any $ x \in X $  
* If $ \phi $ is a __supporting functional__ of the convex set C at the point $ x_{0} \in C $ such that  
	$ \displaystyle \phi (x_{0}) = \sigma = \sup_{x \in C} \phi (x) > \inf_{x \in C} \phi (x) $  
	then $ H = \phi^{-1} (\sigma ) $ defines a __supporting hyperplane__ to C at $ x_{0} $  


### Dense  

* If X is a metric space, the $ Y \subset X $ is __dense__ if $ \overline{Y} = X $  
	i.e. $ Y \cap B_r (X) \neq \varnothing \; \forall \; x \in X , r > 0 $  

### Baire Category Theorem  

* Let X be a __complete__ metric space.  
	For any sequence of __open dense__ subsets $ U_j \subset X $ , $ \displaystyle\bigcap_j U_j $ is dense in $ X $  

___cor___.  

* Let $ X $ be a complete metric space. Let $ A_j \subset X $ be a sequence of __closed__ subsets s.t.   
	$ \bigcup_j A_j $ has nonempty interior, i.e. it contains some ball  
	Then at least one of the $ A_j $ has nonempty interior  

### Interior  

* The point x is an interior point of S. The point y is on the boundary of S  
	<img src="/images/Mathreviews/interior.png">  
* __Interior point__  
	If $ S $ is a subset of a Euclidean space, then $ x $ is an interior point of $ S $ if there exists an open ball centered at $ x $  which is completely contained in S
* __Interior of a set__  
  The interior of a set $ S $ is the set of all interior points of $ S $  
  it is denoted $ int(S) $, $ Int(S) $ or $ S^o $  
  and has the following properties:  
  * $ int(S) $ is an open subset of $ S $  
  * $ int(S) $ is the union of all open sets contained in $ S $  
  * $ int(S) $ is the largest open set contained in $ S $  
  * A set $ S $ is open iff $ S = int(S) $  
  *  $ int(int(S)) = int(S) $ (idempotence)  
  * If $ S $ is a subset of $ T $, then $ int(S) $ is a subset of $ int(T) $  
  * If $ A $ is an open set, then $ A $ is a subset of $ S $ iff $ A $ is a subset of $ int(S) $  

### Meagre  

* Let X be a metric space  
	1. A subset $ Y \subset X $ is __nowhere dense__ if $ int( \overline{Y} ) = \varnothing $ ,  
		( if the interior of its closure is empty )  
		i.e. , if $ Y $ is not dense in any ball  
	2. A subset $ Z \subset X $ is __meagre__ or of the __first category__ if  
		there are countably many set $ Y_j \subset X $ that are nowhere dense and $ Z = \bigcup_j Y_j $  
		( if it is a union of countably many nowhere dense subsets )  
	3. A subset $ U \subset X $ is __nonmeagre__ or of the __second category__ if 	
		it is not meagre  
		(  it contains a countable union of open and dense sets )  
	4. A subset $ R \subset X $  is __residual__ if  
		its complement is meagre  

___fact___.  

* $ Y \subset X $ is nowhere dense  
	$ \Leftrightarrow \; \overline{Y} $ is nowhere dense  
	$ \Leftrightarrow \; X \backslash \overline{Y} $ is open dense  

___Cor___.  

* Let $ X $ be a complete metric space. Then $ X $ is of second category  
* Let $ X $ be a complete metric space. Then residual sets are non-meagre and dense  
* Let $ X $ be a complete metric space and $ U \subset X $ open.  
  Then $ U = \varnothing $ or $ U $ is of the second category  

### Uniform Boundedness  

* Principle of __uniform boundedness__  
  Let X be a __complete__ metric space  
  Let $ (f_\lambda)\mid_{\lambda \in \wedge} $ be a family of __continuous__ functions $ f_\lambda : X \to \mathbb{R} $  
  If $ (f_\lambda)\mid_{\lambda \in \wedge} $ is __pointwise bounded__,  
  i.e., $ \sup_{\lambda \in \wedge} \lvert f_\lambda (x) \rvert \leq \infty $ for every $ x \in X $,  
  then there is a ball $ B_r (X_c) \subset X $ s.t.  
  $ ( f_\lambda ) $ is __uniformly bounded__ on $ B_r(X_0) $  
  i.e., $ \sup_{\lambda \in \wedge} \sup_{x \in B_r (x_0)} \lvert f_\lambda (x) \rvert \leq \infty $  

* __Banach-Steinhaus Theorem__  
  Let $ V $ be a __Banach__ Space and $ W $ a normed v.s.  
  Let $ (T_\lambda)\mid_{\lambda \in \wedge} \subset \mathfrak{B}(V,W) $ be pointwise bounded,  
  i.e., $ \sup_{\lambda \in \wedge} \lVert T_\lambda v \rVert \; \forall \; v \in V $  
  Then $ ( T_\lambda) $ is uniformly bounded  
  i.e., $ \sup_{\lambda \in \wedge} \lVert T_\lambda \rVert \leq \infty $  

### Open Mapping Theorem  

* A map between topological spaces is __open__ iff it maps open ses to open sets  

* __Open Mapping Theorem__  
  Let $ V, W $ be Banach Spaces and $ T \in \mathfrak{B} (V, W) $  
  1. if $ T $ is surjective, then $ T $ is open  
  2. if $ T $ is bijective, then $ T^{-1} \in \mathfrak{B}(W, V) $  

