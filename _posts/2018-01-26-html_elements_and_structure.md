---
layout: post
title: HTML: Elements and Structure
description: Notes form www.Codecademy.com
tag: Notes
---

<h1><strong>Elements:</strong></h1>
&lt;!DOCTYPE html&gt; This declaration is an instruction. It tells the browser what type of document to expect, along with what version of HTML is being used in the document.

&lt;html&gt;&lt;/html&gt; Anything between the tags will be interpreted as HTML code.

&lt;head&gt;&lt;/head&gt; contains the metadata for a web page. Metadata is information about the page that isn't displayed directly on the web page.

&lt;title&gt;The browser displays the title of the page.&lt;/title&gt;

&lt;body&gt; Only content inside the body tags can be displayed to the screen. &lt;body/&gt;

&lt;br /&gt; The line break element is a self-closing tag.

&lt;!-- This is a comment that the browser will not display. --&gt;

&lt;h1&gt;&lt;/h1&gt;  used for main headings. All other smaller headings are used for subheadings. &lt;h2&gt;&lt;h3&gt;&lt;h4&gt;&lt;h5&gt;&lt;h6&gt;

&lt;p&gt;Paragraphs  simply contain a block of plain text&lt;/p&gt;

&lt;div&gt;&lt;/div&gt; can contain any text or other HTML elements. They are primarily used to divide HTML documents into sections. non-semantic tags

&lt;span&gt;&lt;/span&gt; contain short pieces of text or other HTML. They are primarily used to wrap small pieces of content that are on the same line as other content and do not break text into different sections.

&lt;em&gt; <em>italic emphasis</em> &lt;/em&gt;

&lt;strong&gt; <strong>bold emphasis</strong> &lt;/strong&gt;

&lt;ul&gt;&lt;li&gt;Unordered list with · &lt;/li&gt;&lt;/ul&gt;

&lt;ol&gt;&lt;li&gt;Ordered list is numbered&lt;/li&gt;&lt;/ol&gt;

&lt;img src="image-location.com" alt="description of the image" /&gt; Images

&lt;video src="myVideo.mp4" width="#" height="#" controls&gt; Video not supported &lt;/video&gt;

&lt;a href="https://location.com/" target="_blank"&gt;This Is A Link To Website&lt;/a&gt; The target attribute specifies that a link should open in a new window.

&lt;a href="./index.html"&gt;Displaying index.html&lt;/a&gt;

&lt;p id="id"&gt; id remembers the purpose of a link&lt;/p&gt; &lt;a href="#id"&gt;ID&lt;/a&gt;

&lt;nav&gt;Navigation is used to wrap these links in order to organize the content on your web page.&lt;/nav&gt; semantic tags

<hr />

&lt;table&gt;&lt;/table&gt; contains all of the tabular data you plan on displaying

&lt;tbody&gt;&lt;tr&gt;&lt;/tr&gt;&lt;/tbody&gt; contain the all of the table's data, excluding the table headings

&lt;thead&gt;&lt;th&gt;&lt;/th&gt;&lt;/thead&gt; section off the table's headings

&lt;tfoot&gt;&lt;/tfoot&gt; the footer contains the totals of the data in the table

&lt;table&gt;&lt;tr&gt;&lt;/tr&gt;&lt;/table&gt; add rows using the table row element

&lt;table&gt;&lt;tr&gt;&lt;td&gt;add data using the table data element&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;

&lt;th scope="row"&gt; The table heading element to add titles to rows and columns&lt;/th&gt;

scope = "row" or "col"  this value makes it clear that the heading is for a row or column.

<del>&lt;table border="1"&gt; is deprecated</del>

table, td { border: 1px solid black; } Using CSS

&lt;td colspan="2"&gt; denote the positive integer  number of columns it spans across.&lt;/td&gt; rowspan="2" is the same for row

&nbsp;