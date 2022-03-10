let n = 5;


if(n>1){
    for(let i = 1; i <= n ; i++){
        let aux = "";
        for(let j = 0 ; j < i; j++){
                aux+= "*";
        }
        console.log(aux);
    }
}