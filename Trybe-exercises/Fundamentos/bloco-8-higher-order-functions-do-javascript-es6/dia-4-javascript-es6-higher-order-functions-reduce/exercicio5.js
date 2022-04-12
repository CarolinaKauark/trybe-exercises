const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    const a = names.reduce((acc, nome) => { 
        for(let i = 0; i < nome.length; i += 1) {
            nome[i] === 'a' || nome[i] === 'A' ? acc += 1 : acc;
        } return acc;}, 0);
    return a;
  }
  console.log(containsA());