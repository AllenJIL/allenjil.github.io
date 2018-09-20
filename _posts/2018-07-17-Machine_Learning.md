---
layout: post
title: "Machine Learning"
description: "Coursera.org 机器学习 笔记"
date: 2018-07-17
tag: Machine_Learning
---
[Coursera.org]: <https://www.coursera.org/learn/machine-learning/home/welcome/> "Coursera"

> Coursera.org 机器学习 笔记  
> These are the notes by learning Andrew Ng's "Machine Learning" from [Coursera.org] for future review

**********

<!-- TOC -->
- [Machine Learning](#machine-learning)
	- [Introduction](#introduction)
- [Machine Learning Algorithms](#machine-learning-algorithms)
	- [Supervised learning](#supervised-learning)
	- [Unsupervised learning](#unsupervised-learning)
	- [Model representation](#model-representation)
	- [Cost function](#cost-function)
	- [Gradient descent](#gradient-descent)
- [Multivariate Linear Regression](#multivariate-linear-regression)
	- [Multiple Features (variables)](#multiple-features-variables)
	- [Normal equation](#normal-equation)
- [Classification](#classification)
	- [Logistic Regression](#logistic-regression)
- [Overfitting](#overfitting)
	- [Regularization](#regularization)
	- [Logistic Regression](#logistic-regression)
- [Neural Networks](#neural-networks)
	- [Model representation](#model-representation)
- [To be continued](#to-be-continued)
<!-- /TOC -->


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

* "Right answers" given  
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
$$ \displaystyle \dfrac{1}{2m} \sum _{i=1}^m ( \hat{y}^{i}- y^{i} )^2 =  \dfrac{1}{2m} \sum _{i=1}^m (h_\theta (x^{i}) - y^{i} )^2 $$  
	* Octave: `J = 1/(2*m)*sum((X*theta .- y).^2)`  
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
		* $ \theta_1 := \theta_1 - \alpha \frac{1}{m} \sum\limits_{i=1}^{m}((h_\theta(x_{i}) - y_{i}) x_{i})$  
		* Octave: `theta = theta - alpha/m*(X'*(X*theta .- y))`  

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
	* $ h_\theta(x) $ can be >1 or <0, so it does not work well  
* Logistic Regression: make $ 0 \le h_\theta(x) \le 1 $

### Logistic Regression  

* __Clasification and Representation__  
	* Sigmoid(Logistic) function: $ g(Z) = \displaystyle\frac{1}{1+e^{-z}} $  
	* Octave: `h = 1.0 ./ (1.0 + exp(-z))`  
	* $ h_\theta(x) = g(\theta^{T}x) = \displaystyle\frac{1}{1+e^{-\theta^{T}x}} $  
<img src="/images/Machine_Learning/Sigmoid_function.PNG">  
	* $ h_\theta(x) = $ estimated __probability__ that y = 1 on input x  
	* $ h_\theta(x) = P(y=1 \vert x ; \theta) = 1 - P(y=0 \vert x ; \theta) $  

* __Decision boundary__  
	* To get discrete 0 or 1 classification, can translate the output of the hypothesis function as:
		* $ h_\theta(x) \geq 0.5 \rightarrow y = 1 $  
		* $ h_\theta(x) \leq 0.5 \rightarrow y = 0 $  
	* $ g(z) \geq 0.5 $ when $ z \geq 0 $ that $ h_\theta(x) = g(\theta^T x) \geq 0.5 $ when $ \theta^T x \geq 0 $  
	* From these statements we can say:  
		* $ \theta^T x \geq 0 \Rightarrow y = 1 $  
		* $ \theta^T x \leq 0 \Rightarrow y = 0 $  
<img src="/images/Machine_Learning/Decision_boundary.PNG">  
<img src="/images/Machine_Learning/Nonlinear_Decision_boundary.PNG">  

* __Cost function__  
	* $ J(\theta) = \displaystyle\dfrac{1}{m} \sum_{i=1}^m \mathrm{Cost}(h_\theta(x^{(i)}),y^{(i)}) $  
	* $ \mathrm{Cost}(h_\theta(x),y) = -\log(h_\theta(x)) $ if y = 1  
	* $ \mathrm{Cost}(h_\theta(x),y) = -\log(1-h_\theta(x)) $ if y = 0  
<img src="/images/Machine_Learning/LG_cost_function.PNG">  
	* Compress: $ \displaystyle \mathrm{Cost}(h_\theta(x),y) = -y\log(h_\theta(x)) -(1-y)\log(1-h_\theta(x)) $  
	* Vectorized implementation:  
	 $ h = g(X\theta) $  
	 $ \displaystyle J(\theta) = \frac{1}{m} \cdot (-y^{T}\log(h)-(1-y)^{T}\log(1-h)) $  
	 Octave: 
	 	the cost: `J = 1/m * (-y' * log(h)-(1-y)'*log(1-h))`  
	 	the partial derivatives: `grad = 1/m * X'*(h-y)`

* __Gradient Descent__  
	* _Repeat_ {  
	_general form_:  
	$ \displaystyle \theta_j := \theta_j - \alpha \dfrac{\partial}{\partial \theta_j}J(\theta) $  
	_derivative part using calculus_:  
	$ \displaystyle \theta_j := \theta_j - \frac{\alpha}{m} \sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)}) x_j^{(i)} $  
	}  
	* Vectorized implementation:  
	$\displaystyle \theta := \theta - \frac{\alpha}{m} X^T (g(X\theta) - \vec y) $  

* __Optimization algorithm__  
	* Gradient Descent  
	* Conjugate gradient  
	* BFGS  
	* L-BFGS  

* _Codes_ in __Octave__:  
	`function [jVal, gradient] = costFunction(theta)`  
	`jVal = [...code to compute J(theta)...];`  
	`gradient = [...code to compute derivative of J(theta)...];
end`  
	* use octave's '_fminunc_' optimization algorithm  
	`options = optimset('GradObj', 'on', 'MaxIter', 100);`  
	`initialTheta = zeros(2,1);`  
	`[optTheta, functionVal, exitFlag] = fminunc(@costFunction, initialTheta, options);`  

* Multiclass Classification: __One-vs-all__  
	* Train a logistic regression classifier $$ h_\theta^{(i)}(x) $$ for each class i to predict the probability that $$ y = i $$  
		$ h_\theta^{(i)}(x) = P(y = i| x;\theta) (i=1,2,\dots,n) $
	* On a new input x, to make a prediction, pick the class i that maximizes  
		prediction = $ \displaystyle\underset{i}{\mathrm{max}} h_\theta^{(i)}(x) $  
<img src="/images/Machine_Learning/1vall.PNG">  

## Overfitting  

<img src="/images/Machine_Learning/overfit.PNG">  
* "Underfit" ("high bias"): not fit the training data very well  
* “Just right"  
* "Overfit" ("high variance"): may fit the trainning set very well, but fail to generalize to new examples  

### Regularization  

* Using the __cost function__ with the extra summation, we can smooth the output of our hypothesis function to reduce overfitting.  
$ min_\theta\, \dfrac{1}{2m}\, \displaystyle[\sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)})^2 + \lambda \sum_{j=1}^n \theta_j^2] $  
* $$ \lambda $$, or lambda is the __regularization parameter__  
* If lambda is too large, it may cause underfitting.  

### Linear Regression  

* __Gradient Descent__:  
	Repeat {  
		$ \displaystyle\theta_0 := \theta_0 - \alpha\, \frac{1}{m} \displaystyle\sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)})x_0^{(i)} $  
		$ \displaystyle\theta_j := \theta_j - \alpha\, [ ( \frac{1}{m}\, \sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)})x_j^{(i)}) + \frac{\lambda}{m}\theta_j ] $ 
		$ \displaystyle\quad j \in \lbrace 1,2...n\rbrace $  
		$ \displaystyle\Rrightarrow \theta_j := \theta_j (1- \alpha\,\frac{\lambda}{m}) - \alpha\, \frac{1}{m}\, \sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)})x_j^{(i)}) $  
	}

* __Normal Equation__:  
	$ \displaystyle\theta = ( X^TX + \lambda \cdot L )^{-1} X^Ty $  
	$ \text{where}\, \, L =  $ 
	$$ 
		\begin{bmatrix} 
		0 & & & & \newline 
		& 1 & & & \newline 
		& & 1 & & \newline 
		& & & \ddots & \newline 
		& & & & 1 
		\end{bmatrix}
	$$  

### Logistic Regression  

* __Cost function__:
	* $ J(\theta) = - \displaystyle\frac{1}{m} \sum_{i=1}^m [ y^{(i)}\, \log (h_\theta (x^{(i)})) + (1 - y^{(i)})\, \log (1 - h_\theta(x^{(i)}))] + \frac{\lambda}{2m}\sum_{j=1}^n \theta_j^2 $  
	* $ \sum_{j=1}^n \theta_j^2 $ means to explicitly exclude the bias term $ \theta_0 $  
	* Octave:  
		* the cost:  
			`J = 1/m * (-y' * log(h)-(1-y)'*log(1-h)) + (lambda/(2*m))*theta'*theta`  
		* the partial derivatives:  
			`grad = 1/m * X'*(h-y) + (lambda/m)*theta`  

* __Gradient descent__:  
	* $ \displaystyle h_\theta(x) = \frac{1}{1+e^{-\theta^{T}x}} $  
	Repeat {  
		$ \displaystyle\theta_0 := \theta_0 - \alpha\, \frac{1}{m} \displaystyle\sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)})x_0^{(i)} $  
		$ \displaystyle\theta_j := \theta_j (1- \alpha\,\frac{\lambda}{m}) - \alpha\, \frac{1}{m}\, \sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)})x_j^{(i)}) $ 
		$ \displaystyle\quad j \in \lbrace 1,2...n\rbrace $  
	}

