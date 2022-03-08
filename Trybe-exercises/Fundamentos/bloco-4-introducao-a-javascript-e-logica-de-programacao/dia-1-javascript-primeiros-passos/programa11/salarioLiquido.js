let salarioBruto = 3000;
let salarioSemInss = 0;
let valorIr = 0;

if (salarioBruto <= 1556.94){
    salarioSemInss = salarioBruto - (salarioBruto*0.08);
}else if(1556.94 < salarioBruto && salarioBruto <= 2594.92){
    salarioSemInss = salarioBruto - (salarioBruto*0.09);
}else if(2594.92 < salarioBruto && salarioBruto <= 5189.82){
    salarioSemInss = salarioBruto - (salarioBruto*0.11);
}else{
    salarioSemInss = 570.88
}

console.log(salarioSemInss);


if(salarioSemInss <= 1903.98){
    valorIr = 0;
}else if(1903.98 < salarioSemInss && salarioSemInss <= 2826.65){
    valorIr = (salarioSemInss*0.075) - 142.80;
}else if(2826.65 < salarioSemInss && salarioSemInss <= 3751.05){
    valorIr = (salarioSemInss*0.15) - 354.80;
}else if(3751.05 < salarioSemInss && salarioSemInss <= 4664.68){
    valorIr = (salarioSemInss*0.225) - 636.13;
}else{
    valorIr = (salarioSemInss*0.275) - 869.36;
}


let salarioLiquido = salarioSemInss - valorIr;

console.log(salarioLiquido);
