## Ajax/计算机网络相关 
#### 1、什么是 Ajax，Ajax 的原理，Ajax 都有哪些优点和缺点？（必会） 

##### 什么是 Ajax 

AJAX是异步的JavaScript和XML（**A**synchronous **J**avaScript **A**nd **X**ML）。简单点说，就是使用 `XMLHttpRequest` 对象与服务器通信。 它可以使用JSON，XML，HTML和text文本等格式发送和接收数据。AJAX最吸引人的就是它的“异步”特性，也就是说它可以在不重新刷新页面的情况下与服务器通信，交换数据，或更新页面。

你可以使用AJAX最主要的两个特性做下列事：

-   在不重新加载页面的情况下发送请求给服务器。
-   接受并使用从服务器发来的数据。

##### Ajax 的原理 

通过 XMLHTTPRequest 对象来向服务器发异步请求，从服务器获得数据，然后用 javascript
来操作 DOM 而更新页面。这其中最关键的一步就是从服务器获得请求数据。
XMLHTTPRequest 是 Ajax 的核心机制，它是在 IE5 中首先引入的，是一种支持异步请求的技
术。简单的说，也就是 javascript 可以及时向服务器提出请求和处理响应，而不阻塞用户。达
到无刷新的效果。

##### Ajax 的优点 

1、最大的一点是页面无刷新，用户的体验非常好。
2、使用异步方式与服务器通信，具有更加迅速的响应能力。
3、可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理， 减
轻服务器和带宽的负担，节约空间和宽带租用成本。并且减轻服务器的负担，Ajax 的原则是“按
需取数据”，可以最大程度的减少冗余请求，和响应对服务器造成的负担。
4、基于标准化的并被广泛支持的技术，不需要下载插件或者小程序。

##### **Ajax 的缺点** 

1、Ajax 不支持浏览器 back 按钮。 

2、安全问题 Ajax 暴露了与服务器交互的细节。 

3、对搜索引擎的支持比较弱。 

4、破坏了程序的异常机制。 

#### **2、常见的 HTTP 状态码以及代表的意义（必会）** 

##### **5 种常见的 HTTP 状态码以及代表的意义**  

200（ 

OK）：请求已成功，请求所希望的响应头或数据体将随此响应返回。 

400（ 

Bad Request）：请求格式错误。 

1) 语义有误，当前请求无法被服务器理解。除非进行 修改，否则客户端不应该重 

复提交这个请求； 

2) 请求参数有误。 

404（ 

Not Found）：请求失败，请求所希望得到的资源未被在服务器上发现。 

500（ 

Internal Server Error）：服务器遇到了一个未曾预料的状况，导致了它无法完成对 

求的处理。 

##### **更多状态码** 

100 => 正在初始化（一般是看不到的） 

101 => 正在切换协议（websocket 浏览器提供的） 

202 => 表示接受 

301 => 永久重定向/永久转移 

302 => 临时重定向/临时转移（一般用来做服务器负载均衡） 

304 => 本次获取的内容是读取缓存中的数据，会每次去服务器校验 

401 => 未认证，没有登录网站 

403 => 禁止访问，没有权限 

502 => 充当网关或代理的服务器，从远端服务器接收到了一个无效的请求 

503 => 服务器超负荷（假设一台服务器只能承受 10000 人，当第 10001 人访问的时候， 

如果服务器没有做负载均衡，那么这个人的网络状态码就是 503） 

505 => 服务器不支持请求的 HTTP 协议的版本，无法完成处理。 

 

请

#### **3、请介绍一下 XMLHTTPrequest 对象及常用方法和属性（必会）**  

##### **XMLHTTPrequest 对象**  

Ajax 的核心是 XMLHTTPRequest。它是一种支持异步请求的技术。XMLHTTPRequest 使您可以 

使用 JavaScript 向服务器提出请求并处理响应，而不阻塞用户。可以在页面加载以后进行页面 

的局部更新 

##### **方法**  

open(String method,String url,boolean asynch,String username,String password) 

send(content) 

setRequestHeader(String header,String value) 

getAllResponseHeaders() 

getResponseHeader(String header) 

abort() 

##### **常用详细解析**  

