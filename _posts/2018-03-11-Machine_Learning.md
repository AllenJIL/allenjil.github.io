
layout: post
title: "Machine Learning"
description: "Coursera.org 机器学习 笔记"
date: 2018-03-011
tag: Machine_Learning
---
[Coursera.org]: <https://www.coursera.org/learn/machine-learning/home/welcome/> "Coursera"

> Coursera.org 机器学习 笔记
> These are the notes by learning Andrew Ng's "Machine Learning" from [Coursera.org] for future reviews

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
* We can derive this structure by clustering the data based on relationships among the variavles in the data  
* There is no feedback based on the prediction results  

* E.g., Organize computing clusters, social network analysis, market segmentation, astronomical data analysis  

### Model representation  

* __Notation__  
	* m = Number of training examples  
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
	* __minimize__ $ (\theta_{0}, \theta_{1}) \frac{1}{2m} \sum_{i = 1}^{m} ( h_{\theta}(x^{(i)}) - y^{(i)} ) $  
	* $ h_{\theta}(x^{i}) = \theta_{0} + \theta_{1}x^{i} $  

* __Cost function__: J(\theta_0, \theta_1) = \dfrac {1}{2m} \displaystyle \sum _{i=1}^m \left ( \hat{y}^{i}- y^{i} \right)^2 = \dfrac {1}{2m} \displaystyle \sum _{i=1}^m \left (h_\theta (x^{i}) - y^{i} \right)^2
	* also called __squared error cost function__ or __squared error function__  

* __Goal__: 

* others: Reinforcement learning, recommender systems
* Practical advice for applying learning algorithms





