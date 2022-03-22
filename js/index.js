var candidatos = [
  {
    numero: 45,
    nome: "Pedrinho",
    imagem: "https://cdn-icons-png.flaticon.com/512/1373/1373255.png",
    partido: "PSDB"
  },
  {
    numero: 22,
    nome: "Zezinho",
    imagem: "https://cdn-icons-png.flaticon.com/512/1373/1373255.png",
    partido: "PT"
  },
];

var digito1 = document.querySelector('#digito1');
var digito2 = document.querySelector('#digito2');
var container = document.querySelector('#candidato');
var imgCandidato = document.querySelector('#imgCandidato');
var nomeCandidato = document.querySelector('#nomeCandidato');
var partidoCandidato = document.querySelector('#partidoCandidato');

var btnBranco = document.querySelector('#branco');
var btnCorrige = document.querySelector('#corrige');
var btnConfirma = document.querySelector('#confirma');

var alertBranco = document.querySelector('#alertBranco');
var alertConfirma = document.querySelector('#alert');

var numeroCandidato = 0;

window.onload = function() {
  container.style.display = 'none';
  alertBranco.style.display = 'none';
  alertConfirma.style.display = 'none';
  btnConfirma.disabled = true;
}

digito1.onkeyup = function () {
  if (digito1.value <= 0 || digito1.value > 9) {
    console.log(digito1.value);
    digito1.value = '';
  } else {
    digito2.focus();
    digito1.disabled = true;
  }
};

digito2.onkeyup = function () {
  if (digito1.value <= 0 || digito1.value > 9) {
    console.log(digito1.value);
    digito1.value = '';
  }
  digito2.disabled = true;
  numeroCandidato = digito1.value + digito2.value;
  procuraCandidato();
};

function procuraCandidato() {
  candidatos.map((candidato) => {
    if (candidato.numero == numeroCandidato) {
      imgCandidato.src = candidato.imagem;
      nomeCandidato.innerHTML = candidato.nome;
      partidoCandidato.innerHTML = candidato.partido + ' ' + candidato.numero;
      container.style.display = '';
      btnConfirma.disabled = false;
    }
  });
} 

btnCorrige.onclick = function() {
  digito1.value = '';
  digito1.disabled = false;
  digito2.value = '';
  digito2.disabled = false;
  container.style.display = 'none';
  btnConfirma.disabled = true;
  digito1.focus();
} 

btnBranco.onclick = function() {
  alertBranco.style.display = '';
}

btnConfirma.onclick = function() {
  alertConfirma.style.display = '';
}
