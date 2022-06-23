// const { exitCode } = require("process");

const part1 = function () {

    function say(word) {
        console.log(word);
    }

    function execute(someFunction, value) {
        someFunction(value);
        // 这里相当于 调用了 say函数
        // say(value)

        execute(say, "Hello");
        // // Hello
    }
}



// 更简便的做法，不需要在外层写一个函数
// function execute(someFunction, value) {
//     someFunction(value);
// }

// execute(function (word) { console.log(word) }, "Hello");


// exports.execute = execute;



const kind = function () {
    console.log("testing");
}

exports.kind = kind