## Neural Networks  

* Origins: Algorithms that try to mimic the brain  

### Model representation  

* __Neuron__ model: Logistic unit  
$$ 
	\begin{bmatrix}x_0 \newline x_1 \newline x_2 \newline \end{bmatrix}\rightarrow\begin{bmatrix}\ \ \ \newline \end{bmatrix}\rightarrow h_\theta(x)
$$  
	* Sigmoid (logistic) activation function: $ g(Z) = \displaystyle\frac{1}{1+e^{-z}} $  
	* Parameters $ \theta $ also called "weights"  
	<img src="/images/Machine_Learning/Neural_model.PNG">  
	* 1st layer called "input layer"; last layer called "output layer"; middle layers called "hidden layer"  

* __Notations__  
	* $ x_0 = 1 $ is a "bias unit"  
	$$ 
		\begin{bmatrix}x_0 \newline x_1 \newline x_2 \newline x_3\end{bmatrix}\rightarrow\begin{bmatrix}a_1^{(2)} \newline a_2^{(2)} \newline a_3^{(2)} \newline \end{bmatrix}\rightarrow h_\theta(x)
	$$  
	* $ a_i^{(j)} = $ "activation" of unit $ i $ in layer $ j $  
	* $ \Theta^{(j)} = $ matrix of weights controlling function mapping from layer $ j $ to layer $ j+1 $  

	$$ 
		\begin{align*} \displaystyle a_1^{(2)} = g(\Theta_{10}^{(1)}x_0 + \Theta_{11}^{(1)}x_1 + \Theta_{12}^{(1)}x_2 + \Theta_{13}^{(1)}x_3) \newline a_2^{(2)} = g(\Theta_{20}^{(1)}x_0 + \Theta_{21}^{(1)}x_1 + \Theta_{22}^{(1)}x_2 + \Theta_{23}^{(1)}x_3) \newline a_3^{(2)} = g(\Theta_{30}^{(1)}x_0 + \Theta_{31}^{(1)}x_1 + \Theta_{32}^{(1)}x_2 + \Theta_{33}^{(1)}x_3) \newline h_\Theta(x) = a_1^{(3)} = g(\Theta_{10}^{(2)}a_0^{(2)} + \Theta_{11}^{(2)}a_1^{(2)} + \Theta_{12}^{(2)}a_2^{(2)} + \Theta_{13}^{(2)}a_3^{(2)}) \newline \end{align*}
	$$  
	* If network has $ s_j $ units in layer $ \displaystyle j, s_{j+1} $ units in layer $ j + 1 $, then $ \Theta^{(j)} $ will be of dimension $ \displaystyle s_{j+1} \times (s_j + 1) $ that  
	$$ \Theta^{(j)} \in \displaystyle\Re^{s_{(j+1\ )}\ \times (s_j \ + 1)} $$  

