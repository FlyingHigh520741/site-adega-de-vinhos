

function comprar(){
    alert("item adicionado ao carrinho")
}

function atualizarTotal() {
    var preco = 200; // Preço unitário da Pergola
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var cupom = document.getElementById('cupom').value;
    var desconto = 0;

    // Verificar se o cupom é válido e definir o desconto correspondente
    if (cupom === "FIAP2024") {
        desconto = 10; // 10% de desconto para o cupom "FIAP2024"
    }
    
    // Cálculo do total sem desconto
    var totalSemDesconto = preco * quantidade;
    
    // Cálculo do desconto
    var descontoValor = (totalSemDesconto * desconto) / 100;
    
    // Total com desconto
    var totalComDesconto = totalSemDesconto - descontoValor;
    
    // Exibir os valores
    document.getElementById('total').innerText = "R$" + totalComDesconto.toFixed(2);
    document.getElementById('desconto-aplicado').innerText = "R$" + descontoValor.toFixed(2);
}

function enviarEmail(){
    alert('Email enviado com sucesso!')
}
function favoritar(){
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

document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentRating = document.getElementById("comment-rating");
    const commentsContainer = document.getElementById("comments-container");

    commentForm.addEventListener("submit", function(event) {
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