const txtarea = document.querySelector(".textarea");
const txtNuevo = document.querySelector('.textoNuevo')
const areaNuevo = document.querySelector('.contenedor-texto')
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const mun = document.querySelector(".mun");
const tmun = document.querySelector("#tmun");
const pmun = document.querySelector("#pmun");
const btnCop = document.querySelector(".btncopiar");

let textoNuevo = "";

btn.addEventListener("click", () => {
  const text = txtarea.value;
  encriptar(text);
});

btn2.addEventListener("click", () => {
  const text = txtarea.value;
  desencriptar(text);
});
btnCop.addEventListener("click", () => {
  const text = txtNuevo.innerText;
  console.log(text)
  navigator.clipboard.writeText(text)
})

function encriptar(text) {
  if (text == "") return alert("No hay texto que encriptar");
  textoNuevo = ""
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "e":
        textoNuevo += "enter";
        break;
      case "i":
        textoNuevo += "imes";
        break;
      case "a":
        textoNuevo += "ai";
        break;
      case "o":
        textoNuevo += "ober";
        break;
      case "u":
        textoNuevo += "ufat";
        break;
      default:
        textoNuevo += text[i];
    }
    incluirTexto(textoNuevo);
  }
}

function desencriptar(text) {
  if (text == "") return alert("No hay texto que desencriptar");

  let cifradoText = text.replace(/enter/gm, "e");
      cifradoText = cifradoText.replace(/imes/gm, "i");
      cifradoText = cifradoText.replace(/ai/gm, "a");
      cifradoText = cifradoText.replace(/ober/gm, "o");
      cifradoText = cifradoText.replace(/ufat/gm, "u");
    console.log(cifradoText)
    incluirTexto(cifradoText)
  }


function incluirTexto(textoNuevo) {
  console.log(textoNuevo);
  const textNew = document.querySelector(".textoNuevo");

  tmun.classList.add("hidden");
  pmun.classList.add("hidden");
  mun.classList.add("hidden");
  areaNuevo.classList.add('grid')
  btnCop.classList.remove("hidden");
  textNew.innerHTML = textoNuevo;
}
