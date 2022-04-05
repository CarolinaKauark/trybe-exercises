//1.Crie uma função que receba um número e retorne seu fatorial.

// const fatorial = (num) => {
//     let fat = 1;
//     for (let index = num; index > 0; index -= 1) {
//         fat *= index;
//     }
//     return `O fatorial de ${num} é ${fat}!`;
// }

const fatorial = (n) => n !== 0 ? (n* fatorial(n-1)) : 1;

console.log(fatorial(4));

//2.Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (str) => {
    let arr = str.split(' ');
    let maior = arr[0];
    for (let index = 1; index < arr.length; index += 1) {
        if (maior.length < arr[index].length) {
            maior = arr[index];
        }
    }
    return maior;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
 // retorna 'aconteceu'

//  3.Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;

// const btn = document.getElementsByTagName('button')[0];
// let counter = document.getElementsByTagName('h1')[0];

// let clickCounter = 0;

// btn.addEventListener('click', () => counter.innerHTML = clickCounter +=1);

const skills = ['html', 'css', 'js', 'react', 'git'];

const xChange = (str) => {
    const frase = `Tryber ${str} aqui!`;
    const fraseSkills = (frase) => {
        let fraseCompleta = frase;
        skills.forEach((currentElement, index) => {
            fraseCompleta += ` 
            ${currentElement}`;
        });
        return fraseCompleta
    }
    return fraseSkills(frase);
}

console.log(xChange('bebeto'));
