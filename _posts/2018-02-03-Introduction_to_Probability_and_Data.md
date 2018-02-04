---
layout: post
title: "Introduction to Probability and Data"
description: "Note from Coursera.com"
date: 2018-02-03
tag: Notes
---
[Coursera.org]: <https://www.coursera.org/learn/probability-intro/home/welcome/> "Coursera"

>These are the notes by learning the "Introduction to Probability and Data" from [Coursera.org] for future reviews.
***

### Introduction to Data

* Data matix: data are organized in
* Observation (case): row 
* Variable: column 

#### Types of variables

* Numerical
	* numerical values (sensible to add, subtract, take averages, etc. with them)
 	1. continuous: infinite number of values within a given range
 	2. discrete: specific set of numeric values

* Categorical 
	* limited number of distinct categories (not sensible to do arithmetic operations)
	1. ordinal: inherent ordering
	2. Nominal: not ordering

#### Relationships between variables

* associated (dependent) : positive or negative
* independent : not associated

#### Observational study
* collect data in a way that does not directly interfere with how data arise ("observe")
* only establish an association
* __retrospective__:  use past data
* __prospective__: data are collected throughout the study

#### Experiment study
* randomly assign subjects to treatments
* establish causal connections

#### Why not Census
* some individuals are hard to locate or measure, and these people be different from the rest of the population
* populations rarely stand still 

#### Sources of Sampling bias
* __Convenience sample__: individuals who are easily accessible are more likely to be included in the sample
* __Non-response__: If only a (non-random) fraction of the randomly sampled people respond to survey such that the sample is no longer representative of the population
* __Voluntary response__: Occurs when the sample consists of people who volunteer to respond because they have strong opinions on the issue

#### Sample Methods
* __simple random sampling__: randomly select cases from the population
* __stratified sampling__: first divide the population into homogenous groups called strata, and then randomly sample from within each stratum
* __cluster sampling__: divide the population into clusters, randomly sample a few clusters, and then sample all observation within these clusters
* __multistage sampling__: divide the population into clusters, randomly sample a few clusters, and then we randomly sample observations from within these clusters

#### Experimental design
* Principles of Experimental Design: 
	1. control: compare treatment of interest to a control group
	2. randomize: andomly assigning subjects to treatments
	3. replicate: collect a sufficiently large sample, or replicate the entire study
	4. block: block for variables known or suspected to affect the outcome

* __Explanatory variables (factors)__: conditions we can impose on our experimental units
* __Blocking variables__: characteristics that the experimental units come with, that we would like to control for
* Blocking is like stratifying:
	* blocking during random assignment
	* stratifying during random sampling

#### Experimental terminology
* __placebo__: fake treatment, often used as the control group for medical studies
* __placebo effect__: showing change despite being on the placebo
* __blinding__: experimental units do not know which group they are in
* __double-blind__: both the experimental units and the researchers do not know the group assignment 

#### Ramdom sampling and random assignment
| ideal experiment &darr; | Random Assignment | No Random Assignment | most observational studies &darr; |
|Random Sampling | Causal and Generalizable | not Causal, but Generalizable | Generalizability |
|No Random Sampling | Causal, but not Generalizable | neither Causal nor Generalizable | Np Generalizability |
| most experiments &uarr; | Causation | Association | bad observational studies &uarr; |
