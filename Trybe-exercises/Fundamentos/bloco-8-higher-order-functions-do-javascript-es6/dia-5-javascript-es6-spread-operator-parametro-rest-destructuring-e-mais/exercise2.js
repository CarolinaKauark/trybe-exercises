const soma = (...sum) => sum.reduce((acc, num) => acc + num, 0);

console.log(soma(1,4,6,4,10,5));