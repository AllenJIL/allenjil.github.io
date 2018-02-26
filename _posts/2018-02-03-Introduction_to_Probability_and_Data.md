---
layout: post
title: "Introduction to Probability and Data"
description: "Note from Coursera.com"
date: 2018-02-03
tag: Notes
---
[Coursera.org]: <https://www.coursera.org/learn/probability-intro/home/welcome/> "Coursera"

>These are the notes by learning the "Introduction to Probability and Data" from [Coursera.org] for future reviews.

**********

## Introduction to Data

* Data matrix: data are organized in
* Observation (case): row 
* Variable: column 

### Types of variables

* Numerical
	* numerical values (sensible to add, subtract, take averages, etc. with them)
 	1. continuous: infinite number of values within a given range
 	2. discrete: specific set of numeric values

* Categorical 
	* limited number of distinct categories (not sensible to do arithmetic operations)
	1. ordinal: inherent ordering
	2. Nominal: not ordering

### Relationships between variables

* associated (dependent) : positive or negative
* independent : not associated

### Observational study

* collect data in a way that does not directly interfere with how data arise ("observe")
* only establish an association
* __retrospective__:  use past data
* __prospective__: data are collected throughout the study

### Experiment study

* randomly assign subjects to treatments
* establish causal connections

### Why not Census

* some individuals are hard to locate or measure, and these people be different from the rest of the population
* populations rarely stand still 

### Sources of Sampling bias

* __Convenience sample__: individuals who are easily accessible are more likely to be included in the sample
* __Non-response__: If only a (non-random) fraction of the randomly sampled people respond to survey such that the sample is no longer representative of the population
* __Voluntary response__: Occurs when the sample consists of people who volunteer to respond because they have strong opinions on the issue

### Sample Methods

* __simple random sampling__: randomly select cases from the population
* __stratified sampling__: first divide the population into homogenous groups called strata, and then randomly sample from within each stratum
* __cluster sampling__: divide the population into clusters, randomly sample a few clusters, and then sample all observation within these clusters
* __multistage sampling__: divide the population into clusters, randomly sample a few clusters, and then we randomly sample observations from within these clusters

### Experimental design

* Principles of Experimental Design: 
	1. control: compare treatment of interest to a control group
	2. randomize: randomly assigning subjects to treatments
	3. replicate: collect a sufficiently large sample, or replicate the entire study
	4. block: block for variables known or suspected to affect the outcome


* __confounding variable__: is correlated with both the explanatory and response variables
* __Explanatory variables (factors)__: conditions we can impose on our experimental units
* __Blocking variables__: characteristics that the experimental units come with, that we would like to control for
* Blocking is like stratifying:
	* blocking during random assignment
	* stratifying during random sampling

### Experimental terminology

* __placebo__: fake treatment, often used as the control group for medical studies
* __placebo effect__: showing change despite being on the placebo
* __blinding__: experimental units do not know which group they are in
* __double-blind__: both the experimental units and the researchers do not know the group assignment 

### Random sampling and random assignment

|   |   |   |   |
|:------:|:------:|:------:|:------:|
| ideal experiment &darr; | Random Assignment | No Random Assignment | most observational studies &darr; |
|Random Sampling | Causal and Generalizable | not Causal, but Generalizable | Generalizability |
|No Random Sampling | Causal, but not Generalizable | neither Causal nor Generalizable | Np Generalizability |
| most experiments &uarr; | Causation | Association | bad observational studies &uarr; |


## Exploratory Data Analysis and Introduction to Inference

### Scatterplots

* explanatory variable on x axis
* response variable on y axis
* correlation, not causation

### Evaluate the relationship 

* direction: positive or negative
* shape: linear or curved or others
* strength: strong or weak
* outliers

### Histogram

* provide a view of the data density
* especially useful for identifying shapes of distributions

### Skewness

* distributions are skewed to the side of the long tail
	* left skewed: the longer tail is on the left on the negative end
		* mean < median
	* symmetric: no skewness is apparent
		* mean $\approx$ median
	* right skewed: the longer tail is on the right, the positive end
		* mean > median

### Modality

* unimodal: one prominent peak (normal distribution or bell curve)
* bimodal: two prominent peak (might two distinct groups in data)
* uniform: no prominent peaks (no apparent trend)
* multimodal: more than two prominent peaks 

### Bin width

the chosen bin width can alter the story the histogram is telling
* bin width too wide: might lose interesting details
* bin width too narrow: might be difficult to get an overall picture of the distribution
* ideal bin width depends on the data you are working with

### Dot plot

* useful when individual values are of interest
* can get too busy as the sample size increases

### Box plot

* useful for highlighting outliers, media, IQR(interquartile range)

