组件基础

## 1. 基本示例

因为组件是可复用的 Vue 实例，所以它们与 `new Vue` 接收相同的选项，例如 `data`、`computed`、`watch`、`methods` 以及生命周期钩子等。仅有的例外是像 `el` 这样根实例特有的选项。

```
引入 注意 不能是相对路径
注册 export default里面

```



## 2. 组件的复用



## 3. 组件的组织

全局注册

```
全局注册的组件可以用在其被注册之后的任何 (通过 new Vue) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中
```



局部注册





## 3.1 通过 Prop 向子组件传递数据

## 

```html
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})


prop添加方式
适用方式

```



一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。在上述模板中，你会发现我们能够在组件实例中访问这个值，就像访问 `data` 中的值一样。

```HTML
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```



一个 prop 被注册之后，你就可以像这样把数据作为一个自定义 attribute 传递进来

attribute 值 还是 属性名，prop是`变量`

这里title作为 标签的`属性名`。

Prop 是你可以在组件上注册的一些自定义 `attribute`。当一个值传递给一个 prop attribute 的时候，它就变成了那个组件实例的一个 property。

property 是vue实例的中的一个属性。



### 3.2 单个根元素

**每个组件必须只有一个根元素**



```html
<blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
></blog-post>

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})

没有坏味道的代码。
```





