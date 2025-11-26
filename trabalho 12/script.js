document.getElementById("formNumero").addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.getElementById("numero");
    const mensagem = document.getElementById("mensagem");
    const valor = input.value.trim().toLowerCase(); // lowercase para não haver problemas de maiúsculas/minúsculas

    // Easter Egg: oxana
    if (valor === "oxana") {
        mensagem.innerHTML = `<img src="1764098412227.jpg" alt="Oxana Surprise" class="easter-egg">`;
        document.body.style.backgroundColor = "#ffe4e1"; // muda fundo para rosado
        mensagem.style.opacity = "1";
        return;
    }

    if (valor === "tania") {
        mensagem.innerHTML = `<img src="1000037384.jpg" alt="Tania Surprise" class="easter-egg">`;
        document.body.style.backgroundColor = "#ffe4e1"; // muda fundo para rosado
        mensagem.style.opacity = "1";
        return;
    }

    // Validação de número
    if (valor === "" || isNaN(valor)) {
        mensagem.textContent = " Introduz um número válido";
        mensagem.style.color = "red";
        mensagem.style.opacity = "1";
        document.body.style.backgroundColor = "#ff0000ff";
        return;
    }

    const numero = Number(valor);

    // Verifica par ou ímpar
    if (numero % 2 === 0) {
        mensagem.textContent = ` O número ${numero} é par`;
        mensagem.style.color = "blue";
        document.body.style.backgroundColor = "lightblue";
    } else {
        mensagem.textContent = ` O número ${numero} é ímpar`;
        mensagem.style.color = "orange";
        document.body.style.backgroundColor = "orange";
    }

    mensagem.style.opacity = "1";
});
