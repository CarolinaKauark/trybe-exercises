const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

  const createKey = function(obj, newkey, newValue) {
    obj[newkey] = newValue;
  }

  createKey(lesson2, 'turno', 'noite');
  console.log(lesson2);

  const showKeys = (obj) => Object.keys(obj);
  console.log(showKeys(lesson1));

  const objLength = (obj) => Object.keys(obj).length;
  console.log(objLength(lesson1));

  const showValues = (obj) => Object.values(obj);
  console.log(showValues(lesson2));

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  console.log(allLessons);

  function totalStudent(obj) {
    let students = 0;
    const objInside = Object.keys(obj);
    for(key in obj) {
        students += obj[objInside[key]].numeroEstudantes;
    }
    return students;
  }

  const mostraValor = (obj, index) => {
    const arrObj = Object.values(obj);
      return arrObj[index];
  };

  console.log(mostraValor(lesson1, 0));

  const verificaChaveValor = (obj, key, value) => {
    if(Object.keys(obj).includes(key)) {
        if(obj[key] === value) {
            return true;
        }
    }
    return false
  }

  console.log(verificaChaveValor(lesson3, 'turno', 'noite'));
  console.log(verificaChaveValor(lesson3, 'materia', 'Maria Clara'));


