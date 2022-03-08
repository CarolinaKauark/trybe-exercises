const custoDoProduto = 10;
const valorDeVenda = 20;


let valorCustoTotal = custoDoProduto + (0.2*custoDoProduto); 
let lucro = (valorDeVenda - valorCustoTotal) * 1000;

console.log(lucro);