open()：该方法创建 HTTP 请求 

第一个参数是指定提交方式(post、get) 

第二个参数是指定要提交的地址是哪

第三个参数是指定是异步还是同步(true 表示异步，false 表示同步) 

第四和第五参数在 HTTP 认证的时候会用到。是可选的 

setRequestHeader(String header,String value)：设置消息头（使用 post 方式才会 

使用到， get 方法并不需要调用该方法） 

xmlHTTP.setRequestHeader("Content-type","application/x-www-form

urlencoded"); 

send(content)：发送请求给服务器 

如果是 get 方式，并不需要填写参数，或填写 null 

如果是 post 方式，把要提交的参数写上去 

##### 常用属性 

onreadystatechange：请求状态改变的事件触发器（readyState 变化时会调用此方法），一 

般用于指定回调函数 

readyState：请求状态 readyState 一改变，回调函数被调用，它有 5 个状态 

0：未初始化 

1：open 方法成功调用以后 

2：服务器已经应答客户端的请求 

3：交互中。HTTP 头信息已经接收，响应数据尚未接收。 

4：完成。数据接收完成 

responseText：服务器返回的文本内容 

responseXML：服务器返回的兼容 DOM 的 XML 内容 

status：服务器返回的状态码 

statusText：服务器返回状态码的文本信息 

##### **回调函数是什么**  

回调函数就是接收服务器返回的内容！ 

#### **4、Ajax 的实现流程是怎样的？（必会）** 

1、创建 XMLHTTPRequest 对象,也就是创建一个异步调用对象. 

2、创建一个新的 HTTP 请求,并指定该 HTTP 请求的方法、URL 及验证信息. 

3、设置响应 HTTP 请求状态变化的函数. 

4、发送 HTTP 请求. 

5、获取异步调用返回的数据. 

6、使用 JavaScript 和 DOM 实现局部刷新. 

```html
<script type="text/javascript">
    var HTTPRequest;
    function checkUsername() {
        //创建 XMLHTTPRequest 对象
        if (window.XMLHTTPRequest) {
            //在 IE6 以上的版本以及其他内核的浏览器(Mozilla)等
            HTTPRequest = new XMLHTTPRequest();
        } else if (window.ActiveXObject) {
            //在 IE6 以下的版本
            HTTPRequest = new ActiveXObject();
        }
        //创建 HTTP 请求
        HTTPRequest.open("POST", "Servlet1", true);
        //因为我使用的是 post 方式，所以需要设置消息头
        HTTPRequest.setRequestHeader("Content-type",
            "application/x-www-form-urlencoded");
        //指定回调函数
        HTTPRequest.onreadystatechange = response22;
        //得到文本框的数据
        var name = document.getElementById("username").value;
        //发送 HTTP 请求，把要检测的用户名传递进去
        HTTPRequest.send("username=" + name);

    }
    //接收服务器响应数据
    function response22() {
        //判断请求状态码是否是 4【数据接收完成】
        if (HTTPRequest.readyState == 4) {
            //再判断状态码是否为 200【200 是成功的】
            if (HTTPRequest.status == 200) {
                //得到服务端返回的文本数据
                var text = HTTPRequest.responseText;
                //把服务端返回的数据写在 div 上
                var div = document.getElementById("result");
                div.innerText = text;
            }
        }
    }
</script>
```

#### **5、Ajax 接收到的数据类型有哪些，数据如何处理？（必会）**  

##### **接收到的数据类型** 

String / JSON 字符串 / 二进制数据流 

JSON 字符串反序列化后， 转成引用类型使用 

String 直接使用 

前端用 Blob 转换 

##### **如何处理数据** 

1、字符串转对象 

第一种方式：eval（）； 

```javascript
var data='{"student" ： [{"name":" 张 三 ","age":"11"} ， {"name":" 李 四 

","age":"11"},{"name":"王五","age":"11"}]}’； 

eval（’（“+data+”）’）; 
```

第二种方式：JSON.parse（）； 

```javascript
var data='{"student" ： [{"name":" 张 三 ","age":"11"} ， {"name":" 李 四 

","age":"11"},{"name":"王五","age":"11"}]}’； 

JSON.parse（data）；
```

##### **parse（）与 eval（）区别**  

eval（）方法不会去检查给的字符串时候符合 json 的格式~同时如果给的字符串中存在 js 

代 码 eval（）也会一并执行~比如: 

var data='{"student" ： [{"name":" 张 三 ","age":"11"} ， {"name":" 李 四 

","age":"alert(11)"},{"name":"王五","age":"11"}]}’； 

此时执行 eval 方法后会先弹出一个提示框输出 11 的字符串; 

这时候使用 JSON.parse()就会报错,显示错误信息为当前字符串不符合 json 格式;即 

JSON.parse()方法会检查需要转换的字符串是否符合 json 格式 

相比而言 eval（）方法是很不安全，特别是当涉及到第三方时我们需要确保传给 eval（）

的参数是我们可以控制的，不然里面插入比如 window.location~指向一个恶意的连接总的来说， 

还是推荐使用 JSON.parse（）来实现 json 格式字符串的解析

#### **6、请解释一下 JavaScript 的同源策略（必会）**  

**同源策略**是客户端脚本的重要的安全度量标准。其目的是防止某个文档或脚本从多个不同 

源装载。所谓同源指的是：协议，域名，端口相同，同源策略是一种安全协议，指一段脚本只能 

读取来自同一来源的窗口和文档的属性。 

#### **7、为什么会有跨域的问题出现，如何解决跨域问题（必会）**  

##### **什么是跨域**  

指的是浏览器不能执行其他网站的脚本，它是由浏览器的同源策略造成的,是浏览器对 

javascript 施加的安全限制，防止他人恶意攻击网站 

比如一个黑客,他利用 iframe 把真正的银行登录页面嵌到他的页面上,当你使用真实的用户 

名和密码登录时,如果没有同源限制,他的页面就可以通过 JavaScript 读取到你的表单中 

输入的内容,这样用户名和密码就轻松到手了。 

##### **解决方式** 

1、jsonp 

原理：动态创建一个 script 标签。利用 script 标签的 src 属性不受同源策略限制。因为 

所有的 src 属性和 href 属性都不受同源策略限制。可以请求第三方服务器数据内容。 

##### **步骤**  

1.1）去创建一个 script 标签 

1.2）script 的 src 属性设置接口地址 

1.3）接口参数,必须要带一个自定义函数名 要不然后台无法返回数据。 

1.4）通过定义函数名去接收后台返回数据 

//去创建一个 script 标签 

var script = document.createElement("script"); 

//script 的 src 属性设置接口地址 并带一个 callback 回调函数名称 

script.src = "HTTP://127.0.0.1:8888/index.php?callback=jsonpCallback"; 

//插入到页面 

document.head.appendChild(script); 

//通过定义函数名去接收后台返回数据 function jsonpCallback(data){ 

 //注意 jsonp 返回的数据是 json 对象可以直接使用 

 //Ajax 取得数据是 json 字符串需要转换成 json 对象才可以使用。 

}

