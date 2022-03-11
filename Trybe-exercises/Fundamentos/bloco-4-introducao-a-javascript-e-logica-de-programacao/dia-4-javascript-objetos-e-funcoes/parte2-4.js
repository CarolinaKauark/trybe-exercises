let maiorNome = function(arr){
    let name = arr[0];

    for(let i = 1; i <arr.length; i +=1){
        if(arr[i].length > name.length){
            name = arr[i];
        }
    }
    return name;
}


let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(nomes));