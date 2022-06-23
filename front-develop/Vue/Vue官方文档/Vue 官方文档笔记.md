# 1. Vue.js 介绍 

## 1.1 what

## 1.2 起步

## 1.3 声明式渲染

```
这个例子演示了我们不仅可以把数据绑定到 DOM 文本或 attribute，还可以绑定到 DOM 结构。此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用过渡效果
```

注意我们不再和 HTML 直接交互了。一个 Vue 应用会将其挂载到一个 DOM 元素上 (对于这个例子是 `#app`) 然后对其进行完全控制。那个 HTML 是我们的入口，但其余都会发生在新创建的 Vue 实例内部。

```
响应式。虽然我不知道什么是响应式，但我知道什么非响应式的。非响应式无法实时更改节点中的数据。

```



Vue实例中，可以获取DOM元素，并修改，删除，遍历，DOM树。

## 1.4 条件与循环

插值表达式 与 v-指令 其作用都是，标签内的数据是通过何种方式渲染的。

## 1.5 处理用户输入

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统。



## 1.6 组件化应用构建

什么是组件。

组件与组件之间如何通信，且不会耦合过低。

在 Vue 里，一个组件本质上是一个拥有预定义选项的一个 Vue 实例

如何创建组件。

用Vue构建的应用，是由多个父组件与子组件组合而成。

```
Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义 attribute。
  // 这个 prop 名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.id }}</li>'
})


props 是一个接口。


尽管这只是一个刻意设计的例子，但是我们已经设法将应用分割成了两个更小的单元。子单元通过 prop 接口与父单元进行了良好的解耦。我们现在可以进一步改进 <todo-item> 组件，提供更为复杂的模板和逻辑，而不会影响到父单元
```



组件里面可以有什么？

组件与组件之间如何通信。



使用了组件的应用模板是什么样的

```
<div id="app">
  <app-nav></app-nav>
  <app-view>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </app-view>
</div>

dom标签变成了一个组件。

```

### 1.7 

```
问题:

```





## 2. Vue实例 

当创建一个 Vue 实例时，你可以传入一个**选项对象**。这篇教程主要描述的就是如何使用这些选项来创建你想要的行为





Vue构造函数 实例 根实例 选项对象

组件**树** 组件 可复用的 可嵌套的  拥有树型结构的特点



## 2.1 数据与方法 

### 2.1.1 

1.  Vue是一个响应式系统，修改 property 视窗会进行重渲染 。 

数据对象 包括**引入值**与 **原始数据**类型。

示例

```javascript
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})

// 获得这个实例上的 property
// 返回源数据中对应的字段
vm.a == data.a // => true

// 设置 property 也会影响到原始数据 Vue与数据对象都能随意修改property
vm.a = 2 /
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3
```

只有放在Vue实例`data`对象中的数据对象，才会拥有响应式的特性。

```
Vue.name = "jack"
不支持，响应式。

2. 可以设置初始值。

3. Object.freeze()方法的参数与作用。
```

总结:

1.  data对象的作用。
2.  如何使数据对象支持响应式。不支持
3.  能够阻止数据对象(property)响应式的方法。



### 2.1.2 Vue实例本身存在的 property & 方法

以后你可以在 [API 参考](https://cn.vuejs.org/v2/api/#实例-property)中查阅到完整的实例 property 和方法的列表

目前只需要知道文档就可以了。

所以的property 和 方法 都在文档中。



### 2.1.3 总结

1.  Vue是一个遵循MVVM框架的对象.(即存在内置属性与方法)

内置属性在Vue框架中叫做 property 

2.  ​

## 2.2 实例生命周期钩子 

**生命周期钩子**的函数

是函数。

多少种函数





### 2.3 

# 3. 模板语法 

Vue.js 使用了基于 **HTML** 的**模板**语法，允许开发者声明式地将 **DOM** 绑定至底层 **Vue 实例的数据**。

```
DOM与Vue实例数据进行绑定
```



所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少

## 3.1 插 `值` 

### 3.2 文本 

Mustache”语法 (双大括号) 的文本插值

```
span>Message: {{ msg }}</span>
```

### 3.3 V-html 指令 

特性:

这个 `span` 的内容将会被替换成为 property 值 `rawHtml`，直接作为 HTML——会**忽略解析** property 值中的数据绑定

### 3.4 js 表达式

对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。

每个绑定都只能包含**单个表达式**，所以下面的例子都**不会**生效

记住，只能是表达式。

语句，if 判断 都不行。

## 4. 指令 

### 4.1 参数

```html
<a v-bind:href="url">...</a>
<a v-on:click="doSomething">...</a>
```

### 4.3 修饰符

```html
<form v-on:submit.prevent="onSubmit">...</form>
事件中的特性就是修饰符。阻止冒泡，阻止默认行为。都属于修饰符。相当于 事件的形容词
```

### 4.4 V-bind & v-on 缩写

```html
<a :href="url">...</a>
<a @click="doSomething">...</a>
```

## 5. 计算属性和侦听器 

看不懂，未看。

## 6. class 于 Style 绑定 

表达式结果的类型除了`字符串` `对象`或`数组`

标签绑定class的几种方法

1.  传统
2.  使用对象
3.  数组

```html
<div v-bind:class="{ active: isActive }"></div>
类的值取决于对象的值
```

3.  传统和对象形式 组合使用

```html
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>

<div class="static active"></div>
```

注意:

绑定的数据对象不必内联定义在模板里（先记住)

对象不用写在 标签内。写在vue实例deta对象中是可以的。

### 1.2 class 计算属性写法

```html
<div v-bind:class="classObject"></div>
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```



### 4 - 6 总结

时间:  9:20 - 10:20

走神15分钟。

概念记录:

```
从计算机的角度 元素 <标签可以看成是元素>
内联样式 外联 
数据绑定  
常见需求 普遍的需求 都有统一
数据类型 字符串 对象 数组
字符串拼接麻烦且易错 并列关系 方便且简洁易懂。 
```

例子与进一步猜想，猜想的方向。并列 与 递进。









## 7. 