//Exercício 1

const newPerson = (nome) => { 
    return {
        nomeCompleto: nome,
        email: `${nome.split(' ').join('_')}@trybe.com `,
    }    
};

const newEmployees = (newPerson) => {
    const employees = {
      id1: newPerson('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: newPerson('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: newPerson('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(newPerson));


  //Exercício 2

  const numAleatorio = () => Math.round(Math.random() * 5);

  const sorteio = (num, func) => {
      if (num === func()) {
          return "Parabéns você ganhou";
      } else {
          return "Tente novamente";
      }
  }

  console.log(sorteio(1, numAleatorio))

  //Exercício 3

  const avaliador = (resposta, tentativa) => {
      let contador = 0;
      for (let index = 0; index < resposta.length; index += 1) {
        if(resposta[index] === tentativa[index]) {
            contador += 1; 
        } else if (resposta[index] !== tentativa[index] && tentativa[index] !== 'N.A') {
            contador -= 0.5;
        }
  }

  const resul = (resposta, tentativa, func) => {
    func(resposta, tentativa);
  }

