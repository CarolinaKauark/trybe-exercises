let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for ( let k = 0; k < array.length; k++) {
    if(array[k+1] !== undefined){
        newArray.push(array[k]*array[k+1])
    }else{
        newArray.push(array[k]*2);
    }
}

console.log(newArray);

//[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]