function inverter () {
    var texto = document.getElementById("texto").value;
    console.log(texto)
    var arrayTexto = texto.split("");
    console.log(arrayTexto);
    var inverteArray = arrayTexto.reverse();
    console.log(inverteArray);
    var unirArray = inverteArray.join("");
    console.log(unirArray);
    var textoInvertido = document.querySelector(".textoInvertido");
    textoInvertido.append(unirArray);
}

function limpar() {
    var texto = document.getElementById("texto");
    texto.value = "";
    var textoInvertido = document.querySelector(".textoInvertido");
    textoInvertido.innerHTML = "";
}