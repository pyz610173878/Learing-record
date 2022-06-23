# JavaScript HTML DOM 文档

-   [DOM 方法](https://www.w3school.com.cn/js/js_htmldom_methods.asp)
-   [DOM 元素](https://www.w3school.com.cn/js/js_htmldom_elements.asp)

**HTML DOM 文档对象是您的网页中所有其他对象的拥有者。** 文档对象模型。

## HTML DOM Document 对象

文档对象代表您的网页。

如果您希望访问 HTML 页面中的任何元素，那么您总是从访问 document 对象开始。

下面是一些如何使用 document 对象来访问和操作 HTML 的实例。

## 查找 HTML 元素

| 方法                                    | 描述                             |
| :-------------------------------------- | :------------------------------- |
| document.getElementById(*id*)           | 通过元素 id 来查找元素           |
| document.getElementsByTagName(*name*)   | 通过标签名来查找元素             |
| document.getElementsByClassName(*name*) | 通过类名来查找元素               |
| document.getElementsByClassName(*name*) | 通过 CSS 选择器查找 HTML 元素    |
| document.getElementsByClassName(*name*) | 通过 HTML 对象集合查找 HTML 元素 |
| document.querySelector()                | id 标签名 类名 选择器都支持      |

## 改变 HTML 元素

| 方法                                       | 描述                   |
| ------------------------------------------ | ---------------------- |
| element.innerHTML =  *new html content*    | 改变元素的 inner HTML  |
| element.attribute = *new value*            | 改变 HTML 元素的属性值 |
| element.setAttribute(*attribute*, *value*) | 改变 HTML 元素的属性值 |
| element.style.property = *new style*       | 改变 HTML 元素的样式   |

## 添加和删除元素

| 方法                              | 描述             |
| --------------------------------- | ---------------- |
| document.createElement(*element*) | 创建 HTML 元素   |
| document.removeChild(*element*)   | 删除 HTML 元素   |
| document.appendChild(*element*)   | 添加 HTML 元素   |
| document.replaceChild(*element*)  | 替换 HTML 元素   |
| document.write(*text*)            | 写入 HTML 输出流 |

## 添加事件处理程序

| 方法                                                     | 描述                            |
| -------------------------------------------------------- | ------------------------------- |
| document.getElementById(id).onclick = function(){*code*} | 向 onclick 事件添加事件处理程序 |

## 查找 HTML 对象

首个 HTML DOM Level 1 (1998)，定义了 11 个 HTML 对象、对象集合和属性。它们在 HTML5 中仍然有效。

后来，在 HTML DOM Level 3，加入了更多对象、集合和属性。

| 属性                         | 描述                                        | DOM  |
| ---------------------------- | ------------------------------------------- | ---- |
| document.anchors             | 返回拥有 name 属性的所有 <a> 元素。         | 1    |
| document.applets             | 返回所有 <applet> 元素（HTML5 不建议使用）  | 1    |
| document.baseURI             | 返回文档的绝对基准 URI                      | 3    |
| document.body                | 返回 <body> 元素                            | 1    |
| document.cookie              | 返回文档的 cookie                           | 1    |
| document.doctype             | 返回文档的 doctype                          | 3    |
| document.documentElement     | 返回 <html> 元素                            | 3    |
| document.documentMode        | 返回浏览器使用的模式                        | 3    |
| document.documentURI         | 返回文档的 URI                              | 3    |
| document.domain              | 返回文档服务器的域名                        | 1    |
| document.domConfig           | 废弃。返回 DOM 配置                         | 3    |
| document.embeds              | 返回所有 <embed> 元素                       | 3    |
| document.forms               | 返回所有 <form> 元素                        | 1    |
| document.head                | 返回 <head> 元素                            | 3    |
| document.images              | 返回所有 <img> 元素                         | 1    |
| document.implementation      | 返回 DOM 实现                               | 3    |
| document.inputEncoding       | 返回文档的编码（字符集）                    | 3    |
| document.lastModified        | 返回文档更新的日期和时间                    | 3    |
| document.links               | 返回拥有 href 属性的所有 <area> 和 <a> 元素 | 1    |
| document.readyState          | 返回文档的（加载）状态                      | 3    |
| document.referrer            | 返回引用的 URI（链接文档）                  | 1    |
| document.scripts             | 返回所有 <script> 元素                      | 3    |
| document.strictErrorChecking | 返回是否强制执行错误检查                    | 3    |
| document.title               | 返回 <title> 元素                           | 1    |
| document.URL                 | 返回文档的完整 URL                          | 1    |

竟然DOM的本质就是树形结构，那么对于节点的查找，添加，删除，遍历。都有相应方法。