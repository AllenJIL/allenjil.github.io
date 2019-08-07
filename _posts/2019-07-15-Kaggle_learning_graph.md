---
layout: post
title: "Data visualization (python)"
description: "Cheating page of Data Visualization (pandas, seaborn)"
date: 2019-07-15
tag: Kaggle
---
[Data Visualization]: <https://www.kaggle.com/learn/data-visualization> "Data Visualization"



> Most notes and code are from:  
> [Data Visualization]  

**********
<!-- MarkdownTOC -->

- [1. Univariate Plotting](#1-univariate-plotting)
		- [1.1. Bar Chart](#11-bar-chart)
		- [1.2. Line Chart](#12-line-chart)
		- [1.3. Area Chart](#13-area-chart)
		- [1.4. Histogram Chart](#14-histogram-chart)
- [2. Bivariate Plotting](#2-bivariate-plotting)
		- [2.5. Scatter Plot](#25-scatter-plot)
		- [2.6. Hexplot](#26-hexplot)
		- [2.7. Stacked Plots](#27-stacked-plots)
		- [2.8. Bivariate Line Chart](#28-bivariate-line-chart)
- [3. Seaborn Plotting](#3-seaborn-plotting)
	- [3.1. Trends](#31-trends)
		- [3.1.1. sns.countplot](#311-snscountplot)
		- [3.1.2. sns.lineplot](#312-snslineplot)
	- [3.2. Relationship](#32-relationship)
		- [3.2.1. sns.barplot](#321-snsbarplot)
		- [3.2.2. sns.heatmap](#322-snsheatmap)
		- [3.2.3. sns.regplot](#323-snsregplot)
		- [3.2.4. sns.lmplot](#324-snslmplot)
		- [3.2.5. sns.swarmplot](#325-snsswarmplot)
	- [3.3. Distribution](#33-distribution)
		- [3.3.1. sns.distplot](#331-snsdistplot)
		- [3.3.2. sns.kdeplot](#332-snskdeplot)
		- [3.3.3. sns.jointplot](#333-snsjointplot)
	- [3.4. Themes](#34-themes)
- [4. Seaborn Faceting](#4-seaborn-faceting)
- [5. Multivariate Plotting](#5-multivariate-plotting)

<!-- /MarkdownTOC -->

**********

`import pandas as pd`  
`df` is the dataset  
`'X'` is the X-axis name  
`'Y'` is the y-axies name   

<a id="1-univariate-plotting"></a>
# 1. Univariate Plotting

<img src="/images/python/plot/univariate_plotting.png">  

<a id="11-bar-chart"></a>
### 1.1. Bar Chart

* Y is the total amount counts of each X  
	- `df['X'].value_counts().head(10).plot.bar()`  

* Y is the proportions of each X  
	- `(df['X'].value_counts().head(10) / len(df)).plot.bar()`  

* Sort the ordinal categories X  
	- `df['X'].value_counts().sort_index().plot.bar()`

<a id="12-line-chart"></a>
### 1.2. Line Chart

* Sort the ordinal categories X  
	- `df['X'].value_counts().sort_index().plot.line()`  

<a id="13-area-chart"></a>
### 1.3. Area Chart

* Sort the ordinal categories X  
	- `df['X'].value_counts().sort_index().plot.area()`  

<a id="14-histogram-chart"></a>
### 1.4. Histogram Chart

* Deal with the skewed data and limit up to 200  
	- `df[df['X'] < 200]['X'].plot.hist()`  

* Basic histogram chart  
	- `df['X'].plot.his()`

****************

<a id="2-bivariate-plotting"></a>
# 2. Bivariate Plotting

<img src="/images/python/plot/bivariate_plotting.png">  

<a id="25-scatter-plot"></a>
### 2.5. Scatter Plot

This map is often used to show the correlation between two variables  
It works best with a mixture of ordinal categorical and interval data.  

* Map X to Y in 2_D space (limit X up to 100)  
	- `df[df['X'] < 100].sample(100).plot.scatter(x = 'X', y = 'Y')`  
	- To **downsample** data is also important to prevent overplotting  

<a id="26-hexplot"></a>
### 2.6. Hexplot

* Hexplot is a way to deal with overplotting  
	- `'df[df['X']<100].plot.hexbin(x='X',y='Y', gridsize = 15) `  

<a id="27-stacked-plots"></a>
### 2.7. Stacked Plots

Often with nominal categorical data  

* Reform the data with the groupby X to counts amount y with 2 variables  
	- `reform_df = df.groupby(['X_1','X_2']).mean()[['variable_1','variable_2']]`

* Dealing with the probelm: one categorical variable in the columns, one categorical variable in the rows, and counts of their intersections in the entries  
	- `df.plot.bar(stacked=True)` in bar plots  
	- `df.plot.area()` in area plots  

<a id="28-bivariate-line-chart"></a>
### 2.8. Bivariate Line Chart

Better with interval data  

* Reform the data with the groupby X to counts amount y with 4 variables  
	- `reform_df = df.groupby(['X']).mean()[['v_1','v_2','v_3','v_4']]`

* Multiple lines on the same chart  
	- `df.plot.line()`  

****************

<a id="3-seaborn-plotting"></a>
# 3. Seaborn Plotting

`import seaborn as sns` is a standalone data visualization package  

<img src="/images/python/plot/seaborn_plotting.png">  

<a id="31-trends"></a>
## 3.1. Trends
A trend is defined as a pattern of change.  

<a id="311-snscountplot"></a>
### 3.1.1. sns.countplot
- Same as pandas' `value_counts`  
	+ `sns.countplot(df['X'])`  

<a id="312-snslineplot"></a>
### 3.1.2. sns.lineplot
- Line charts are best to show trends over a period of time, and multiple lines can be used to show trends in more than one group.  

<a id="32-relationship"></a>
## 3.2. Relationship
There are many different chart types that you can use to understand relationships between variables in your data.  

<a id="321-snsbarplot"></a>
### 3.2.1. sns.barplot
- Bar charts are useful for comparing quantities corresponding to different groups.  

<a id="322-snsheatmap"></a>
### 3.2.2. sns.heatmap
- Heatmaps can be used to find color-coded patterns in tables of numbers.
sns.scatterplot - Scatter plots show the relationship between two continuous variables; if color-coded, we can also show the relationship with a third categorical variable.  

<a id="323-snsregplot"></a>
### 3.2.3. sns.regplot
- Including a regression line in the scatter plot makes it easier to see any linear relationship between two variables.  

<a id="324-snslmplot"></a>
### 3.2.4. sns.lmplot
- This command is useful for drawing multiple regression lines, if the scatter plot contains multiple, color-coded groups.  

<a id="325-snsswarmplot"></a>
### 3.2.5. sns.swarmplot
- Categorical scatter plots show the relationship between a continuous variable and a categorical variable.  

<a id="33-distribution"></a>
## 3.3. Distribution
We visualize distributions to show the possible values that we can expect to see in a variable, along with how likely they are.  

<a id="331-snsdistplot"></a>
### 3.3.1. sns.distplot
- Histograms show the distribution of a single numerical variable.  

<a id="332-snskdeplot"></a>
### 3.3.2. sns.kdeplot
- KDE "kernel density estimate" plots (or 2D KDE plots) show an estimated, smooth distribution of a single numerical variable (or two numerical variables).  
- y axis in this case is how often it occurs  
	+ `sns.kdeplot(df.query('X < 200').X)`  
- KDE plots in 2-D (Bivariate KDE)  
	+ `sns.kdeplot(df[df['X']<200].loc[:,['X','Y']].dropna().sample(5000)) `  
	+ <img src="/images/python/plot/kde_2D.png">  

<a id="333-snsjointplot"></a>
### 3.3.3. sns.jointplot
- This command is useful for simultaneously displaying a 2D KDE plot with the corresponding KDE plots for each individual variable.  

<a id="34-themes"></a>
## 3.4. Themes

- Seaborn has five different themes: (1)"darkgrid", (2)"whitegrid", (3)"dark", (4)"white", and (5)"ticks"  
` sns.set_style("dark") `  

****************
<a id="4-seaborn-faceting"></a>
# 4. Seaborn Faceting
<img src="/images/python/plot/seaborn_faceting.png">  

****************

<a id="5-multivariate-plotting"></a>
# 5. Multivariate Plotting

`import re`  
`import numpy as np`  

<img src="/images/python/plot/multivariate_plotting.png">  

****************

