let maior = 3 ;
let contador;

for(let j = 3; j <=50 ; j+= 1){
    //contador são os divisores dos num
    contador = 0;

    //o loop tem que ir até o ultimo num, se não ele não conta ele mesmo e por isso da erro: ou seja i <= j e não i < j.
    for(let i = 1; i <= j ; i+= 1){
        // Esse if conta quantos divisóres o num tem.
        if(j % i == 0){
            contador ++;
        }
    }
    // Se ele tiver mais de dois (ou seja, 1 e ele mesmo), ele não é primo
    //Como queremos o maior e já estamos em um loop crescente, o maior vai ser sempre o mais recente.
    if(contador == 2){
            maior = j;
    }
}

console.log(maior);