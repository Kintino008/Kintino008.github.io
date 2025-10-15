var luzVermelha = document.getElementById("vermelha");
var luzAmarela = document.getElementById("amarela");
var luzVerde = document.getElementById("verde");

function desligarTodas() {
  luzVermelha.style.backgroundColor = "#111";
  luzAmarela.style.backgroundColor = "#111";
  luzVerde.style.backgroundColor = "#111";
}

function ligarVermelho() {
  desligarTodas();
  luzVermelha.style.backgroundColor = "red";
}

function ligarAmarelo() {
  desligarTodas();
  luzAmarela.style.backgroundColor = "yellow";
}

function ligarVerde() {
  desligarTodas();
  luzVerde.style.backgroundColor = "green";
}

function desligar() {
  desligarTodas();
}
