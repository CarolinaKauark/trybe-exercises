const btn = document.getElementById('btn-enviar');
const nomeCompleto = document.getElementById('nome');
const emailCompleto = document.getElementById('email');
const areaDeText = document.getElementById('justificativa');
const concordoArea = document.getElementById('concordo');




function validaForm() {
  const nome = nomeCompleto.value.length;
  const validaNome = nome > 10 && nome < 40;

  const email = emailCompleto.value.length;
  const validaEmail = email > 10 && email < 50; 

  const text = areaDeText.value.length;
  const validaText = text < 500;

  if (validaNome && validaEmail && validaText) {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
  } else {
    alert('Dados inválidos');
  }
}

function usePreventDefault(event) {
  event.usePreventDefault();

  validaForm();
}

btn.addEventListener('click', usePreventDefault);


