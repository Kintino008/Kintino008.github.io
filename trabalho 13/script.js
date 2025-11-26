let saldo = 0;
let tentativas = 0;
let numeroSorteado = gerarNumero();

const history = document.getElementById("history");
const saldoDisplay = document.getElementById("saldoDisplay");
const mensagem = document.getElementById("mensagem");
const chequeDiv = document.getElementById("cheque");
const apostarBtn = document.getElementById("apostar");
const imgVitoria = document.getElementById("imgVitoria");

function gerarNumero() {
    return Math.floor(Math.random() * 10) + 1;
}

function atualizarSaldoDisplay() {
    saldoDisplay.textContent = saldo.toFixed(2);
}

document.getElementById("carregarSaldo").addEventListener("click", () => {
    const valor = parseFloat(document.getElementById("saldoInput").value);
    if (isNaN(valor) || valor <= 0) {
        alert("Introduz um valor válido para carregar saldo.");
        return;
    }

    saldo += valor;
    atualizarSaldoDisplay();
    document.getElementById("saldoInput").value = "";
});

apostarBtn.addEventListener("click", () => {
    const apostaValor = parseFloat(document.getElementById("apostaValor").value);
    const apostaNumero = parseInt(document.getElementById("apostaNumero").value);
    const usarDica = document.getElementById("usarDica").checked;

    if (isNaN(apostaValor) || apostaValor <= 0) {
        alert("Valor de aposta inválido.");
        return;
    }
    if (isNaN(apostaNumero) || apostaNumero < 1 || apostaNumero > 10) {
        alert("Número inválido (1-10).");
        return;
    }
    if (apostaValor > saldo) {
        alert("Saldo insuficiente.");
        return;
    }

    tentativas++;
    let resultado = "";
    let dica = "";

    if (apostaNumero === numeroSorteado) {

        let ganho = usarDica ? apostaValor * 0.9 : apostaValor;
        saldo += ganho;
        resultado = "Acertou!";

        mensagem.textContent = "🎉 Acertaste!";
        document.body.style.backgroundColor = "green";

        // ÁUDIO DE VITÓRIA
        const audio = new Audio("pou-estourado_zIWCpMy.mp3");
        audio.play();

        // MOSTRAR IMAGEM DE VITÓRIA
        imgVitoria.style.display = "block";

        // Bloquear inputs
        document.getElementById("apostaValor").disabled = true;
        document.getElementById("apostaNumero").disabled = true;
        document.getElementById("usarDica").disabled = true;
        apostarBtn.disabled = true;

        // CHEQUE
        chequeDiv.style.display = "block";
        chequeDiv.innerHTML = `CHEQUE<br>Nome: Jogador<br>Quantia: ${ganho.toFixed(2)}€`;

    } else {
        saldo -= apostaValor;
        resultado = "Falhou";

        mensagem.textContent = "❌ Erraste!";
        document.body.style.backgroundColor = "red";

        if (usarDica) {
            dica = apostaNumero < numeroSorteado ? "Maior" : "Menor";
        }
    }

    atualizarSaldoDisplay();

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${apostaNumero}</td>
        <td>${resultado}</td>
        <td>${dica}</td>
        <td>${saldo.toFixed(2)}€</td>
    `;
    history.appendChild(tr);

    document.getElementById("tentativas").textContent = tentativas;

    document.getElementById("apostaNumero").value = "";
    document.getElementById("apostaValor").value = "";
});
