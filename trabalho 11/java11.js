// Comparador de 2 números
document.getElementById("form2").addEventListener("submit", function (e) {
    e.preventDefault();

    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    const res = document.getElementById("resultado2");

    if (isNaN(n1) || isNaN(n2)) {
        res.textContent = "Por favor insere números válidos!";
        res.style.color = "red";
        return;
    }

    let msg = "";

    if (n1 === n2) {
        msg = `Os números são iguais: ${n1}`;
    } else {
        msg = `Maior: ${Math.max(n1, n2)} | Menor: ${Math.min(n1, n2)}`;
    }

    res.textContent = msg;
    res.style.color = "black";
});

// Comparador de 3 números
document.getElementById("form3").addEventListener("submit", function (e) {
    e.preventDefault();

    const a = Number(document.getElementById("n1").value);
    const b = Number(document.getElementById("n2").value);
    const c = Number(document.getElementById("n3").value);
    const res3 = document.getElementById("resultado3");

    if ([a, b, c].some(isNaN)) {
        res3.textContent = "Por favor insere números válidos!";
        res3.style.color = "red";
        return;
    }

    let msg = "";

    if (a === b && b === c) {
        msg = `Todos os números são iguais: ${a}`;
    } else {
        const maior = Math.max(a, b, c);
        const menor = Math.min(a, b, c);
        const diferentes = (a !== b && b !== c && a !== c)
            ? "Todos os números são diferentes."
            : "Existem números repetidos.";

        msg = `Maior: ${maior} | Menor: ${menor} <br>${diferentes}`;
    }

    res3.innerHTML = msg;
    res3.style.color = "black";
});
