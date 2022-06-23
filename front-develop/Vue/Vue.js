## 1. Vue.js

### 2. 

### 2.1 

### 2.2 

### 2.3 



## 3.1 模块语法

### 3.2 插值语法

实例

```
{{只要是一个值都可以，}}
```



## 3.3 指令语法

定义: 带有 `v-` 前缀的特殊 attribute。

### 1. v-bind & v-model

示例

```html
<a :href="school.url" x="hello">点我去{{school.name}}学习2</a>

2. 缩写形式
a :href="school.url" x="hello">
    
    
共性,加了V-的属性名，其值都可以使用Vue对象中的变量。


双向数据绑定：<input type="text" v-model="name" /><br />
输入框中输入的值，可以影响其对象的属性值
```

### 1.1 el & data的两种写法

### 1.2 v-model 三种修饰符

```
.lazy

在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转为在 change 事件_之后_进行同步：

<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg">

.number

如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：

<input v-model.number="age" type="number">

这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 parseFloat() 解析，则会返回原始的值。
.trim

如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：

<input v-model.trim="msg">
```

### 1.3 v-text & v-html

```
text的意思，把所有数据当作文本。
html: 解析标签
```

## 4. 条件渲染

### 1.1 v-if & v-else

注意: 

`v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，**否则它将不会被识别**

```html
v-if作用: 当指令的表达式为真时，显示标签内容。
与else连用
<template>
  <div>
    <h1 v-if="vaule">为真显示</h1>
    <p v-else>12321</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vaule: false,
      age: 15,
    };
  },
};
</script>

```

### 1.2 进一步在 <template> 元素上使用 v-if 条件渲染分组

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>

得出结论，所有标签都能使用v-if指令
```

### 1.3 v-else-if



### 1.4 用 key 管理可复用的元素

实际应用。

### 1.5 v-show

他们之间的区别。show的作用类似display none & break.

show的值不管是false和true，都会进行渲染。



注意，`v-show` 不支持 `<template>` 元素，也不支持 `v-else`

### 1.6 v-if & v-show

`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

`v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。



## 5. 列表渲染 

### 1. v-for 

参数:

1.  item in items

```
哪些东西可以进行for in 遍历
```



1.  返回值
2.  注意事项
3.  实际的应用场景
4.  组合使用

### 1.1 虚拟DOM

通过他可以将一个完整的DOM树作为添加到父DOM树中。

## 5. 

## 6. 

## 7. 