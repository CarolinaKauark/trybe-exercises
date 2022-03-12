let somatorio = function(n){
    let sum = 0;
    for(let i = 0; i <= n; i+=1){
        sum+= i;
    }
    return sum;
}

console.log(somatorio(5));