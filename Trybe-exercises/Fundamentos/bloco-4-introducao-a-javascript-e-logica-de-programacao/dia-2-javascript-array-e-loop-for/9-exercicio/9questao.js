const newArr = [];

for(let index = 0; index < 25; index+=1){
    newArr[index] = (index+1);
}

console.log(newArr);

for( let number of newArr){
    console.log(number/2);
}