# Object 对象

## 1. 概述

JavaScript 的所有其他对象都继承自`Object`对象，即那些对象都是`Object`的实例。

即Array，boolean，number，string这些都是`Object`对象的实例。

`Object`对象的原生方法分成两类：`Object`本身的方法与`Object`的实例方法。

**（1）Object对象本身的方法**

所谓“本身的方法”就是直接定义在`Object`对象的方法。

实例对象无法调用。(也叫静态方法)

```javascript
        Object.print = function (n,) {
            log("方法可以进行重写", n)
        }

        Object.print(3)


        Object.print1 = function () {
            log("123")
        }
        
        Object.print1()
```



**（2）Object的实例方法**

所谓实例方法就是定义在`Object`原型对象`Object.prototype`上的方法。它可以被`Object`实例直接使用,不仅如此属性也是可以共享的。

```javascript
        Object.prototype.print = function (n) {
                log(n)
            }

            var o = new Object();
            o.print(5)
            // 5
        Object.prototype.print1 = function (n) {
                log(n)
            }

            var o = new Object();
            o.print1(5)
            //5
			String的原型对象是Object
            var str = new String();
            str.print1(5)
		   //5
```



## 2. Obeject()

未看

## 3. Object 构造函数

`Object`不仅可以当作工具函数使用，还可以当作构造函数使用，即前面可以使用`new`命令。

`Object`构造函数的首要用途，是直接通过它来生成新对象。



使用时，可以接受一个参数，如果该参数是一个对象，则直接返回这个对象；如果是一个原始类型的值，则返回该值对应的包装对象（详见《包装对象》一章）。

```javascript
var o1 = {a: 1};
var o2 = new Object(o1);
o1 === o2 // true

var obj = new Object(123);
obj instanceof Number // true

猜想与印证:

var module1 = {
            _count: 0,
            m1: function () {
                return 23;
            },
            m2: function () {
                //...
            }
        } 
var module2 = new Object(module1);


	module2._count  // 0
     module2.m1()  // 23
```

