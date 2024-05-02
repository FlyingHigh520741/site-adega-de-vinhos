

function comprar() {
    alert("item adicionado ao carrinho")
}

function atualizarTotal() {
    var preco = 200; // Preço unitário da Pergola
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var cupom = document.getElementById('cupom').value;
    var desconto = 0;


    if (cupom === "FIAP2024") {
        desconto = 10;
    }


    var totalSemDesconto = preco * quantidade;


    var descontoValor = (totalSemDesconto * desconto) / 100;


    var totalComDesconto = totalSemDesconto - descontoValor;

    document.getElementById('total').innerText = "R$" + totalComDesconto.toFixed(2);
    document.getElementById('desconto-aplicado').innerText = "R$" + descontoValor.toFixed(2);
}

function enviarEmail() {
    alert('Email enviado com sucesso!')
}
function favoritar() {
    var vazio = window.document.getElementsByClassName("favVazio");
    var preenchido = window.document.getElementsByClassName("favPreenchido");



    if (vazio[0].style.display !== 'none') {

        vazio[0].style.display = 'none';
        preenchido[0].style.display = 'flex';
        alert('Item adicionado aos favoritos!')
    } else {

        vazio[0].style.display = 'flex';
        preenchido[0].style.display = 'none';
        alert('Item removido dos favoritos!')
    }


}

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentRating = document.getElementById("comment-rating");
    const commentsContainer = document.getElementById("comments-container");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que o formulário seja enviado

        const commentText = commentInput.value;
        const commentScore = parseInt(commentRating.value);
        if (commentText.trim() !== "") {
            addComment(commentText, commentScore);
            commentInput.value = ""; // Limpa o campo de entrada após enviar o comentário
        }
    });

    function addComment(text, score) {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `
            <p>${text}</p>
            <p>Nota: ${score}</p>
        `;
        commentsContainer.appendChild(commentElement);
    }

});

function entrar(event) {

    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login === "1234" && senha === "1234") {
        alert("logado com sucesso");
        window.location.href = '../homepage.html';

    }
    else {
        alert("Usuário ou senha inválidos");
    }
}

function sim(event) 
{
window.location.href = '../homepage.html';
}

function não(event) {
window.location.href = "https://www.peppapig.com/pt-br";
}

/* 
var vinhos = "jngfo"

switch (vinhos){
    case "rose":
        console.log("Vai bem com macarrão a bolonhesa")
    break;
    case "branco":
        console.log("Vai bem com risoto");
    break;
    default:
        console.log("Infelizmente não temos essa opção")
    break

} */

