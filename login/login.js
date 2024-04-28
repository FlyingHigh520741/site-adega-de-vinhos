function entrar(event) {

var login = document.getElementById("login").value;
var senha = document.getElementById("senha").value;

if (login==="1234" && senha==="1234")
    window.location.href = 'https://git-scm.com/book/en/v2/Getting-Started-Installing-Git';

else {
    alert("Usuário ou senha inválidos");
}
}