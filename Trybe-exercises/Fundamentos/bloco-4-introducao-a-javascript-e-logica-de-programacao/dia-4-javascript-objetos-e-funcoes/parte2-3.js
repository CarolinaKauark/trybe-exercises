function indiceDoMenor (arr){
    let menor = 0;
    let aux = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < aux){
            aux = arr[i];
            menor = i;
        }
    }

    return menor;
}

let inteiros = [2, 4, 6, 7, 10, 0, -3];
let menorIndex = indiceDoMenor(inteiros);
console.log(menorIndex);