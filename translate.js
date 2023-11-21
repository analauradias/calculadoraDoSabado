let linguaPortuguesa = document.createElement("script");
linguaPortuguesa.scr = "./idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

let linguaEspanhola = document.createElement("script");
linguaEspanhola.scr = "./idiomas/espanhol.js";
document.head.appendChild(linguaEspanhola);

let linguaInglesa = document.createElement("script");
linguaInglesa.scr = "./idiomas/english.js";
document.head.appendChild(linguaInglesa);

let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function(){
    translate(this.value);
});

function translate(idioma) {
    let traducao = 
    (idioma = pt-br)? portugues()
    : (idioma = es)? espanhol()
    : (idioma = en)? english()
    : null;
    let btSoma = document.querySelector("#btSoma");
    btSoma.value = traducao.soma;
    let btSub = document.querySelector("#btSub");
    btSub.value = traducao.sub;
    let btMulti = document.querySelector("#btMulti");
    btMulti.value = traducao.multi;
    let btDiv = document.querySelector("#btDiv");
    btDiv.value = traducao.div;
}