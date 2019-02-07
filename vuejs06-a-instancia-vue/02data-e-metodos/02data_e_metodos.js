var data = { a: 1, message: "02Data e Metodos" };

var vm = new Vue({
    el: "#app",
    data: data,
});

// Comparando o mesmo objeto
console.log(vm.$data.a === data); // True

// Setando valor para o objeto vm em a
vm.a = 2
console.log(data) // data = 2

// Setando valor para o objeto data em a
data.a = 3
console.log(vm.a) // vm = 3

// Mudanças em vm e data como são o mesmo
// objeto são alteradas "reativadas".
