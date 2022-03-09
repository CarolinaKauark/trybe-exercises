let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = array[0];

for(let i = 0; i < array.length; i++){
    if(array[i].length > maior.length){
        maior = array[i];
    }
}

for(let i = 1; i < array.length; i++){
    if(array[i].length < menor.length){
        menor = array[i];
    }
}

console.log(maior);
console.log(menor);