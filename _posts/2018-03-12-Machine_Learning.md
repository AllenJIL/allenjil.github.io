---
layout: post
title: "Machine Learning"
description: "Coursera.org 机器学习 笔记"
date: 2018-03-12
tag: Machine_Learning
---
[Coursera.org]: <https://www.coursera.org/learn/machine-learning/home/welcome/> "Coursera"

> Coursera.org 机器学习 笔记  
> These are the notes by learning Andrew Ng's "Machine Learning" from [Coursera.org] for future review

**********


## Machine Learning  

* Grew out of work in AI  
* New capability for computers  

> __Examples__:  

> __Database mining__  
    Large datasets from growth of automation/ web  
    E.g., Web click data, medical records, biology, engineering  

> __Applications cannot program by hand__  
    E.g., Autonomous helicopter, handwriting recognition, most of Natural Language Processing (NLP), Computer Vision  

> __Self-customizing programs__  
	E.g., Amazon, Netflix product recommendations  

> __Understanding human learning__ (brain, real AI)  


### Introduction  

* __Definition__  
	* Arthur Samuel (1959). Machine Learning: Field of study that gives computers the ability to learn without being explicitly programmed  
	* Tom Mitchell (1995) Well-posed Leaning Problem: __A computer program is said to learn from experience E with respect to some task T and some performance measure P, if its performance on T, as measured by P, improves with experience E.__  


## Machine Learning Algorithms:  

### Supervised learning  

* "right answers" given  
* Regression: Predict continuous valued output  
* Classification: Discrete valued output (0 or 1 or others)  

### Unsupervised learning  

* allows us to approach problems with little or no idea what our results should look like.   
* We can derive structure from data where we do not necessarily know the effect of the variables.  
* We can derive this structure by clustering the data based on relationships among the variables in the data
* There is no feedback based on the prediction results  

* E.g., Organize computing clusters, social network analysis, market segmentation, astronomical data analysis  

### Model representation  

* __Notation__  
	* __m__ = Number of training examples  
	* x's = "input" variable / features  
	* y's = "output" variable / "target" variable  

* __Hypothesis__
	* Training set &rarr; Learning Algorithm &rarr; __Hypothesis__ (__h__)  
	* __x__ &rarr; __h__ &rarr; estimated value of __y__  
	* h: X &rarr; Y   
    * h maps x's to y's  
	* Linear regression with one variable or Univariate linear regression  
	* $ h_{\theta}(x) = \theta_{0} + \theta_{1}x $  
	* shorthand: $ h(x) $  
	* $ \theta_{i} $'s: parameters  

### Cost function

* Idea: Choose $ \theta_{0}, \theta_{1} $ so that $ h_{\theta}(x) $ is close to y for our training examples (x,y)  
	* $ \underset{ \theta_{0}, \ \theta_{1} }{ \mathrm{minimize} } $ 
	$ \dfrac{1}{2m} \displaystyle\sum_{i=1}^m ( \hat{y}^{i}- y^{i} )^2 = $ 
	$$ \dfrac{1}{2m} \displaystyle\sum _{i=1}^m (h_\theta (x^{i}) - y^{i} )^2 $$
	* $ h_{\theta}(x^{i}) = \theta_{0} + \theta_{1}x^{i} $  

* __Cost function__: $ J(\theta_0, \theta_1) = $ 
 $ \dfrac{1}{2m} \displaystyle\sum _{i=1}^m ( \hat{y}^{i}- y^{i} )^2 = $ 
 $$ \dfrac{1}{2m} \displaystyle\sum _{i=1}^m (h_\theta (x^{i}) - y^{i} )^2 $$  
	* also called __squared error cost function__ or __squared error function__    

* __Goal__: $ \displaystyle \underset{ \theta_{0}, \ \theta_{1} }{ \mathrm{minimize} } J(\theta_0, \theta_1) $  

* __contour plots__ or __contour figures__：  
<img src="/images/Machine_Learning/contour.PNG">  

### Gradient descent

* __Outline:__
	* Start with some $ \theta_{0}, \ \theta_{1} $  
	* Keep changing $ \theta_{0}, \ \theta_{1} $ to reduce $ J(\theta_{0}, \theta_{1}) $ until we hopefully end up at a minimum

