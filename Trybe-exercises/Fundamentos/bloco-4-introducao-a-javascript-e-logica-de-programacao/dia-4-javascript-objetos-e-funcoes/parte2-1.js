// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verifyPalidrom(word){
    for(let i = 0; i < word.length/2; i++){
        if(word[i] !== word[word.length - i -1]){
            return false;
        }else{
            return true;
        }
    }
}

console.log(verifyPalidrom('desenvolvimento'));