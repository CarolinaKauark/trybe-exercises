let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
//   }

for ( let k = 1; k < array.length; k++) {
    // Dentro de cada iteração
    // percorremos novamente o array
    // em busca dos pares
    for (let j = 0; j < array.length - k; j++) {
        // Comparamos
        if (array[j] > array[j + 1]) {
            // swap (trocamos)
            let aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;
        }
    }
}

console.log(array);

for ( let k = 1; k < array.length; k++) {
    // Dentro de cada iteração
    // percorremos novamente o array
    // em busca dos pares
    for (let j = 0; j < array.length - k; j++) {
        // Comparamos
        if (array[j] < array[j + 1]) {
            // swap (trocamos)
            let aux = array[j];
            array[j] = array[j + 1];
            array[j + 1] = aux;
        }
    }
}

console.log(array);