* __Algorithm__
	* repeat until convergence { $ \theta_j := \theta_j - \alpha \displaystyle \frac{\partial}{\partial \theta_j} J(\theta_0, \ \theta_1) \ \ (\mathrm{for} \ j = 0 \ \mathrm{and} \ j = 1 ) $ }
	* &alpha;: learning rate: too small &rarr; slow ; too large &rarr; overshoot; proper &rarr; automatically decrease &alpha; over time  
	* __Correct simultaneous update__
		* temp0 := $ \theta_0 - \alpha \displaystyle \frac{\partial}{\partial \theta_0} J(\theta_0, \ \theta_1) \ \ (\mathrm{for} \ j = 0 \ \mathrm{and} \ j = 1 ) $
		* temp1 := $ \theta_1 - \alpha \displaystyle \frac{\partial}{\partial \theta_1} J(\theta_0, \ \theta_1) \ \ (\mathrm{for} \ j = 0 \ \mathrm{and} \ j = 1 ) $
		* $ \theta_0 := $ temp0
		* $ \theta_1 := $ temp1
	* __linear regression__: 
		* repeat until convergence: 
		* $ \theta_0 := \theta_0 - \alpha \frac{1}{m} \sum\limits_{i=1}^{m}(h_\theta(x_{i}) - y_{i}) $
		* $ \theta_1 := \theta_1 - \alpha \frac{1}{m} \sum\limits_{i=1}^{m}\left((h_\theta(x_{i}) - y_{i}) x_{i}\right)$

* "Batch" Gradient Descent:  
	* "__Batch__": Each step of gradient descent uses all the training examples


## Multivariate Linear Regression  

### Multiple Features (variables)  

* n = number of features  
* $ x^{(i)} \text{ for } (i\in { 1,\dots, m } ) $ = input (features) of $ i^{th} $ training examples  
	* $ x^{i} = [ x_{1}^{i} \ x_{2}^{i} \ \dots \ x_{n}^{i} ]^{T} \in \mathbb{R}^{n} $  
* $ x_{j}^{(i)} $ = value of $ j^{th} $ features in $ i^{th} $ training examples  
* Hypothesis: 
$$ h_{\theta}(x^{i}) = \theta_{0} + \theta_{1}x_{1}^{i} + \theta_{2}x_{2}^{i} + \dots + \theta_{n}x_{n}^{i} $$  
	* $ x = [ x_{0} \ x_{1} \ x_{2} \ \dots \ x_{n} ]^{T} \in \mathbb{R}^{n+1} \ \ (x_{0}^{i} = 1) $  
	* $ \theta = [ \theta_{0} \ \theta_{1} \ \theta_{2} \ \dots \ \theta_{n} ]^{T} \in \mathbb{R}^{n+1} $  
	* $ h_{\theta}(x) = \theta_{0}x_{0} + \theta_{1}x_{1} + \theta_{2}x_{2} + \dots + \theta_{n}x_{n} \ \  (x_{0} = 1) $  
	__$ \ \ \ \ \  = \theta^{T}x $__  
* Parameters: $ \theta_{0}, \theta_{1}, \dots , \theta_{n} $
* Cost function: $ J(\theta) = J(\theta_{0}, \theta_{1}, \dots , \theta_{n}) = $ 
$$ \dfrac{1}{2m} \displaystyle\sum_{i=1}^m (h_\theta (x^{i}) - y^{i} )^2 $$  
	$$ \hspace{3em} J(\theta) = \dfrac{1}{2m} \displaystyle\sum_{i=1}^{m}((\sum_{j=0}^{n}\theta_j x^{(i)}_j) - y^{(i)})^2 $$  
* __Gradient descent__:  
	Repeat {  
		$$ \theta_j := \theta_j - \alpha \displaystyle \frac{\partial}{\partial \theta_j} J(\theta) $$  
	} (simultaneously update for every $ j = 0, \dots, n $ )
* __New algorithm (n &ge; 1)__:  
	Repeat {  
		$$ \theta_j := \theta_j - \alpha \displaystyle \frac{1}{m} \sum\limits_{i=1}^{m}(h_\theta(x^{(i)}) - y^{(i)}) \cdot x_{j}^{(i)} $$  
	} (simultaneously update $ \theta_j $ for $ j = 0, \dots, n $ )

* Features Scaling  
	* Let $ x = \displaystyle \frac{x}{ \mathrm{range} S } $  
	to get every feature into approximately a $ -1 \leq x \leq 1 $ range 
	* __Mean normalization__: replace $ x_j \mathrm{with} \frac{x_j - \mu_j}{ s_{j} } $ (Do not apply to $ x_0 = 1 $)  
	into $ -0.5 \leq x_j \leq 0.5 $ range 
* Learning Rate choose  
	* "Debugging": plot ( $ \displaystyle\underset{ \theta }{ \mathrm{min} } \ J(\theta) $, No. of iterations)  
	$ J(\theta) $ should decrease after every iteration &rarr; __converge__ (sufficiently &alpha;)  
	* Not working &rarr; Use smaller &alpha;  
	slow converge &rarr; use larger &alpha;  
* Create new feature  
* Change the behavior or curve of our hypothesis function by making it a quadratic, cubic or square root function or any other form (__Features Scaling__)  

### Normal equation

