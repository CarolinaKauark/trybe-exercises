let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers[0];

// for (let index = 1; index < numbers.length; index+=1){
//     if(numbers[index] < menor){
//         menor = numbers[index];
//     }
// }

for(let number of numbers){
    if(number < menor){
       menor = number;
    }
}


console.log(menor);