var person = {
    name: "Nicholas",
    age: 29,
    job: "Soft",
    sayName: function () {
        alert(
            this.name);
    }
}


var pyz = new person();
console.log(pyz.name);