var http = require("http");
var url = require("url");


function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname) //


        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

// var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname');
// var result = url.pathname; // Returns:"/en-US/docs/Web/API/URL/pathname"



exports.start = start;
// 请求头 第一个参数为状态码 ，文本内容: 文字
// 只有当我触发了某个事件，此函数才会执行。这就是回调函数 也是异步任务中的一种方式


