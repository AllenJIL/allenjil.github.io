---
layout: post
title: "Sublime Text Completions"
description: "用Sublime Text completions 自定义多个snippets 快速编写代码"
date: 2019-04-13
tag: Sublime Text 技巧
---



[Mitchell]:<http://blog.useasp.net/archive/2015/11/30/sublime-text-create-multiple-snippets-in-one-file.aspx> "Mitchell"
[Snippets]:<http://sublimetext.info/docs/en/extensibility/snippets.html> "Snippets"
[Completions]:<http://sublimetext.info/docs/en/extensibility/completions.html> "Completions"


作为不是一个学计算机的学生，之前打文档的时候一直不知道可以用代码片段snipperts直接呼出使用，减少代码的出错几率与提高效率。因为要经常打 $\LaTeX$ 数学公式，后来忍无可忍，在网上找了下教程[Mitchell]，并自己做了一个[My completions](#my-completions)(completions为一个文件包含多个snippets)，使用了一段时间，感觉挺好用的就分享给大家。  

**************

<!-- MarkdownTOC -->

- [Snippet](#snippet)
- [Completions](#completions)
- [PlaceHolder](#placeholder)
- [My completions](#my-completions)

<!-- /MarkdownTOC -->

**************

首先，先介绍一下基础的单个[Snippets]的用法。

<a id="snippet"></a>
### Snippet

首先在Sublime Text的菜单里 `Tools->Developer->New Snippet...`创建新的代码片段。点击后，出现以下模板  
```
<snippet>
    <content><![CDATA[
Hello, ${1:this} is a ${2:snippet}.
]]></content>
    <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
    <!-- <tabTrigger>hello</tabTrigger> -->
    <!-- Optional: Set a scope to limit where the snippet will trigger -->
    <!-- <scope>source.python</scope> -->
</snippet>
```

* _content_: `Hello, ${1:this} is a ${2:snippet}.` 这个是自定义的代码片段，表示将会显示的数据内容。 ${1:this} 这个是 [PlaceHolder](#placeholder) 占位符，之后会讲  
* _tabTrigger_: 开启Tab触发，这个里面填写的是触发字符串，当在编辑时，和此内容匹配时，即可用Tab直接呼出content内容来替换当前位置tabTrigger的内容  
* _scope_: 应用范围，因为我是用markdown来编写博客，所以我用的是`text.html.markdown,text.html`。 用于python，就是`source.python`。针对js就是`source.js`，以此类推    

这里是snippet代码片段例子  

```
<snippet>
    <content><![CDATA[
呼出的文字
]]></content>
    <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
    <tabTrigger>呼</tabTrigger>
    <!-- Optional: Set a scope to limit where the snippet will trigger -->
    <scope>text.html.markdown</scope>
</snippet>
```

确认无误，我们保存文件即可完成一个代码片段的添加。

代码片段的文件一定要保存为：`.sublime-snippet` 的后缀，否则无法识别，路径放在：`.\Data\Packages\User`下  

************

<a id="completions"></a>
### Completions  

因为像上面这样一个个创建snippet，其实是个很麻烦并且很繁琐的事情，所以为了方便管理使用，[Completions]提供了个一个文件补全多个__snippets__的效果。  

Completions的文件后缀为`.sublime-completions`，路径放在：`.\Data\Packages\User`下

初始的completions文件是这样的：  
```
{
   "scope": "text.html.markdown,text.html",
 
   "completions":
   [
      { "trigger": "doc", "contents": "'''\n${1:TODO DOC HERE}\n'''" }
   ]
}
```

这是一个针对markdown文件的completions，当在`.md`文件中输入`doc` 之后，按`tab` ，则可以完成contents插入到当前位置（替换掉已经的输入）。

* _scope_： 应用范围，和snippet一样  
* _completions_: 这里面定义你需要的各种代码片段  
* _trigger_: 关键字，和snippet的tabTrigger类似，不过要放在`""`里。  
* _contents_: 内容模板，就是要替换trigger中的内容，和snippet的tabTrigger类似，不过要放在`""`里。  
* 如果有特殊字符，记得使用转义. `\`为`\\`，`"`为`\"`。。。。。。  

这里是我自己用的[My completions](#my-completions)，用来更方便的打 $\LaTeX$数学公式  

*************

<a id="placeholder"></a>
### PlaceHolder  

在snippet或者completions中，content(s)里面是可以使用占位符的，占位符以`$`开头，可以一般有两种方式：

1. `$+数字`：这个占位符的数字从1开始，可以一直递增，也可以重复，如：
    ```
    Here is the message from Xiuchuanz.com, My Name is $1:
    Current Time: $2
    message: $3
    —— $1
    ```

    在插入后，光标会停留在`$1`的位置（注意，这里有两个地方），当你输入内容的时候，这两个占位符的地方都将同时输入。使用`Tab`来移动到下一个位置(`$2`的位置)。也许我们想为每个位置提供默认值，这个时候可以使用第二种方式：  

2. `${数字:默认内容}`：这个占位符中数字和上种方式一致，如：  
    ```
    Here is the message from Xiuchuanz.com, My Name is ${1:Xiuchuan}:
    Current Time: ${2:13/04/2019 18:04 UK}
    message: ${3:Welcome Guest}
    —— ${1:Xiuchuan}
    ```
    这个时候，插入的内容是有默认值的，如果不用改变，直接`Tab`到下一个位置即可  

********************

<a id="my-completions"></a>
### My completions  

这里是我自己用的completions，用来更方便的打 $\LaTeX$数学公式

```
{
    "scope": "text.html.markdown,text.html",

    "completions":
    [
      { "trigger": "\\ve", "contents": "\\lvert $1 \\rvert"},
      { "trigger": "\\Ve", "contents": "\\lVert $1 \\rVert"},
      { "trigger": "\\bra", "contents": "\\lbrace $1 \\rbrace"},

      { "trigger": "\\disp", "contents": "\\displaystyle"},
      { "trigger": "\\fra", "contents": "\\frac{$1}{$2}"},
      { "trigger": "\\dfra", "contents": "\\displaystyle \\frac{$1}{$2}"},
      { "trigger": "\\sum", "contents": "\\displaystyle \\sum_{${1:down}}^{${2:up}}"},
      { "trigger": "\\int", "contents": "\\int_{${1:\\mathbb\\{R\\}^n}}"},
      { "trigger": "\\dint", "contents": "\\displaystyle \\int_{${1:\\mathbb\\{R\\}^n}}"},
      { "trigger": "\\lim", "contents": "\\displaystyle \\lim_{$1}"},

      { "trigger": "\\al", "contents": "\\alpha"},
      { "trigger": "\\be", "contents": "\\beta"},
      { "trigger": "\\de", "contents": "\\delta"},
      { "trigger": "\\ga", "contents": "\\gamma"},
      { "trigger": "\\ep", "contents": "\\epsilon"},
      { "trigger": "\\pa", "contents": "\\partial"},
      { "trigger": "\\da", "contents": "\\dagger"},
      { "trigger": "\\pe", "contents": "\\perp"},
      { "trigger": "\\vp", "contents": "\\varphi"},
      { "trigger": "\\tilde", "contents": "\\widetilde{$1}"},
      { "trigger": "\\hat", "contents": "\\widehat{$1}"},
      { "trigger": "\\bar", "contents": "\\overline{$1}"},

      { "trigger": "\\la", "contents": "\\longleftarrow"},
      { "trigger": "\\ra", "contents": "\\longrightarrow"},
      { "trigger": "\\sl", "contents": "\\backslash"},
      { "trigger": "\\arrow", "contents": "\\xrightarrow[${2:bottom}]{${1:above}}"},

      { "trigger": "\\mb", "contents": "\\mathbb{$1}"},
      { "trigger": "\\mc", "contents": "\\mathcal{$1}"},
      { "trigger": "\\mf", "contents": "\\mathfrak{$1}"},
      { "trigger": "\\ms", "contents": "\\mathsf{$1}"},
      { "trigger": "\\mr", "contents": "\\ \\mathrm{$1} \\ "},

      { "trigger": "\\where", "contents": "\\ \\mathrm{where} \\ "},
      { "trigger": "\\with", "contents": "\\ \\mathrm{with} \\ "},
      { "trigger": "\\as", "contents": "\\ \\mathrm{as} \\ "},
      { "trigger": "\\and", "contents": "\\ \\mathrm{and} \\ "},
      { "trigger": "\\fa", "contents": "\\ \\forall \\ "},
      { "trigger": "\\te", "contents": "\\ \\exists \\ "},
      

      { "trigger": "\\cup", "contents": "\\cup_\\{${1:k}=0\\}^\\{${2:\\infty}\\}"},
      { "trigger": "\\cap", "contents": "\\cap_\\{${1:k}=0\\}^\\{${2:\\infty}\\}"},

      { "trigger": "hlink", "contents": "[${1:title}]:<${2:link}> \"${1:title}\""},
      { "trigger": "mdpost", "contents": "---\nlayout: post\ntitle: \"${1:title}\"\ndescription: \"${2:description}\"\ndate: 2019-${3:month}-${4:date}\ntag: ${5:tage}\n---\n"},
      { "trigger": "dlfile", "contents": "<a href=\"/files/${1:文件}\" target=\"_blank\">${1:文件}下载</a>"},
      
    ]
}
```

此代码会持续性更新 14/04/2019 21:24 UK  

<a href="/files/math.sublime-completions" target="_blank">math.sublime-completions下载</a> 13/04/2019 18:26 UK  

