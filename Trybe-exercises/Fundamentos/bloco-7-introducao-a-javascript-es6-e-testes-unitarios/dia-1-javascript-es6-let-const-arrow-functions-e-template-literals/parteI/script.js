// function testingScope(escopo) {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
// //   }

//   testingScope(true);

  const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope}. ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
      } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
      }
  };

  testingScope(true);

// const testingScope = (escopo) => ( escopo === true ? console.log(`Não devo ser utilizada fora do meu escopo (if)`) : console.log(`Não devo ser utilizada fora meu escopo (else)`));

// testingScope(true);