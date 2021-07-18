

function cadastroUsuario () {
  const nomeUsuario = document.getElementById('nome');
  const sobrenomeUsuario = document.getElementById('sobrenome');
  const emailUsuario = document.getElementById('email');


  const dados = JSON.parse(localStorage.getItem('dadosUsuario'));

  if(dados == null) {
    localStorage.setItem('dadosUsuario', '[]');
    dados = [];
  } 


  const dadosRegistro = {
    nome: nomeUsuario.value,
    sobrenome: sobrenomeUsuario.value,
    email: emailUsuario.value
  }


  dados.push(dadosRegistro);

  localStorage.setItem('dadosUsuario', JSON.stringify(dados));
}