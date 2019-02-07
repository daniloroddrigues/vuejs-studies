var data = { a: 1, message: "03Data e Metodos" };

var vm = new Vue({
    el: "#app",
    data: data,
});

// Comparando o mesmo objeto
console.log(vm.$data === data); // True
console.log(vm.$el === document.getElementById("app")); // True

console.log('$el: ', vm.$el);
console.log('$data: ', vm.$data);
console.log('data: ', data);


vm.$watch('a', function(newValue, oldValue) {
    console.log('newValue: ', newValue);
    console.log('oldValue: ', oldValue);
});
