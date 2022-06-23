new Vue({
  el: '#app',
  el: "#div",
  data: {
    counter: 0
  },
  methods: {
    increment() {
      this.counter++;
      console.log(Vue);
    }
  }
});

// Vue 是一个构造函数。我们传递的数据，都是以参数的方式进行传递。
//疑问  这种方式从没有遇见过。