function entrar(event) {

var login = document.getElementById("login").value;
var senha = document.getElementById("senha").value;

if (login==="1234" && senha==="1234"){
    alert("logado com sucesso");
    window.location.href ='../site/index.html';
    
}
else {
    alert("Usuário ou senha inválidos");
}
}