### Intensity map

* useful for highlighting the spatial distribution

### Measures of spread

* range: (max - min)
* variance: roughly the average squared deviation from the mean
	* sample variance: $s^2$
	* population variance: $(\sigma)^2$
	* $s^2 = \frac{\sum_{i=1}^{n}     (x_i - \bar{x})^2}{n-1}$
* standard deviation: roughly the average deviation around the mean, and has the same units as the data
	* sample sd: $s$
	* population sd: $\sigma$
* inter-quartile range
	* range of the middle 50% of the data, distance between the first quartile (25th percentile) and third quartile (the 75th percentile)
	* most readily available in a box plot. 
	* $IQR = Q_3 - Q_1$

### Robust Statistics

* define: measures on which extreme observations have little effect
* robust measures of center & spread:

|  | robust | non-robust |
|:---:|:---:|:---:|
| center | median | mean |
| spread | IQR | SD, range |

### Transforming data

* define: a rescaling of the data using a function
* When data are very strongly skewed, we sometimes transform them, so that they are easier to model
* __(natural) log transformation__: 
	* often applied when much of the data cluster near zero (relative to larger values in the dataset) and all observations are positive
	* to make the relationship between the variables more linear, and hence easier to model with simple methods
* __other transformations__:
	* square root
	* inverse
* __goals__: 
	* to see the data structure differently
	* to reduce skew assist in modeling
	* to straighten a nonlinear relationship in a scatterplot

### Exploring Categorical Variables

* __Bar plots__
	* Q: How are bar plots different than histograms?
	* barplots for categorical variables, histograms for numerical variables
	* x-axis on a histogram is a number line, and the ordering od the bars are not interchangeable
* __Segmented bar plot__ 
	* useful for visualizing conditional frequency distributions
	* compare relative frequencies to explore the relationship between the variables
* __Relative frequency segmented bar plot__
* __Mosaicplot__
* __Side-by-side box plots__

### Introduction to inference

* null hypothesis($H_0$): independent, "There is nothing going on"
* alternative hypothesis($H_A$): dependent, "There is something going on"

* hypothesis testing framework
	* start with a null hypothesis($H_0$) that represents that status quo
	* set an alternative hypothesis($H_A$) that represents our research question, i.e. what we're testing for
	* conduct a hypothesis test under the assumption that the null hypothesis is true, either via simulation or using theoretical methods
		* If the test results suggest that the data do not provide convincing evidence for the alternative hypothesis, we stick with the null hypothesis
		* If they do, then we reject the null hypothesis in favor of the alternative

### Inference summary

* set a null and an alternative hypothesis
* simulate the experiment assuming that the null hypothesis is true
* evaluated the __p_value__: probability of observing an outcome at least as extreme as the one observed in the original data
* if this probability is low, reject the null hypothesis in favor of the alternative 

### Probability and Distribution

* random process: know what outcomes could happen, but don't know which particular outcome will happen

* P (A) = Probability of event A
	* 0≤P(A)≤1

* __frequentist interpretation__: The probability of an outcome would occur if we observed the random process an infinite number of times.

* __Bayesian interpretation__: A Bayesian interprets probability as a subjective degree of belief

* largely popularized by revolutionary advance in computational technology and methods during the last twenty years

* __law of large members__: sates that as more observations are collected, the proportion of occurrences with a particular outcome converges to the probably of that outcome

* common misunderstanding: __gambler's fallacy__ (law of averages)

* __disjoint (mortally exclusive)__ events cannot happen at the same time
	* P(A & B) = 0
	* __Union of disjoint__ events: P(A or B) = P(A) + P(B) - P(A & B)
	* Complementary &rarr; disjoint; complementary !&larr; disjoint

* __non-disjoint events__ can happen at the same time
	* P(A & B) != 0

* sample space: a collection of __all__ possible outcomes of a trial

* __probability distribution__: all possibility outcomes in the sample space, and the probabilities with they occur

* __Rules__:
	* the events listed must be disjoint
	* each probability must be between 0 and I
	* the probabilities must total I
	* complementary events: two mentally exclusive events whose probabilities add up to l

* __Independence__: P(A/B) = P(A), P(A<sub>1</sub>, ... & A<sub>k<\sub>) = P(A<sub>1</sub>) X ... X P(A<sub>k</sub>)

* __Dependence__: P(A/B) = P(A & B)/ P(B), P(A & B) = P(A/B) X P(B)

* __Posterior Probability__: P(hypothesis / data) &rarr; P(hypothesis is true / observed data)

* __P-value__: P(data / hypothesis) &rarr; P(observed or more extreme outcome / H<sub>0</sub> is true)