* Definition: Method to solve for &theta; analytically  
* Formula: $ \displaystyle\theta = (X^{T} X)^{-1} X^{T} y $  
	* Octave: `pinv(x'*x)*x'*y`  
	* No need feature scaling  
	* If n is very large, it works very slow, by compute $ n^3 $  

## Classification

* __Binary classification__ problem: y = 0 or 1  
* Use linear regression:  
	* To map all predictions greater than 0.5 as a 1 and all less than 0.5 as a 0  
	* $$ h_\theta(x) $$ can be >1 or <0, so it does not work well  
* Logistic Regression: make $$ 0 \le h_\theta(x) \le 1 $$

### Logistic Regression  

* __Clasification and Representation__  
	* Sigmoid(Logistic) function: $$ g(Z) = \displaystyle\frac{1}{1+e^{-z}} $$  
	* $ h_\theta(x) = g(\theta^{T}x) = \displaystyle\frac{1}{1+e^{-\theta^{T}x}} $  
<img src="/images/Machine_Learning/Sigmoid_function.PNG">  
	* $$ h_\theta(x) = $$ estimated __probability__ that y = 1 on input x  
	* $$ h_\theta(x) = P(y=1 | x ; \theta) = 1 - P(y=0 | x ; \theta) $$  

* __Decision boundary__  
	* To get discrete 0 or 1 classification, can translate the output of the hypothesis function as:
		* $ h_\theta(x) \geq 0.5 \rightarrow y = 1 $  
		* $ h_\theta(x) \leq 0.5 \rightarrow y = 0 $  
	* $$ g(z) \geq 0.5 $$ when $$ z \geq 0 $$ that $$ h_\theta(x) = g(\theta^T x) \geq 0.5 $$ when $$ \theta^T x \geq 0 $$  
	* From these statements we can say:  
		* $ \theta^T x \geq 0 \Rightarrow y = 1 $  
		* $ \theta^T x \leq 0 \Rightarrow y = 0 $  
<img src="/images/Machine_Learning/Decision_boundary.PNG">  
<img src="/images/Machine_Learning/Nonlinear_Decision_boundary.PNG">  

* __Cost function__  
	* $ J(\theta) = \displaystyle\dfrac{1}{m} \sum_{i=1}^m \mathrm{Cost}(h_\theta(x^{(i)}),y^{(i)}) $  
	* $$ \mathrm{Cost}(h_\theta(x),y) = -\log(h_\theta(x)) $$ if y = 1  
	* $$ \mathrm{Cost}(h_\theta(x),y) = -\log(1-h_\theta(x)) $$ if y = 0  
<img src="/images/Machine_Learning/LG_cost_function.PNG">  
	* Compress: $$ \mathrm{Cost}(h_\theta(x),y) = -y\log(h_\theta(x)) -(1-y)\log(1-h_\theta(x)) $$  
	* Vectorized implementation:  
	 $ h = g(X\theta) $  
	 $ J(\theta) = \frac{1}{m} \cdot (-y^{T}\log(h)-(1-y)^{T}\log(1-h)) $  

* __Gradient Descent__  
	* _Repeat_ {  
	general form:  
	$ \theta_j := \theta_j - \alpha \dfrac{\partial}{\partial \theta_j}J(\theta) $  
	derivative part using calculus:  
	$ \theta_j := \theta_j - \frac{\alpha}{m} \sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)} $  
	}  
	* Vectorized implementation:  
	$ \theta := \theta - \frac{\alpha}{m} X^T (g(X\theta) - \vec y $  

* __Optimization algorithm__  
	* Gradient Descent  
	* Conjugate gradient  
	* BFGS  
	* L-BFGS  

* _Code_ in __Octave__:  
	`function [jVal, gradient] = costFunction(theta)`  
	`jVal = [...code to compute J(theta)...];`  
	`gradient = [...code to compute derivative of J(theta)...];
end`  
	* use octave's 'fminunc' optimization algorithm  
	`options = optimset('GradObj', 'on', 'MaxIter', 100);`  
	`initialTheta = zeros(2,1);`  
	`[optTheta, functionVal, exitFlag] = fminunc(@costFunction, initialTheta, options);`  

* Multiclass Classification: __One-vs-all__  
	* Train a logistic regression classifier $$ h_\theta^{(i)}(x) $$ for each class i to predict the probability that y = i  
		$ h_\theta^{(i)}(x) = P(y = i| x;\theta) (i=1,2,\dots,n) $
	* On a new input x, to make a prediction, pick the class i that maximizes  
		prediction = $$ \displaystyle\underset{i}{\mathrm{max}} h_\theta^{(i)}(x) $$  
<img src="/images/Machine_Learning/1vall.PNG">  


### To be continued

* others: Reinforcement learning, recommender systems

* Practical advice for applying learning algorithms



