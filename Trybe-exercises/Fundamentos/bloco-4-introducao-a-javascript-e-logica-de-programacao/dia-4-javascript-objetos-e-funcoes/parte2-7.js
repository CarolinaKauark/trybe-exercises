function verificaFimPalavra(word, ending){
    let aux = word.length - ending.length;
    if(word.length > ending.length){
        for(let i = 0; i <= ending.length; i+=1){
            if(ending[i] !== word[aux + i]){
                return false;
            }
        }
        return true;
    }
    
}



let str = 'trybe';
console.log(verificaFimPalavra(str, 'be'));

//Com métodos
// console.log(str.endsWith('be'));