2、 CORS：跨域资源共享 

原理：服务器设置 Access-Control-Allow-OriginHTTP 响应头之后，浏览器将会允许跨域请 

求 

限制：浏览器需要支持 HTML5，可以支持 POST，PUT 等方法兼容 ie9 以上 

需要后台设置 

Access-Control-Allow-Origin: * //允许所有域名访问，或者 

Access-Control-Allow-Origin: HTTP://a.com //只允许所有域名访问 

3、反向代理 

4、window+iframe

#### **8、Get 和 Post 的区别以及使用场景（必会）** 

##### **区别** 

1、Get 使用 URL 或 Cookie 传参。而 Post 将数据放在 body 中 

2、Get 的 URL 会有长度上的限制，则 Post 的数据则可以非常大 

3、Post 比 Get 安全，因为数据在地址栏上不可见 

##### **最本质的区别** 

基于 http 协议进行请求， 其实 GET 和 POST 无区别， 只是请求时的方式不同， 都可以携 

带请求体， 也可以在 URL 带参数 

  

区别来自于浏览器对 URL 长度的限制， 请求体大小来源于服务器的限制 

##### **还有语义的区别：** 

GET 是获取， POST 是提交 

Get 是用来从服务器上获得数据，而 post 是用来向服务器上传递数据 

