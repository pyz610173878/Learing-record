var myModel = {
  name: 'Ashley',
  age: 24,
  friends: [{
    name: 'Bob',
    age: 21
  }, {
    name: 'Jane',
    age: 20
  }, {
    name: 'Anna',
    age: 29
  }],
  search: ''
};
// var counter = "123"
var myViewModel = new Vue({
  el:
    "#div",
  data: {
    myModel,
    counter: true + 1,
    rawHtml: '<span>445432</span>'
  }
})

