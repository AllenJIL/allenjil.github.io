---
layout: post
title: "Python 内置函数生成随机数"
description: "Use Python generate random number"
date: 2018-01-19
tag: Notes
---
<p>
# Random
# 用内置函数生成随机数
# 删除# 调用测试 用于更好理解
# - 记账函数
# - 整形随机数生成器函数
# - 随机序列生成器函数
# - 基于统计分布函数
#
# <a href="https://github.com/AllenJIL/Python-Scientific-Computing/raw/master/Random.py" target="_blank" rel="noopener">下载 (右键另存为)</a>
#-----------------------------------------
</p>
<p>
import random
</p>
<p>
#记账函数(生成相同随机数)
#-----------------------------------------
#函数初始化随机数生成器，当a=None时，系统时间当作seed值
#random.seed(a= None, version = 2)

#getstate 返回一个state，被用于 setstate 恢复生成器内部状态
#random.getstate()
#random.setstate(state)
</p>
<p>
#整形随机数生成器函数
#-----------------------------------------
#浮点随机值 0~1
print (random.random())

#范围随机整数，忽略第一个参数则默认为0
#print (random.randrange(20)) #0~19
#print (random.randint(0,19))

#0~99中3的随机倍数,3为step
#print (random.randrange(0,99,3))
</p>
<p>
#随机序列生成器函数
#-----------------------------------------
#随机选择值
#print (random.choice('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))

items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
#混合重排样本
#random.shuffle(items)
#print (items)

#给定大小的随机样本
#print (random.sample(items,5))

#权重选择，给定概率选择随机值
#weighted_choices = [('Three', 3), ('Two', 2), ('One', 1), ('Four',4)]
#population = [val for val, cnt in weighted_choices for i in range(cnt)]
#print (random.choice(population))
</p>
<p>
# 基于统计分布函数
#----------------------------------------
#范围内均匀分布随机值，随机数概率一样
#print (random.uniform(1,9))

#三角分布随机浮点数(low,high,mode)
#print (random.triangular(0,1,10))

#贝塔分布 (Beta Distribution) (alpha&gt;0,beta&gt;0) 0&lt;值&lt;1 #print (random.betavariate(3,2)) #指数分布 (Exponential Distribution) (lambd!=0) #print (random.expovariate(0.5)) #伽马分布 (Gama Distribution) (alpha&gt;0,beta&gt;0)
#print (random.gammavariate(3,2))

#正态分布 (Normal Distribution) (mu均值,sigma标准差)
#print (random.normalvariate(1,2))

#高斯分布 (Gauss Normal Distribution) (mu均值,sigma标准差)
#print (random.gauss(1,2))

#对数正态分布 (Logarithmic Normal Distribution) (mu均值,sigma标准差)
#print (random.lognormvariate(1,2))

#冯米塞斯分布 (Von Mises Distribution) (0&lt;=mu&lt;=2*pi 角度均值,kappa&gt;=0 浓度)
#print (random.vonmisesvariate(1,2))

#帕累托分布 (Pareto Distribution) (alpha形状)
#print (random.paretovariate(1))

#Weibull分布 (Weibull Distribution) (alpha 标量, beta 形状)
#print (random.weibullvariate(1,2))

#泊松分布 (Poisson Distribution)
'''
import math
def nextPoisson (lambdaValue):
elambda = math.exp(-1*lambdaValue)
product = 1
count = 0

while (product &gt;= elambda):
product *= random.random()
result = count
count += 1
return result

for x in range(1,9):
print (nextPoisson(8))
'''
</p>