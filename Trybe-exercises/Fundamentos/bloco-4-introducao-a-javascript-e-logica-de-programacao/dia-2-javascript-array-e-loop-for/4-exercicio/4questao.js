let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let number of numbers){
    if(number > 20){
        console.log(`O ${number} é maior que 20!`);
    }else{
        console.log(`O ${number} é menor ou igual a 20`);
    }
}
