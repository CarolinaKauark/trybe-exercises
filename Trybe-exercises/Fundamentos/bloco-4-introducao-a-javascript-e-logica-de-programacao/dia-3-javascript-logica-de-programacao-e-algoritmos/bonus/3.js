let n = 5;


if(n>1){
    for(let i = 1; i <= n ; i++){
        let aux2 = "";
        let aux = "";
        for(let j = n - i; j > 0; j--){
                aux+= " ";
        }
        for(let k = 1 ; k <= i; k++){
                aux2+= "*";
        }
        console.log(aux + aux2);
    }
}