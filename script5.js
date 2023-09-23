function Soma() {
    var numeroUm = parseInt(document.getElementById("valor1").value);
    var numeroDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numeroUm + numeroDois);
}
function Subtrair() {
    var numeroUm = parseInt(document.getElementById("valor1").value);
    var numeroDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numeroUm - numeroDois);
}
function Dividir() {
    var numeroUm = parseInt(document.getElementById("valor1").value);
    var numeroDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numeroUm / numeroDois);
}
function Multiplicar() {
    var numeroUm = parseInt(document.getElementById("valor1").value);
    var numeroDois = parseInt(document.getElementById("valor2").value);
    document.getElementById("res").innerHTML =
        "Resposta: " + (numeroUm * numeroDois);
}