
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function () {
    somar(Number(valor1.value), Number(valor2.value));
});

let btSub = document.querySelector("#btSub");
btSub.addEventListener("click", function () {
    subtrair(Number(valor1.value), Number(valor2.value));
});

let btMulti = document.querySelector("#btMulti");
btMulti.addEventListener("click", function () {
    multiplicacao(Number(valor1.value), Number(valor2.value));
});

let btDiv = document.querySelector("#btDiv");
btDiv.addEventListener("click", function () {
    divisao(Number(valor1.value), Number(valor2.value));
});

function divisao(a, b) {
    let div = a / b;
    resultado.innerHTML = div;
}

function multiplicacao(a, b) {
    let multiplicacao = a * b;
    resultado.innerHTML = multiplicacao;
}

function subtrair(a, b) {
    let subtracao = a - b;
    resultado.innerHTML = subtracao;
}

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}

let selectedLanguage = document.querySelector("#idioma");
selectedLanguage.addEventListener("change", function () {
    if (this.value == "pt-br") {
        btSoma.value = "Soma";
        btSub.value = "Subtração";
        btMulti.value = "Multiplicação";
        btDiv.value = "Divisão";
        calculadora.textContent = "Calculadora";
    } else if (this.value == "en") {
        btSoma.value = "Sum";
        btSub.value = "subtraction";
        btMulti.value = "multiplication";
        btDiv.value = "division";
        calculadora.textContent = "Calculator";
    } else if (this.value == "es") {
        btSoma.value = "Suma";
        btSub.value = "sustracción";
        btMulti.value = "multiplicación";
        btDiv.value = "división";
        calculadora.textContent = "Calculadora";
    }
})