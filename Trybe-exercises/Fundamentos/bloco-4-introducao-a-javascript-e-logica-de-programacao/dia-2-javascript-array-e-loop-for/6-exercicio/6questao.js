let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];

for (let number of numbers){
    if(number%2 !== 0){
        impares.push(number);
    }
}

console.log(impares); 