* __Forward propagation__: Vectorized implementation  
	$$ 
		\displaystyle z_k^{(2)} = \Theta_{k,0}^{(1)}\ x_0 + \Theta_{k,1}^{(1)}\ x_1 + \cdots + \Theta_{k,n}^{(1)}\ x_n
	$$  
	$$ 
		\begin{align*}\displaystyle x = \begin{bmatrix}x_0 \newline x_1 \newline\cdots \newline x_n\end{bmatrix} &z^{(j)} = \begin{bmatrix}z_1^{(j)} \newline z_2^{(j)} \newline\cdots \newline z_n^{(j)}\end{bmatrix}\end{align*}
	$$  
	* $ a^{(1)} = x $  
	* $ \displaystyle z^{(j)} = \Theta^{(j-1)} \ a^{(j-1)} $  
	$$ 
		\begin{align*}\displaystyle a_1^{(2)} = g(z_1^{(2)}) \newline a_2^{(2)} = g(z_2^{(2)}) \newline a_3^{(2)} = g(z_3^{(2)}) \newline \end{align*}
	$$  
	* $ \hookrightarrow \displaystyle a^{(j)} = g(z^{(j)} ) $  
	* __Add__ $ \displaystyle a_0^{(j)} = 1 $  
	* $ z^{(j+1)} = \Theta^{(j)} a^{(j)} $  
	* $ \displaystyle h_\Theta(x) = \ a^{(j+1)} = \ g(z^{(j+1)}\ ) $  

* Other network architectures  
	<img src="/images/Machine_Learning/network_architectures.PNG">  





## To be continued

* others: Reinforcement learning, recommender systems

* Practical advice for applying learning algorithms



