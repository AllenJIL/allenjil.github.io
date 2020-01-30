---
layout: post
title: 'vim Chinese'
description: 'vim cheatsheet Chinese version - 中文速查表'
date: 2019-09-07
tag: program
---
[VIM CHEATSHEET]:<https://github.com/skywind3000/awesome-cheatsheets>"VIM CHEATSHEET"  

最近安装了Pycharm, 打算重新拾起VIM, 所以找了份cheatsheet。

This note is from [VIM CHEATSHEET].  

<!-- MarkdownTOC -->

- [1. 光标移动](#1-%E5%85%89%E6%A0%87%E7%A7%BB%E5%8A%A8)
- [2. 插入模式：进入退出](#2-%E6%8F%92%E5%85%A5%E6%A8%A1%E5%BC%8F%EF%BC%9A%E8%BF%9B%E5%85%A5%E9%80%80%E5%87%BA)
- [3. INSERT MODE](#3-insert-mode)
- [4. 文本编辑](#4-%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91)
- [5. 复制粘贴](#5-%E5%A4%8D%E5%88%B6%E7%B2%98%E8%B4%B4)
- [6. 文本对象](#6-%E6%96%87%E6%9C%AC%E5%AF%B9%E8%B1%A1)
- [7. 查找替换](#7-%E6%9F%A5%E6%89%BE%E6%9B%BF%E6%8D%A2)
- [9. 位置跳转](#9-%E4%BD%8D%E7%BD%AE%E8%B7%B3%E8%BD%AC)
- [10. VISUAL MODE](#10-visual-mode)
- [11. 文件操作](#11-%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C)
- [12. 缓存操作](#12-%E7%BC%93%E5%AD%98%E6%93%8D%E4%BD%9C)
- [13. 窗口操作](#13-%E7%AA%97%E5%8F%A3%E6%93%8D%E4%BD%9C)
- [14. 标签页](#14-%E6%A0%87%E7%AD%BE%E9%A1%B5)
- [15. 书签](#15-%E4%B9%A6%E7%AD%BE)
- [16. 常用设置](#16-%E5%B8%B8%E7%94%A8%E8%AE%BE%E7%BD%AE)
- [17. 帮助信息](#17-%E5%B8%AE%E5%8A%A9%E4%BF%A1%E6%81%AF)
- [18. 外部命令](#18-%E5%A4%96%E9%83%A8%E5%91%BD%E4%BB%A4)
- [19. Quickfix 窗口](#19-quickfix-%E7%AA%97%E5%8F%A3)
- [20. 拼写检查](#20-%E6%8B%BC%E5%86%99%E6%A3%80%E6%9F%A5)
- [21. 代码折叠](#21-%E4%BB%A3%E7%A0%81%E6%8A%98%E5%8F%A0)
- [22. 宏录制](#22-%E5%AE%8F%E5%BD%95%E5%88%B6)
- [23. 其他命令](#23-%E5%85%B6%E4%BB%96%E5%91%BD%E4%BB%A4)
- [24. Plugin](#24-plugin)
- [25. 网络资源](#25-%E7%BD%91%E7%BB%9C%E8%B5%84%E6%BA%90)
- [26. References](#26-references)

<!-- /MarkdownTOC -->


********

<a id="1-%E5%85%89%E6%A0%87%E7%A7%BB%E5%8A%A8"></a>
### 1. 光标移动

```

h                   光标左移，同 <Left> 键
j                   光标下移，同 <Down> 键
k                   光标上移，同 <Up> 键
l                   光标右移，同 <Right> 键
CTRL-F              下一页
CTRL-B              上一页
CTRL-U              上移半屏
CTRL-D              下移半屏
                  跳到行首（是数字零，不是字母O），效用等同于 <Home> 键
^                   跳到从行首开始第一个非空白字符
$                   跳到行尾，效用等同于 <End> 键
gg                  跳到第一行，效用等同于 CTRL+<Home>
G                   跳到最后一行，效用等同于 CTRL+<End>
nG                  跳到第n行，比如 10G 是移动到第十行
:n                  跳到第n行，比如 :10<回车> 是移动到第十行
10%                 移动到文件 10% 处
15|                 移动到当前行的 15列
w                   跳到下一个单词开头 (word: 标点或空格分隔的单词)
W                   跳到下一个单词开头 (WORD: 空格分隔的单词)
e                   跳到下一个单词尾部 (word: 标点或空格分隔的单词)
E                   跳到下一个单词尾部 (WORD: 空格分隔的单词)
b                   上一个单词头 (word: 标点或空格分隔的单词)
B                   上一个单词头 (WORD: 空格分隔的单词)
ge                  上一个单词尾
)                   向前移动一个句子（句号分隔）
(                   向后移动一个句子（句号分隔）
}                   向前移动一个段落（空行分隔）
{                   向后移动一个段落（空行分隔）
<enter>             移动到下一行首个非空字符
+                   移动到下一行首个非空字符（同回车键）
-                   移动到上一行首个非空字符
H                   移动到屏幕上部
M                   移动到屏幕中部
L                   移动到屏幕下部
fx                  跳转到下一个为 x 的字符
Fx                  跳转到上一个为 x 的字符
tx                  跳转到下一个为 x 的字符前
Tx                  跳转到上一个为 x 的字符前
;                   跳到下一个 f/t 搜索的结果
,                   跳到上一个 f/t 搜索的结果
<S-Left>            按住 SHIFT 按左键，向左移动一个单词
<S-Right>           按住 SHIFT 按右键，向右移动一个单词
<S-Up>              按住 SHIFT 按上键，向上翻页
<S-Down>            按住 SHIFT 按下键，向下翻页
gm                  移动到行中
gj                  光标下移一行（忽略自动换行）
gk                  光标上移一行（忽略自动换行）


```

<a id="2-%E6%8F%92%E5%85%A5%E6%A8%A1%E5%BC%8F%EF%BC%9A%E8%BF%9B%E5%85%A5%E9%80%80%E5%87%BA"></a>
### 2. 插入模式：进入退出

```

i                   在光标处进入插入模式
I                   在行首进入插入模式
a                   在光标后进入插入模式
A                   在行尾进入插入模式
o                   在下一行插入新行并进入插入模式
O                   在上一行插入新行并进入插入模式
gi                  进入到上一次插入模式的位置
<ESC>               退出插入模式
CTRL-[              退出插入模式（同 ESC 等价，但更顺手）


```

<a id="3-insert-mode"></a>
### 3. INSERT MODE

- 由 i, I, a, A, o, O 等命令进入插入模式后

```

<Up>                光标向上移动
<Down>              光标向下移动
<Left>              光标向左移动
<Right>             光标向右移动
<S-Left>            按住 SHIFT 按左键，向左移动一个单词
<S-Right>           按住 SHIFT 按右键，向右移动一个单词
<S-Up>              按住 SHIFT 按上键，向上翻页
<S-Down>            按住 SHIFT 按下键，向下翻页
<PageUp>            上翻页
<PageDown>          下翻页
<Delete>            删除光标处字符
<BS>                Backspace 向后删除字符
<Home>              光标跳转行首
<End>               光标跳转行尾
CTRL-W              向后删除单词
CTRL-O              临时退出插入模式，执行单条命令又返回插入模式
CTRL-\ CTRL-O       临时退出插入模式（光标保持），执行单条命令又返回插入模式
CTRL-R              插入寄存器（内部剪贴板编号）内容
CTRL-R =            插入表达式计算结果
CTRL-F              自动缩进
CTRL-U              删除当前行所有字符
CTRL-V {char}       插入非数字的字面量
CTRL-V {number}     插入三个数字代表的 ascii/unicode 字符
CTRL-V 065          插入 10进制 ascii 字符（两数字） 065 即 A字符
CTRL-V x41          插入 16进制 ascii 字符（三数字） x41 即 A字符
CTRL-V o101         插入  8进制 ascii 字符（三数字） o101 即 A字符
CTRL-V u1234        插入 16进制 unicode 字符（四数字）
CTRL-V U12345678    插入 16进制 unicode 字符（八数字）
CTRL-K {ch1} {ch2}  插入 digraph（见 :h digraph），快速输入日文或符号等


```

<a id="4-%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91"></a>
### 4. 文本编辑

```

r                   替换当前字符
R                   进入替换模式，直至 ESC 离开
s                   替换字符（删除光标处字符，并进入插入模式，前可接数量）
S                   替换行（删除当前行，并进入插入模式，前可接数量）
cc                  改写当前行（删除当前行并进入插入模式），同 S
cw                  改写光标开始处的当前单词
ciw                 改写光标所处的单词
caw                 改写光标所处的单词，并且包括前后空格（如果有的话）
c0                  改写到行首
c^                  改写到行首（第一个非零字符）
c$                  改写到行末
ci"                 改写双引号中的内容
ci'                 改写单引号中的内容
ci)                 改写小括号中的内容
ci]                 改写中括号中内容
ci}                 改写大括号中内容
cit                 改写 xml tag 中的内容
cis                 改写当前句子
c2w                 改写下两个单词
ct(                 改写到小括号前
x                   删除当前字符，前面可以接数字，3x代表删除三个字符
X                   向前删除字符
dd                  删除当前行
d0                  删除到行首
d^                  删除到行首（第一个非零字符）
d$                  删除到行末
D                   删除到行末（同 d$）
dw                  删除当前单词
diw                 删除光标所处的单词
daw                 删除光标所处的单词，并包含前后空格（如果有的话）
di"                 删除双引号中的内容
di'                 删除单引号中的内容
di)                 删除小括号中的内容
di]                 删除中括号中内容
di}                 删除大括号中内容
dit                 删除 xml tag 中的内容
dis                 删除当前句子
d2w                 删除下两个单词
dt(                 删除到小括号前
dgg                 删除到文件头部
dG                  删除到文件尾部
d}                  删除下一段
d{                  删除上一段
u                   撤销
U                   撤销整行操作
CTRL-R              撤销上一次 u 命令
J                   链接多行为一行
.                   重复上一次操作
~                   替换大小写
g~iw                替换当前单词的大小写
gUiw                将单词转成大写
guiw                将当前单词转成小写
<<                  减少缩进
>>                  增加缩进
==                  自动缩进
CTRL-A              增加数字
CTRL-X              减少数字


```

<a id="5-%E5%A4%8D%E5%88%B6%E7%B2%98%E8%B4%B4"></a>
### 5. 复制粘贴

```

p                   粘贴到光标后
P                   粘贴到光标前
v                   开始标记
y                   复制标记内容
V                   开始按行标记
CTRL-V              开始列标记
y$                  复制当前位置到本行结束的内容
yy                  复制当前行
Y                   复制当前行，同 yy
yiw                 复制当前单词
3yy                 复制光标下三行内容
v0                  选中当前位置到行首
v$                  选中当前位置到行末
viw                 选中当前单词
vi)                 选中小括号内的东西
vi]                 选中中括号内的东西
vis                 选中句子中的东西
gv                  重新选择上一次选中的文字
:set paste          设置粘贴模式（避免粘贴时自动缩进影响格式）
:set nopaste        光比删除模式
"?yy                复制当前行到寄存器 ? ，问号代表 0-9 的寄存器名称
"?p                 将寄存器 ? 的内容粘贴到光标后
"?P                 将寄存器 ? 的内容粘贴到光标前
:registers          显示所有寄存器内容
:[range]y           复制范围，比如 :20,30y 是复制20到30行，:10y 是复制第十行
:[range]d           删除范围，比如 :20,30d 是删除20到30行，:10d 是删除第十行
ddp                 交换两行内容：先删除当前行复制到寄存器，并粘贴


```

<a id="6-%E6%96%87%E6%9C%AC%E5%AF%B9%E8%B1%A1"></a>
### 6. 文本对象

- c,d,v,y 等命令后接文本对象，一般为：<范围 i/a><类型>

```

$                   到行末
                  到行首
^                   到行首非空字符
tx                  光标位置到字符 x 之前
fx                  光标位置到字符 x 之处
iw                  整个单词（不包括分隔符）
aw                  整个单词（包括分隔符）
iW                  整个 WORD（不包括分隔符）
aW                  整个 WORD（包括分隔符）
is                  整个句子（不包括分隔符）
is                  整个句子（不包括分隔符）
i)                  小括号内
a)                  小括号内（包含小括号本身）
i]                  中括号内
a]                  中括号内（包含中括号本身）
i}                  大括号内
a}                  大括号内（包含大括号本身）
i'                  单引号内
a'                  单引号内（包含单引号本身）
i"                  双引号内
a"                  双引号内（包含双引号本身）


```

<a id="7-%E6%9F%A5%E6%89%BE%E6%9B%BF%E6%8D%A2"></a>
### 7. 查找替换

```

/pattern            从光标处向文件尾搜索 pattern
?pattern            从光标处向文件头搜索 pattern
n                   向同一方向执行上一次搜索
N                   向相反方向执行上一次搜索
*                   向前搜索光标下的单词

### 8. 向后搜索光标下的单词

:s/p1/p2/g          将当前行中全替换p1为p2
:%s/p1/p2/g         将当前文件中全替换p1为p2
:%s/p1/p2/gc        将当前文件中全替换p1为p2，并且每处询问你是否替换
:10,20s/p1/p2/g     将第10到20行中所有p1替换为p2
:%s/1\\2\/3/123/g   将“1\2/3” 替换为 “123”（特殊字符使用反斜杠标注）


```

<a id="9-%E4%BD%8D%E7%BD%AE%E8%B7%B3%E8%BD%AC"></a>
### 9. 位置跳转

```

CTRL-O              跳转到上一个位置
CTRL-I              跳转到下一个位置
CTRL-^              跳转到 alternate file (当前窗口的上一个文件）
%                   跳转到 {} () [] 的匹配
gd                  跳转到定义
[[                  跳转到上一个顶层函数（比如C语言以大括号分隔）
]]                  跳转到下一个顶层函数（比如C语言以大括号分隔）
[m                  跳转到上一个成员函数
]m                  跳转到下一个成员函数
[{                  跳转到上一处未匹配的 {
]}                  跳转到下一处未匹配的 }
[(                  跳转到上一处未匹配的 (
])                  跳转到下一处未匹配的 )
[c                  上一个不同处（diff时）
]c                  下一个不同处（diff时）
[/                  跳转到 C注释开头
]/                  跳转到 C注释结尾


```

<a id="10-visual-mode"></a>
### 10. VISUAL MODE

- 由 v, V, CTRL-V 进入的可视模式

```

>                   增加缩进
<                   减少缩进
d                   删除文字
c                   改写文字
y                   拷贝文字
~                   转换大小写
o                   跳转到标记区的另外一端
O                   跳转到标记块的另外一端
u                   标记区转换为小写
U                   标记区转换为大写
<Esc>               退出可视模式


```

<a id="11-%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C"></a>
### 11. 文件操作

```

:w                  保存文件
:w <filename>       按名称保存文件
:e <filename>       打开文件并编辑
:saveas <filename>  另存为文件
:r <filename>       读取文件并将内容插入到光标后
:r !dir             将 dir 命令的输出捕获并插入到光标后
:close              关闭文件
:q                  退出
:q!                 强制退出
:wa                 保存所有文件
:cd <path>          切换 Vim 当前路径
:pwd                显示 Vim 当前路径
gf                  打开名称为光标下文件名的文件
:new                打开一个新的窗口编辑新文件
:enew               在当前窗口创建新文件
:vnew               在左右切分的新窗口中编辑新文件
:tabnew             在新的标签页中编辑新文件


```

<a id="12-%E7%BC%93%E5%AD%98%E6%93%8D%E4%BD%9C"></a>
### 12. 缓存操作

```

:ls                 查案缓存列表
:bn                 切换到下一个缓存
:bp                 切换到上一个缓存
:bd                 删除缓存
:b 1                切换到1号缓存
:b abc              切换到文件名为 abc 开头的缓存
:badd <filename>    将文件添加到缓存列表
:set hidden         设置隐藏模式（未保存的缓存可以被切换走，或者关闭）
:set nohidden       关闭隐藏模式（未保存的缓存不能被切换走，或者关闭）
n CTRL-^            切换缓存，先输入数字的缓存编号，再按 CTRL + 6


```

<a id="13-%E7%AA%97%E5%8F%A3%E6%93%8D%E4%BD%9C"></a>
### 13. 窗口操作

```

:sp <filename>      上下切分窗口并在新窗口打开文件 filename
:vs <filename>      左右切分窗口并在新窗口打开文件 filename
CTRL-W s            上下切分窗口
CTRL-W v            左右切分窗口
CTRL-W w            循环切换到下一个窗口
CTRL-W W            循环切换到上一个窗口
CTRL-W p            跳到上一个访问过的窗口
CTRL-W c            关闭当前窗口
CTRL-W o            关闭其他窗口
CTRL-W h            跳到左边的窗口
CTRL-W j            跳到下边的窗口
CTRL-W k            跳到上边的窗口
CTRL-W l            跳到右边的窗口
CTRL-W +            增加当前窗口的行高，前面可以加数字
CTRL-W -            减少当前窗口的行高，前面可以加数字
CTRL-W <            减少当前窗口的列宽，前面可以加数字
CTRL-W >            增加当前窗口的列宽，前面可以加数字
CTRL-W =            让所有窗口宽高相同
CTRL-W H            将当前窗口移动到最左边
CTRL-W J            将当前窗口移动到最下边
CTRL-W K            将当前窗口移动到最上边
CTRL-W L            将当前窗口移动到最右边
CTRL-W x            交换窗口
CTRL-W f            在新窗口中打开名为光标下文件名的文件
CTRL-W gf           在新标签页中打开名为光标下文件名的文件
CTRL-W R            旋转窗口
CTRL-W T            将当前窗口移到新的标签页中
CTRL-W P            跳转到预览窗口
CTRL-W z            关闭预览窗口


```

<a id="14-%E6%A0%87%E7%AD%BE%E9%A1%B5"></a>
### 14. 标签页

```

:tabs               显示所有标签页
:tabe <filename>    在新标签页中打开文件 filename
:tabn               下一个标签页
:tabp               上一个标签页
:tabc               关闭当前标签页
:tabo               关闭其他标签页
:tabn n             切换到第n个标签页，比如 :tabn 3 切换到第三个标签页
:tabm n             标签移动
ngt                 切换到第n个标签页，比如 2gt 将会切换到第二个标签页
gt                  下一个标签页
gT                  上一个标签页


```

<a id="15-%E4%B9%A6%E7%AD%BE"></a>
### 15. 书签

```

:marks              显示所有书签
ma                  保存当前位置到书签 a ，书签名可以用 a-z（作用范围为文件内部）, A-Z（作用范围为所有文件） 26*2个字母
'a                  跳转到书签 a所在的行
`a                  跳转到书签 a所在位置
`.                  跳转到上一次编辑的行
'A                  跳转到全文书签 A

 
```

<a id="16-%E5%B8%B8%E7%94%A8%E8%AE%BE%E7%BD%AE"></a>
### 16. 常用设置

```

:set nocompatible   设置不兼容原始 vi 模式（必须设置在最开头）
:set bs=?           设置BS键模式，现代编辑器为 :set bs=eol,start,indent
:set sw=4           设置缩进宽度为 4
:set ts=4           设置制表符宽度为 4
:set noet           设置不展开 tab 成空格
:set et             设置展开 tab 成空格
:set winaltkeys=no  设置 GVim 下正常捕获 ALT 键
:set nowrap         关闭自动换行
:set ttimeout       允许终端按键检测超时（终端下功能键为一串ESC开头的扫描码）
:set ttm=100        设置终端按键检测超时为100毫秒
:set term=?         设置终端类型，比如常见的 xterm
:set ignorecase     设置搜索是否忽略大小写
:set list           设置显示制表符和换行符
:set number         设置显示行号，禁止显示行号可以用 :set nonumber
:set paste          进入粘贴模式（粘贴时禁用缩进等影响格式的东西）
:set nopaste        结束粘贴模式
:set spell          允许拼写检查
:set hlsearch       设置高亮查找
:set ruler          总是显示光标位置
:set incsearch      查找输入时动态增量显示查找结果
:set insertmode     Vim 始终处于插入模式下，使用 ctrl-o 临时执行命令
:set all            列出所有选项设置情况
:syntax on          允许语法高亮
:syntax off         禁止语法高亮


```

<a id="17-%E5%B8%AE%E5%8A%A9%E4%BF%A1%E6%81%AF"></a>
### 17. 帮助信息

```

:h tutor            入门文档
:h quickref         快速帮助
:h index            查询 Vim 所有键盘命令定义
:h CTRL-H           查询普通模式下 CTRL-H 是干什么的
:h i_CTRL-H         查询插入模式下 CTRL-H 是干什么的
:h i_<Up>           查询插入模式下方向键上是干什么的
:h pattern.txt      正则表达式帮助
:h eval             脚本编写帮助
:h function-list    查看 VimScript 的函数列表 
:h windows.txt      窗口使用帮助
:h tabpage.txt      标签页使用帮助
:h +timers          显示对 +timers 特性的帮助
:h :!               查看如何运行外部命令
:h set-termcap      查看如何设置按键扫描码
:version            显示当前 Vim 的版本号和特性


```

<a id="18-%E5%A4%96%E9%83%A8%E5%91%BD%E4%BB%A4"></a>
### 18. 外部命令

```

:!ls                运行外部命令 ls，并等待返回
:r !ls              将外部命令 ls 的输出捕获，并插入到光标后
:w !sudo tee %      sudo以后保存当前文件
:call system('ls')  调用 ls 命令，但是不显示返回内容
:!start notepad     Windows 下启动 notepad，最前面可以加 silent
:sil !start cmd     Windows 下当前目录打开 cmd
:%!prog             运行文字过滤程序，如整理 json格式 :%!python -m json.tool


```

<a id="19-quickfix-%E7%AA%97%E5%8F%A3"></a>
### 19. Quickfix 窗口

```
:copen              打开 quickfix 窗口（查看编译，grep等信息）
:copen 10           打开 quickfix 窗口，并且设置高度为 10
:cclose             关闭 quickfix 窗口
:cfirst             跳到 quickfix 中第一个错误信息
:clast              跳到 quickfix 中最后一条错误信息
:cc [nr]            查看错误 [nr]
:cnext              跳到 quickfix 中下一个错误信息
:cprev              跳到 quickfix 中上一个错误信息


```

<a id="20-%E6%8B%BC%E5%86%99%E6%A3%80%E6%9F%A5"></a>
### 20. 拼写检查

```

:set spell          打开拼写检查
:set nospell        关闭拼写检查
]s                  下一处错误拼写的单词
[s                  上一处错误拼写的单词
zg                  加入单词到拼写词表中
zug                 撤销上一次加入的单词
z=                  拼写建议


```

<a id="21-%E4%BB%A3%E7%A0%81%E6%8A%98%E5%8F%A0"></a>
### 21. 代码折叠

```

za                  切换折叠
zA                  递归切换折叠
zc                  折叠光标下代码
zC                  折叠光标下所有代码
zd                  删除光标下折叠
zD                  递归删除所有折叠
zE                  删除所有折叠
zf                  创建代码折叠
zF                  指定行数创建折叠
zi                  切换折叠
zM                  折叠所有代码，设置 foldlevel=0，设置 foldenable
zR                  打开所有代码，设置 foldlevel 为最大值
zn                  折叠 none，重置 foldenable 并打开所有代码
zN                  折叠 normal，重置 foldenable 并恢复所有折叠
zo                  打开一层代码
zO                  打开光标下所有代码折叠


```

<a id="22-%E5%AE%8F%E5%BD%95%E5%88%B6"></a>
### 22. 宏录制

```

qa                  开始录制名字为 a 的宏
q                   结束录制宏
@a                  播放名字为 a 的宏
@:                  播放上一个宏


```

<a id="23-%E5%85%B6%E4%BB%96%E5%91%BD%E4%BB%A4"></a>
### 23. 其他命令

```

CTRL-E              向上卷屏
CTRL-Y              向下卷屏
CTRL-G              显示正在编辑的文件名，以及大小和位置信息
zz                  调整光标所在行到屏幕中央
zt                  调整光标所在行到屏幕上部
zb                  调整光标所在行到屏幕下部
ga                  显示光标下字符的 ascii 码或者 unicode 编码
K                   查询光标下单词的帮助
:set ff=unix        设置换行为 unix
:set ff=dos         设置换行为 dos
:set ff?            查看换行设置
:set nohl           清除搜索高亮
:earlier 15m        回退到15分钟前的文件内容
:.!date             在当前窗口插入时间
:%!xxd              开始二进制编辑
:%!xxd -r           保存二进制编辑
:r !curl -sL {URL}  读取 url 内容添加到光标后


```

<a id="24-plugin"></a>
### 24. Plugin

- https://github.com/tpope/vim-commentary

```

gcc                 注释当前行
gc{motion}          注释 {motion} 所标注的区域，比如 gcap 注释整段
gci{                注释大括号内的内容
gc                  在 Visual Mode 下面按 gc 注释选中区域
:7,17Commentary     注释 7 到 17 行


```

- https://github.com/godlygeek/tabular

```

:Tabularize /,      按逗号对齐
:Tabularize /=      按等于号对齐
:Tabularize /\|     按竖线对齐
:Tabularize /\|/r0  按竖线靠右对齐


```

- https://github.com/tpope/vim-unimpaired

```

[space              向上插入空行
]space              向下插入空行
[e                  替换当前行和上一行
]e                  替换当前行和下一行
[x                  XML 编码
]x                  XML 解码
[u                  URL 编码
]u                  URL 解码
[y                  C 字符串编码
]y                  C 字符串解码
[q                  上一个 quickfix 错误
]q                  下一个 quickfix 错误
[Q                  第一个 quickfix 错误
]Q                  最后一个 quickfix 错误
[f                  切换同目录里上一个文件
]f                  切换同目录里下一个文件
[os                 设置 :set spell
]os                 设置 :set nospell
=os                 设置 :set invspell
[on                 显示行号
]on                 关闭行号
[ol                 显示回车和制表符 :set list
]ol                 不显示回车和制表符 :set nolist
[b                  缓存切换到上一个文件，即 :bp
]b                  缓存切换到下一个文件，即 :bn
[B                  缓存切换到第一个文件，即 :bfirst
]B                  缓存切换到最后一个文件，即 :blast


```

- https://github.com/skywind3000/asyncrun.vim

```

:AsyncRun ls        异步运行命令 ls 结果输出到 quickfix 使用 :copen 查看
:AsyncRun -raw ls   异步运行命令 ls 结果不匹配 errorformat


```

- https://github.com/vim-scripts/argtextobj.vim

```

cia                 改写函数参数
caa                 改写函数参数（包括逗号分隔）
dia                 删除函数参数
daa                 删除函数参数（包括逗号分隔）
via                 选取函数参数
vaa                 选取函数参数（包括逗号分隔）
yia                 复制函数参数
yaa                 复制函数参数（包括逗号分隔）


```

<a id="25-%E7%BD%91%E7%BB%9C%E8%B5%84%E6%BA%90"></a>
### 25. 网络资源

```

最新版本            https://github.com/vim/vim   
Windows 最新版      https://github.com/vim/vim-win32-installer/releases
插件浏览            http://vimawesome.com
reddit              https://www.reddit.com/r/vim/
正确设置 ALT/BS 键  http://www.skywind.me/blog/archives/2021
视频教程            http://vimcasts.org/
中文帮助            http://vimcdoc.sourceforge.net/doc/help.html
五分钟脚本入门      http://andrewscala.com/vimscript/
脚本精通            http://learnvimscriptthehardway.stevelosh.com/
中文脚本帮助        vimcdoc.sourceforge.net/doc/eval.html


```

<a id="26-references"></a>
### 26. References

```

https://github.com/groenewege/vimrc/blob/master/vim_cheat_sheet.txt
http://blog.g-design.net/post/4789778607/vim-cheat-sheet
http://www.keyxl.com/aaa8263/290/VIM-keyboard-shortcuts.htm
http://jmcpherson.org/editing.html
http://www.fprintf.net/vimCheatSheet.html
http://www.ouyaoxiazai.com/article/24/654.html
http://bbs.it-home.org/thread-80794-1-1.html
http://www.lpfrx.com/wp-content/uploads/2008/09/vi.jpg
http://michael.peopleofhonoronly.com/vim/

********