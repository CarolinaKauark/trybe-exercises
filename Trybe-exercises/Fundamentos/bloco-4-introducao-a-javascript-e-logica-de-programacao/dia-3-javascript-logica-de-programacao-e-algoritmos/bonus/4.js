let n = 5;
let espaco = Math.ceil(n/2);

if(n>1){
    for(let i = 0; i < espaco ; i++){
        let aux2 = "";
        let aux = "";
        for(let j = n - i - 1; j > 0; j--){
                aux+= " ";
        }
        for(let k = 1 ; k <= i*2+1; k++){
                aux2+= "*";
        }
        console.log(aux + aux2);
    }
}


