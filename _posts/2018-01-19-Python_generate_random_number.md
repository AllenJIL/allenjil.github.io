---
layout: post
title: "Python 内置函数生成随机数"
description: "Use Python generate random number"
date: 2018-01-19
tag: Notes
---
<p>
# Random <br /> 
# 用内置函数生成随机数 <br /> 
# 删除# 调用测试 用于更好理解 <br /> 
# - 记账函数 <br /> 
# - 整形随机数生成器函数  <br /> 
# - 随机序列生成器函数  <br /> 
# - 基于统计分布函数 <br /> 
# <br /> 
# <a href="https://github.com/AllenJIL/Python-Scientific-Computing/raw/master/Random.py" target="_blank" rel="noopener">下载 (右键另存为)</a> <br /> 
#----------------------------------------- <br />  <br /> 
</p>
<p>
import random <br /> <br />  
</p>
<p>
#记账函数(生成相同随机数) <br /> 
#----------------------------------------- <br /> 
#函数初始化随机数生成器，当a=None时，系统时间当作seed值 <br /> 
#random.seed(a= None, version = 2) <br /> 
 <br /> 
#getstate 返回一个state，被用于 setstate 恢复生成器内部状态 <br /> 
#random.getstate() <br /> 
#random.setstate(state) <br /> <br />  
</p>
<p>
#整形随机数生成器函数 <br /> 
#----------------------------------------- <br /> 
#浮点随机值 0~1 <br /> 
print (random.random()) <br /> 
 <br /> 
#范围随机整数，忽略第一个参数则默认为0 <br /> 
#print (random.randrange(20)) #0~19 <br /> 
#print (random.randint(0,19)) <br /> 
 <br /> 
#0~99中3的随机倍数,3为step <br /> 
#print (random.randrange(0,99,3)) <br /> <br />  
</p>
<p>
#随机序列生成器函数 <br /> 
#----------------------------------------- <br /> 
#随机选择值 <br /> 
#print (random.choice('ABCDEFGHIJKLMNOPQRSTUVWXYZ')) <br />  <br /> 

items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] <br /> 
#混合重排样本 <br /> 
#random.shuffle(items) <br /> 
#print (items) <br /> 

#给定大小的随机样本 <br /> 
#print (random.sample(items,5)) <br /> 

#权重选择，给定概率选择随机值 <br /> 
#weighted_choices = [('Three', 3), ('Two', 2), ('One', 1), ('Four',4)] <br /> 
#population = [val for val, cnt in weighted_choices for i in range(cnt)] <br /> 
#print (random.choice(population)) <br />  <br /> 
</p>
<p>
# 基于统计分布函数 <br /> 
#---------------------------------------- <br /> 
#范围内均匀分布随机值，随机数概率一样 <br /> 
#print (random.uniform(1,9)) <br />  <br /> 

#三角分布随机浮点数(low,high,mode) <br /> 
#print (random.triangular(0,1,10)) <br />  <br /> 

#贝塔分布 (Beta Distribution) (alpha&gt;0,beta&gt;0) 0&lt;值&lt;1  <br /> 
#print (random.betavariate(3,2))  <br /> 
#指数分布 (Exponential Distribution) (lambd!=0) #print (random.expovariate(0.5))  <br /> 
#伽马分布 (Gama Distribution) (alpha&gt;0,beta&gt;0) <br /> 
#print (random.gammavariate(3,2)) <br />  <br /> 

#正态分布 (Normal Distribution) (mu均值,sigma标准差) <br /> 
#print (random.normalvariate(1,2)) <br />  <br /> 

#高斯分布 (Gauss Normal Distribution) (mu均值,sigma标准差) <br /> 
#print (random.gauss(1,2)) <br />  <br /> 

#对数正态分布 (Logarithmic Normal Distribution) (mu均值,sigma标准差) <br /> 
#print (random.lognormvariate(1,2)) <br />  <br /> 

#冯米塞斯分布 (Von Mises Distribution) (0&lt;=mu&lt;=2*pi 角度均值,kappa&gt;=0 浓度) <br />  
#print (random.vonmisesvariate(1,2)) <br />  <br /> 

#帕累托分布 (Pareto Distribution) (alpha形状) <br /> 
#print (random.paretovariate(1)) <br />  <br /> 

#Weibull分布 (Weibull Distribution) (alpha 标量, beta 形状) <br /> 
#print (random.weibullvariate(1,2)) <br />  <br /> 

#泊松分布 (Poisson Distribution) <br /> 
''' <br /> 
import math <br /> 
def nextPoisson (lambdaValue): <br /> 
elambda = math.exp(-1*lambdaValue) <br /> 
product = 1 <br /> 
count = 0 <br />  <br /> 

while (product &gt;= elambda): <br /> 
product *= random.random() <br /> 
result = count <br /> 
count += 1 <br /> 
return result <br />  <br /> 

for x in range(1,9): <br /> 
print (nextPoisson(8)) <br /> 
''' <br /> 
</p>

