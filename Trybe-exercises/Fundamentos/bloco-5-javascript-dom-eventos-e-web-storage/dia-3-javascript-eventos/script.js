function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
  createDaysOfTheWeek();

// Exercício 1
function createDaysOfTheMonth(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const month = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const day = dezDaysList[index];
        const dayLi = document.createElement('li');
                
        if (day == 24 || day == 31) {
            dayLi.classList = 'day holiday';
        } else if (day == 4 || day == 11 || day == 18) {
            dayLi.classList = 'day friday';
        } else if (day == 25){
            dayLi.classList = 'day holiday friday';
        } else {
            dayLi.classList = 'day';
        }

        dayLi.innerHTML = day;
        month.appendChild(dayLi);

    }
}

createDaysOfTheMonth();

//Exercício 2
function createButton (string){
    const btn = document.createElement('button');
    btn.innerHTML = string;
    btn.id = 'btn-holiday';
    document.getElementsByClassName('buttons-container')[0].appendChild(btn);
}

createButton('Feriados');


//Exercício 3
function holidayBackground () {
    const holidays = document.querySelectorAll('.holiday');
    for (let index = 0; index < holidays.length; index += 1) {
        if (holidays[index].style.backgroundColor == 'green'){
            holidays[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            holidays[index].style.backgroundColor = 'green';
        }
    }
}

document.querySelector('#btn-holiday').addEventListener('click', holidayBackground);

//Exercício 4
function dayButton (weekDay) {
    const btn = document.createElement('button');
    btn.innerHTML = weekDay;
    btn.id = 'btn-friday';

    document.querySelector('.buttons-container').appendChild(btn);
}

dayButton('Sexta-Feira');

//Exercício 5
function sextou (fridayList) {
    const fridays = document.querySelectorAll('.friday');

    document.querySelector('#btn-friday').addEventListener('click', function(){
        for (let index = 0; index < fridays.length; index += 1) {
            if (fridays[index].innerText != 'Sextou'){
                fridays[index].innerText = 'Sextou';
            } else {
                fridays[index].innerText = fridayList[index];
            }
        }
    })
};

const fridayList = [4, 11, 18, 25];

sextou(fridayList);

//Exercício 6
function mouseOver () {
    let monthDay = document.querySelector('#days');

    monthDay.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';

    })
};

function mouseOut () {
    let monthDay = document.querySelector('#days');

    monthDay.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';

    })
};

mouseOver();
mouseOut();


//Exercício 7
function tarefaPersonalizada (nomeTarefa) {
    const tarefa = document.createElement('span');
    tarefa.innerHTML = nomeTarefa;
    document.querySelector('.my-tasks').appendChild(tarefa);
};

tarefaPersonalizada('Cozinhar');

//Exercício  8 
function corTarefa(cor){
    const tarefaDiv = document.createElement('div');
    tarefaDiv.style.backgroundColor = cor;
    tarefaDiv.classList = 'task';
    document.querySelector('.my-tasks').appendChild(tarefaDiv);
}

corTarefa('green');

//Exercício 9
function selecionarTarefa() {
    let tarefa = document.querySelector('.task');
    
    tarefa.addEventListener('click', function() {
        if (tarefa.classList == 'task') {
            tarefa.classList.add('selected');
        } else if (tarefa.classList == 'task selected'){
            tarefa.classList.remove('selected');
        }
    } )
}

selecionarTarefa();


//Exercício 10

function tarefaCalendario() {
    let monthDay = document.querySelector('#days');
    const tarefaSelecionada = document.getElementsByClassName('selected'); //pq não consigo usar o querySelectoraAll('.selected') ?
    let colorTask = document.querySelector('.task').style.backgroundColor;

    monthDay.addEventListener('click', function(event){
        //essa primeira condição não funciona com uso o querySelectorAll lá na const tarefaSelecionada
        if (tarefaSelecionada.length > 0){ 
            if (event.target.style.color == colorTask) {
                event.target.style.color = 'rgb(119,119,119)';
           } else {
               event.target.style.color = colorTask;
           }
        }
    });

}

tarefaCalendario();

//bonus