##### **Get/Post 使用场景** 

若符合下列任一情况，则 Post 方法： 

1、请求的结果有持续性的作用，例如：数据库内添加新的数据行 

2、若使用 Get 方法，则表单上收集的数据可能让 URL 过长 

3、要传送的数据不是采用 ASCII 编码 

若符合下列任一情况，则用 Get 方法： 

1、请求是为了查找资源，html 表单数据仅用来搜索 

2、请求结果无持续性的副作用 

3、收集的数据及 html 表单内的输入字段名称的总长不超过 1024 个字符 

#### **9、解释 jsonp 的原理（必会）**  

##### **什么是 jsonp，jsonp 的作用**  

jsonp 并不是一种数据格式，而 json 是一种数据格式，jsonp 是用来解决跨域获取数据的 

一种解决方案 

##### **具体原理**  

是通过动态创建 script 标签，然后通过标签的 src 属性获取 js 文件中的 js 脚本，该脚本 

的内容是一个函数调用，参数就是服务器返回的数据，为了处理这些返回的数据，需要事先在页 

面定义好回调函数，本质上使用的并不是 Ajax 技术，Ajax 请求受同源策略的影响，不允 许 

进行跨域请求，而 script 标签的 src 属性中的链接却可以访问跨域的 js 脚本，利用这个特性， 

服务端不在返回 json 格式的数据，而是返回调用某个函数的 js 代码，在 src 中进行了调用，这 

样就实现了跨域 

#### **10、封装好的 Ajax 里的常见参数及其代表的含义** （必会） 

url: 发送请求的地址。 

type: 请求方式（post 或 get）默认为 get。 

async: 同步异步请求，默认 true 所有请求均为异步请求。 

timeout : 超时时间设置，单位毫秒 

data：要求为 Object 或 String 类型的参数，发送到服务器的数据 

cache：默认为 true（当 dataType 为 script 时，默认为 false）, 设置为 false 将不会从 

浏览器 缓存中加载请求信息。 

dataType: 预期服务器返回的数据类型。 

可用的类型如下： 

xml：返回 XML 文档，可用 JQuery 处理。

html：返回纯文本 HTML 信息；包含的 script 标签会在插入 DOM 时执行。 

script：返回纯文本 JavaScript 代码。不会自动缓存结果。 

json：返回 JSON 数据。 

jsonp：JSONP 格式。使用 JSONP 形式调用函数时，例如 myurl?callback=?，JQuery 将自动 

替换后一个“?”为正确的函数名，以执行回调函数。 

text：返回纯文本字符串。 

success：请求成功后调用的回调函数，有两个参数。 

1、由服务器返回，并根据 dataType 参数进行处理后的数据。 

2、描述状态的字符串。 

error：要求为 Function 类型的参数，请求失败时被调用的函数。该函数有 3 个参数 

1、XMLHTTPRequest 对象 

2、错误信息 

3、捕获的错误对象(可选) 

