function indiceDoMaior (arr){
    let maior = 0;
    let aux = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > aux){
            aux = arr[i];
            maior = i;
        }
    }

    return maior;
}

let inteiros = [2, 3, 6, 7, 10, 1];
let maiorIndex = indiceDoMaior(inteiros);
console.log(maiorIndex);
