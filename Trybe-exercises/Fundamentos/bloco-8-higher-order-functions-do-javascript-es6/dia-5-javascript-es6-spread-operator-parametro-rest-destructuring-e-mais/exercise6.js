const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObj = (carro) => {
    let [car, marca, ano] = carro;
    return { car, marca, ano};
}
console.log(toObj(palio));

const toObje = ([car, marca, ano]) => {car, marca, ano};