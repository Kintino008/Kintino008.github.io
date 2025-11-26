// Estado do jogo
let saldo = 0;
let tentativas = 0;
let numeroSorteado = gerarNumero();
const history = document.getElementById("history");

// Elementos do DOM
const saldoDisplay = document.getElementById("saldoDisplay");
const mensagem = document.getElementById("mensagem");
const chequeDiv = document.getElementById("cheque");
const apostarBtn = document.getElementById("apostar");

// Função para gerar número aleatório entre 1 e 10
function gerarNumero() {
    return Math.floor(Math.random() * 10) + 1;
}

// Atualiza o saldo na interface
function atualizarSaldoDisplay() {
    saldoDisplay.textContent = saldo.toFixed(2);
}

// Carregar saldo
document.getElementById("carregarSaldo").addEventListener("click", () => {
    const valor = parseFloat(document.getElementById("saldoInput").value);
    if (isNaN(valor) || valor <= 0) {
        alert("Introduz um valor válido para o saldo.");
        return;
    }
    saldo += valor;
    atualizarSaldoDisplay();
    document.getElementById("saldoInput").value = "";
});

// Apostar
apostarBtn.addEventListener("click", () => {
    const apostaValor = parseFloat(document.getElementById("apostaValor").value);
    const apostaNumero = parseInt(document.getElementById("apostaNumero").value);
    const usarDica = document.getElementById("usarDica").checked;

    // Validação
    if (isNaN(apostaValor) || apostaValor <= 0) {
        alert("Valor de aposta inválido.");
        return;
    }
    if (isNaN(apostaNumero) || apostaNumero < 1 || apostaNumero > 10) {
        alert("Número de aposta inválido (1 a 10).");
        return;
    }
    if (apostaValor > saldo) {
        alert("Não tens saldo suficiente para essa aposta.");
        return;
    }

    tentativas++;
    let resultado = "";
    let dica = "";

    // Verifica se acertou
    if (apostaNumero === numeroSorteado) {
        let ganho = usarDica ? apostaValor * 0.9 : apostaValor;
        saldo += ganho;
        resultado = "Acertou!";
        mensagem.textContent = "🎉 Parabéns! Acertaste!";
        mensagem.style.color = "white";
        document.body.style.backgroundColor = "green";

        // Bloqueia inputs e botão
        document.getElementById("apostaValor").disabled = true;
        document.getElementById("apostaNumero").disabled = true;
        document.getElementById("usarDica").disabled = true;
        apostarBtn.disabled = true;

        // Emite cheque
        chequeDiv.style.display = "block";
        chequeDiv.innerHTML = `CHEQUE<br>Nome: Tania<br>Quantia: ${ganho.toFixed(2)}€`;
    } else {
        saldo -= apostaValor;
        resultado = "Falhou!";
        mensagem.textContent = "❌ Errou Oxana! Tenta novamente.";
        mensagem.style.color = "white";
        document.body.style.backgroundColor = "red";

        // Dá dica **apenas se usarDica estiver marcado**
        if (usarDica) {
            dica = apostaNumero < numeroSorteado ? "Maior" : "Menor";
        } else {
            dica = "";
        }
    }

    atualizarSaldoDisplay();

    // Regista no histórico
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${apostaNumero}</td><td>${resultado}</td><td>${dica}</td><td>${saldo.toFixed(2)}€</td>`;
    history.appendChild(tr);

    // Atualiza tentativas
    document.getElementById("tentativas").textContent = tentativas;

    // Limpa inputs da aposta
    document.getElementById("apostaNumero").value = "";
    document.getElementById("apostaValor").value = "";
});
