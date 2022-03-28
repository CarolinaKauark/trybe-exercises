const btn = document.getElementById('btn-enviar');
const nomeCompleto = document.getElementById('nome');
const emailCompleto = document.getElementById('email');
const areaDeText = document.getElementById('justificativa');
const concordoArea = document.getElementById('concordo');

const validation = new window.JustValidate('#form');





// function validaForm() {
//   const nome = nomeCompleto.value.length;
//   const validaNome = nome > 10 && nome < 40;

//   const email = emailCompleto.value.length;
//   const validaEmail = email > 10 && email < 50; 

//   const text = areaDeText.value.length;
//   const validaText = text < 500;

//   if (validaNome && validaEmail && validaText) {
//       alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
//   } else {
//     alert('Dados inválidos');
//   }
// }

validation
  .addField('#nome', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'O nome é necessário!'
    },
  ])    

  .addField('#email', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      errorMessage: 'Email é necessário!',
    },
    {
      rule: 'email',
      errorMessage: 'Email é inválido!',
    },
  ])

  .addField('#concordo', [
    {
      rule: 'required',
      errorMessage: 'Você precisa concordar com o termo!',
    },
  ]);

// function usePreventDefault(event) {
//   event.usePreventDefault();

//   // validaForm();
// }

// btn.addEventListener('click', usePreventDefault);