complete :function(XMLHTTPRequest,status){ //请求完成后最终执行参数}

#### **11、jQuery 中$.ajax 与 fetch 、axios 有什么区别？（必会）** 

##### **1、jQuery $.ajax**  

$.ajax({  

type: 'POST',  

url: url,  

data: data,  

dataType: dataType, 

success: function () {},  

error: function (){}  

});  

jQuery 本身是针对 MVC 的编程,不符合现在前端 MVVM 的开发模式 

jQuery 整个项目很大，单纯使用 Ajax 却要引入整个 jQuery 非常的不合理 

##### **2、axios**  

axios({ 

  

method: 'post', 

url: '/user/12345', 

data: { 

  

firstName: 'Fred', 

lastName: 'Flintstone' 

}  

}) .then(function (response) { 

console.log(response);  

})  

客户端支持防止 CSRF/XSRF 自动转换 JSON 数据 取消请求 转换请求和响应数据 拦截请求 

和响应支持 Promise API 从 node.js 发出 HTTP 请求 从浏览器中创建 XMLHTTPRequest  

axios 是一个基于 Promise 用于浏览器和 nodejs 的 HTTP 客户端 

##### **3、 fetch**  

let data = response.json();  

let response = await fetch(url);  

try {} 

catch(e) { 

  

console.log(data); 

console.log("Oops,error", e);  

} 

##### **为什么要用 axios** 

3.1）fetch 没有办法原生监测请求的进度，而 XHR 可以 

3.2）fetch 不支持 abort，不支持超时控制，使用 setTimeout 及 Promise.reject 的实现 

的 超时控制并不能阻止请求过程继续在后台运行，造成了量的浪费 

3.3）fetch 默认不会带 cookie，需要添加配置项 

3.4）fetcht 只对网络请求报错，对 400，500 都当做成功的请求，需要封装去处理 

脱离了 XHR，是 ES 规范里新的实现方式 更加底层，提供的 API 丰富（request, response） 

更好更方便的写法符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里

#### **12、Ajax 注意事项及适用和不适用场景（必会）**  

Ajax 开发时，网络延迟——即用户发出请求到服务器发出响应之间的间隔——需要慎重考 

虑。不给予用户明确的回应，没有恰当的预读数据，或者对 XMLHTTPRequest 的不恰当处理， 

都会使用户感到延迟，这是用户不希望看到的，也是他们无法理解的。通常的解决方案是， 

使用一个可视化的组件来告诉用户系统正在进行后台操作并且正在读取数据和内容。 

##### **Ajax 适用场景** 

1、表单驱动的交互 

2、深层次的树的导航 

3、快速的用户与用户间的交流响应 

4、类似投票、yes/no 等无关痛痒的场景 

5、对数据进行过滤和操纵相关数据的场景 

6、普通的文本输入提示和自动完成的场景 

##### **Ajax 不适用场景** 

1、部分简单的表单 

2、搜索 

3、基本的导航 

4、替换大量的文本 

5、对呈现的操纵 

#### **13、HTTP 与 HTTPS 的区别（必会）** 

1、HTTPS 协议需要到 CA （Certificate Authority，证书颁发机构）申请证书，一般免 

费证书较少，因而需要一定费用。(以前网易官网是 HTTP，而网易邮箱是 HTTPS 。) 

2、HTTP 是超文本传输协议，信息是明文传输，HTTPS 则是具有安全性的 SSL 加密传输协 

议

3、HTTP 和 HTTPS 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者 

是 443 

4、HTTP 的连接很简单，是无状态的。HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密 

传输、身份认证的网络协议，比 HTTP 协议安全。(无状态的意思是其数据包的发送、传输 

和接收都是相互独立的。无连接的意思是指通信双方都不长久的维持对方的任何信息。) 

#### **14、localStorage、sessionStorage、cookie 的区别（必会）**  

##### **共同点：**都是保存在浏览器端、且同源的 

##### **区别：** 

1、cookie 数据始终在同源的 http 请求中携带（即使不需要），即 cookie 在浏览器和服务器间

来回传递，而 sessionStorage 和 localStorage 不会自动把数据发送给服务器，仅在本地保 

存。cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下 

2、存储大小限制也不同，cookie 数据不能超过 4K，同时因为每次 http 请求都会携带 

cookie、所以 cookie 只适合保存很小的数据，如会话标识。sessionStorage 和 localStorage 

虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大 

3、数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始 

终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的 cookie 过期 

时间之前有效，即使窗口关闭或浏览器关闭 

4、作用域不同，sessionStorage 不在不同的浏览器窗口中共享，即使是同一个页面； 

localstorage 在所有同源窗口中都是共享的；cookie 也是在所有同源窗口中都是共享的 

5、web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者 

6、web Storage 的 api 接口使用更方便 

#### **15、简述 web 前端 Cookie 机制，并结合该机制说明会话保持原理？** 

**（必会）**  

Cookie 是进行网站用户身份，实现服务端 Session 会话持久化的一种非常好方式。 

##### 1、为什么需要 Cookie 

HTTP 是一种无状态的协议，客户端与服务器建立连接并传输数据，数据传输完成后，连接 

就会关闭。再次交互数据需要建立新的连接，因此，服务器无法从连接上跟踪会话，也无法 

知道用户上一次做了什么。 

例如：在网络有时候需要用户登录才进一步操作，用户输入用户名密码登录后，浏览 了 

几个页面，由于 HTTP 的无状态性，服务器并不知道用户有没有登录 

Cookie 是解决 HTTP 无状态性的有效手段，服务器可以设置或读取 Cookie 中所包含的 

信息。 当用户登录后，服务器会发送包含登录凭据的 Cookie 到用户浏览器客户端，而浏览器 

对该Cookie 进行某种形式的存储（内存或硬盘）。用户再次访问该网站时，浏览器会发送该 Cookie 

（Cookie 未到期时）到服务器，服务器对该凭据进行验证，合法时使用户不必输入用户名和密 

码就可以直接登录 

本质上讲，Cookie 是一段文本信息。客户端请求服务器时，如果服务器需要记录用户 

就在响应用户请求时发送一段 Cookie 信息。客户端浏览器保存该 Cookie 信息，当用 

访问该网站时，浏览器会把 Cookie 做为请求信息的一部分提交给服务器。服务器检查 

状态， 

户再次 

Cookie 内容，以此来判断用户状态，服务器还会对 Cookie 信息进行维护，必要时会对 Cookie 内 

容 进行修改 

##### 2、 Cookie 的类型 

Cookie 总时由用户客户端进行保存的（一般是浏览器），按其存储位置可分为：内存 

式 Cookie 

和硬盘式 Cookie。 

内存式 Cookie 存储在内存中，浏览器关闭后就会消失，由于其存储时间较短，因此也 

被称为非持久 Cookie 或会话 Cookie。 

硬盘式 Cookie 保存在硬盘中，其不会随浏览器的关闭而消失，除非用户手工清理或到 

了过期时间。由于硬盘式 Cookie 存储时间是长期的，因此也被称为持久 Cookie。 

##### 3、Cookie 的实现原理 

Cookie 定义了一些 HTTP 请求头和 HTTP 响应头，通过这些 HTTP 头信息使服务器可以与 

客户进行状态交互。 

客户端请求服务器后，如果服务器需要记录用户状态，服务器会在响应信息中包含一个

Set-Cookie 的响应头，客户端会根据这个响应头存储 Cookie 信息。再次请求服务器时，客 

户端会在请求信息中包含一个 Cookie 请求头，而服务器会根据这个请求头进行用户身份、 

状态等较验。 

**下面是一个实现 Cookie 机制的，简单的 HTTP 请求过程：**  

3.1）客户端请求服务器 

客户端请求 IT 笔录网站首页，请求头如下： 

GET / HTTP/1.0 

HOST: itbilu.com 

3.2）服务器响应请求 

Cookie 是一种 key=value 形式的字符串，服务器需要记录这个客户端请求的状态， 

在响应头中包一个 Set-Cookie 字段。响应头如下： 

因此 

HTTP/1.0 200 OK 

Set-Cookie: UserID=itbilu; Max-Age=3600; Version=1 

Content-type: text/html 

…… 

3.3）再次请求时，客户端请求中会包含一个 Cookie 请求头 

客户端会对服务器响应的 Set-Cookie 头信息进行存储。再次请求时，将会在请求头中 

包含服务器响应的 Cookie 信息。请求头如下 

GET / HTTP/1.0 

HOST: itbilu.com 

Cookie: UserID=itbilu 

#### **16、一个页面从输入 URL 到页面加载显示完成，这个过程中都发生** **了什么（高薪常问）** 

1、浏览器查找域名对应的 IP 地址(DNS 查询：浏览器缓存->系统缓存->路由器缓存->ISP  

DNS 缓存->根域名服务器) 

2、浏览器向 Web 服务器发送一个 HTTP 请求（TCP 三次握手） 

3 服务器 301 重定向（从 HTTP://example.com 重定向到 HTTP://www.example.com） 

4、浏览器跟踪重定向地址，请求另一个带 www 的网址 

5、服务器处理请求（通过路由读取资源） 

6、服务器返回一个 HTTP 响应（报头中把 Content-type 设置为 'text/html'） 

7、浏览器进 DOM 树构建 

8、浏览器发送请求获取嵌在 HTML 中的资源（如图片、音频、视频、CSS、JS 等） 

9、浏览器显示完成页面 

10、浏览器发送异步请求 

#### **17、你知道的 HTTP 请求方式有几种（高薪常问）**  

**HTTPRequestMethod 共计 17 种** 

1、GET 请求指定的页面信息，并返回实体主体。 

2、HEAD 类似于 get 请求，只不过返回的响应中没有具体的内容，用于获取报头 

3、POST 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被 

包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改。 

4、PUT 从客户端向服务器传送的数据取代指定的文档的内容。 

5、DELETE 请求服务器删除指定的页面。 

6、CONNECT HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器。

7、OPTIONS 允许客户端查看服务器的性能。 

8、TRACE 回显服务器收到的请求，主要用于测试或诊断。 

9、PATCH 实体中包含一个表，表中说明与该 URI 所表示的原内容的区别。 

10、MOVE 请求服务器将指定的页面移至另一个网络地址。 

11、COPY 请求服务器将指定的页面拷贝至另一个网络地址。 

12、LINK 请求服务器建立链接关系。 

13、UNLINK 断开链接关系。 

14、WRAPPED 允许客户端发送经过封装的请求。 

15、LOCK 允许用户锁定资源，比如可以再编辑某个资源时将其锁定，以防别人同时对 

其进行编辑。 

16、MKCOL 允许用户创建资源 

17、Extension-mothed 在不改动协议的前提下，可增加另外的方法。 

#### **18、什么是 TCP 连接的三次握手（高薪常问）**  

TCP 是因特网中的传输层协议，使用建立连接，完成三次握手，与服务器开始传送。 

**第一次握手**：建立连接时，发送包（syn=j）到服务器，并进入等待状态，等待服务器确 

认；SYN：同步序列编号（Synchronize Sequence Numbers）。 

**第二次握手**：服务器 

第二次握手：收到 SYN 包，必须确认客户的 SYN（syn=j+1），同时自己也发送一个 

包（syn=k），即 SYN+ACK 包，此时服务器进入等待状态； 

  

SYN 

**第三次握手**：客户端收到服务器器的 SYN+ACK 包，向服务器发送确认包 

此包发送完毕，客户端和服务器进入（TCP 连接成功）状态，完成三次握手。 

ACK(ack=k+1）， 

![1636533223698](Ajax阶段面试题答案.assets/1636533223698.png)

**TCP 协议优点**  

TCP 发送的包有序号，对方收到包后要给一个反馈，如果超过一定时间还没收到反馈就自动执 

行超时重发，因此 TCP 最大的优点是可靠。 

**TCP 协议缺点**  

很简单，就是麻烦，如果数据量比较小的话建立连接的过程反而占了大头，不断地重发 

也会造成网络延迟，因此比如视频聊天通常就使用 UDP，因为丢失一些包也没关系，速度流畅才是重要的。 

#### **19、为什么 TCP 连接需要三次握手四次挥手（高薪常问）**  

##### **为什么是三次握手**  

为了防止已失效的连接请求报文段突然有送到了服务器，因而产生错误,假设两次握手时， 

客户发出的第一个请求连接报文段在某一网络节点长时间滞留，以致延误到连接释放后才 

到达服务器。服务器收到失效的连接请求报文段后，认为是客户又发出一次新的连接请求。于是 

向客户发送确认报文段，同意建立连接，此时在假定两次握手的前提下，连接建立成功。这样会 

导致服务器的资源白白浪费 

##### **为什么是四次挥手**  

TCP 协议是全双工通信，这意味着客户端和服务器端都可以向彼此发送数据，所以关闭连接 

是双方都需要确认的共同行为，假设是三次挥手时，首先释放了客户到服务器方向的连接， 

此时 TCP 连接处于半关闭状态，这时客户不能向服务器发送数据，而服务器还是可以向客 

户发送数据。如果此时客户收到了服务器的确认报文段后，就立即发送一个确认报文段， 

这会导致服务器向客户还在发送数据时连接就被关闭。这样会导致客户没有完整收到服务 

器所发的报文段 

#### **20、TCP 与 UDP 的区别有哪些（高薪常问）**  

##### **什么是 TCP**  

TCP（Transmission Control Protocol 传输控制协议）是一种面向连接的、可靠的、基于 

字节流的传输层通信协议 

##### **什么是 UDP**  

UDP(User Datagram Protocol 用户数据报协议）是 OSI（Open System Interconnection， 

开放式 

送服务 

系统互联） 参考模型中一种无连接的传输层协议，提供面向事务的简单不可靠信息传 

##### **区别**  

TCP 是面向连接的传输控制协议，而 UDP 提供了无链接的数据报服务//类似电话与短信 

TCP 面向连接，提供可靠的数据服务 

TCP 首部开销 20 字节,UDP 首部开销 8 字节 

TCP 逻辑通信信道是全双工的可靠信道，UDP 则是不可靠信道 

UDP 没有拥塞机制，因此网络出现拥堵不会使源主机的发送效率降低（有利于实时会议视频 

等） 

TCP 的连接只能是点到点的,UDP 支持一对一，多对一，多对多的交互通信 

#### **21、介绍一下 websocket（高薪常问）**  

##### **什么是 websocket**  

websocket 是一种网络通信协议，是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通 

信的协议，这个对比着 HTTP 协议来说，HTTP 协议是一种无状态的、无连接的、单向的应用 

层协议，通信请求只能由客户端发起，服务端对请求做出应答处理。HTTP 协议无法实现服务器 

主动向客户端发起消息，websocket 连接允许客户端和服务器之间进行全双工通信， 以 便 任 

一方都可以通过建立的连接将数据推送到另一端。websocket 只需要建立一次连接， 就 可 以 

一直保持连接状态

![1636533313120](Ajax阶段面试题答案.assets/1636533313120.png)

#### **22、拆解一下 URL 的各个部分，分别是什么意思（高薪常问）**  

例如：scheme://host:port/path?query#fragment 

1、 .scheme:通信协议，常用的 HTTP,ftp,maito 等 

2、 .host:主机，服务器(计算机)域名系统 (DNS) 主机名或 IP 地址 .port:端口号，整数，可选，省略时使用方案的默认端口，如 HTTP 的默认端口为 

3、 80 .path:路径，由零或多个"/"符号隔开的字符串，一般用来表示主机上的一个目录 

4、 或文件地址 .query:查询，可选，用于给动态网页传递参数，可有多个参数，用"&"符号隔开， 

5、 每个参数的名和值用"="符号隔开 .fragment:信息片断，字符串，用于指定网络资源中的片断。例如一个网页中有 

6、 多个名词解释，可使用 fragment 直接定位到某一名词解释。(也称为锚点)

#### **23、HTTP 缓存机制（高薪常问）**  

##### **浏览器缓存也包含很多内容：**  

HTTP 缓存、indexDB、cookie、localstorage 等等。这里我们只讨论 HTTP 缓存相关内容。 

浏览器缓存分为强缓存和协商缓存 

##### **强缓存**  

是利用 http 的返回头中的 Expires 或者 Cache-Control 两个字段来控制的，用来表示资源 

的缓存时间。

##### **Expires** 

缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。也就是说， 

Expires=max-age + 请求时间，需要和 Last-modified 结合使用。但在上面我们提到过，cache

control 的优先级更高。 Expires 是 Web 服务器响应消息头字段，在响应 http 请求时告诉浏览 

器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求。 

##### **Cache-Control**  

Cache-Control 是一个相对时间，例如 Cache-Control:3600，代表着资源的有效期是 3600 

秒。由于是相对时间，并且都是与客户端时间比较，所以服务器与客户端时间偏差也不会导致问 

题。 

Cache-Control 与 Expires 可以在服务端配置同时启用或者启用任意一个，同时启用的时候 

Cache-Control 优先级高。 

##### **协商缓存：**  

304 在第一次请求时候, 返回状态码 200, 和响应头中返回 cache-Control, 控制缓存使用 

的时间/方式(私有缓存和共享缓存), 在第二次发起请求时, 先查看 max-age 如果过期了, 在请 

求头设置 If-None-Match 等于刚刚 Etag 的值, 去后台对比, 如果 etag 值相同证明后端没更新,  

所以返回 304 状态, 前端提取本地的缓存继续使用. (也是协商缓存) 