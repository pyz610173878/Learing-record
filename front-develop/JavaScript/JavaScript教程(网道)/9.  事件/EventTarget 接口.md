# EventTarget 接口

## 1.  概述

DOM 节点的事件操作（监听和触发），都定义在`EventTarget`接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，`XMLHttpRequest`、`AudioNode`、`AudioContext`）也部署了这个接口

三个实例方法:

- `addEventListener()`：绑定事件的监听函数
- `removeEventListener()`：移除事件的监听函数
- `dispatchEvent()`：触发事件



## 2.  addEventListener

用于在当前节点或对象上（即部署了 EventTarget 接口的对象），定义一个特定事件的监听函数。一旦这个事件发生，就会执行监听函数。该方法没有返回值。

语法:

```javascript
target.addEventListener(type, listener[, useCapture])

```





## 3.  EventTarget.removeEventListener()

`移除`addEventListener()方法添加的事件监听函数。

要移除的事件，必须是addEventListener方法添加的那个监听函数，而且必须在同一个元素节点，否则无效，你要移除的当然是监听函数本身。



# 事件模型

## 1.  监听函数

​    HTML 的 on- 属性
    元素节点的事件属性
    EventTarget.addEventListener()
    小结
this 的指向

## 3.  事件的传播

一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段，传播的前提是元素本身绑定了相关事件。

JS 代码中只能执行捕获或者冒泡其中的一个阶段。



### 3.1  捕获阶段



- **第一阶段**：从`window`对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）

  document -> html -> body - > 指定节点元素。

  ​

  代码实例:

  ```javascript
  元素.addEventListener('事件', function (event) {
          }, true);
  第三个参数为true为捕获阶段
  ```

  ​


- **第二阶段**：在目标节点上触发，称为“目标阶段”（target phase）。









### 3.3  冒泡阶段

- **第三阶段**：从目标节点传导回`window`对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。

当前节点元素 -> body -> html -> document

比如你为子元素和父元素同时绑定了点击事件，根据冒泡阶段，即使你没有点击父元素，父元素的点击事件也会触发。有些情况下，你只想触发子元素，不想触发父元素的事件。



### 4.  事件的代理

由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理。









# Event 对象

## 1.  概述

事件发生以后，会产生一个事件对象，作为参数传给监听函数。浏览器原生提供一个`Event`对象，所有的事件都是这个对象的实例，或者说继承了`Event.prototype`对象。

前提:事件是Event对象的实例

前提2:每个对象都存在属性与方法:

结论:可以使用属性与方法

也就是说，为某个节点添加事件就是event对象的实例化。



## 2.  实例属性

Event.bubbles，Event.eventPhase
Event.cancelable，Event.cancelBubble，event.defaultPrevented

### Event.currentTarget，Event.target

`Event.target`属性返回原始触发事件的那个节点，即事件最初发生的节点。这个属性不会随着事件的传播而改变。











Event.type
Event.timeStamp
Event.isTrusted
Event.detail





## 3.  实例方法

### 3.1  Event.preventDefault()

`Event.preventDefault`方法取消浏览器对当前事件的默认行为

比如点击链接后，浏览器默认会跳转到另一个页面，使用这个方法以后，就不会跳转了；

再比如，按一下空格键，页面向下滚动一段距离，使用这个方法以后也不会滚动了。





该方法生效的前提是，事件对象的`cancelable`属性为`true`，如果为`false`，调用该方法没有任何效果。

注意，该方法只是取消事件对当前元素的默认影响，不会阻止事件的传播。



### 3.2   Event.stopPropagation()

该方法阻止事件向上逐渐传播。

`该方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，**但是不包括在当前节点上其他的事件监听函数**。

