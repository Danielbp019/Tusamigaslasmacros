// Buscador
function filtrarIndice() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.querySelectorAll("#indice li");
  let resultado = false;

  items.forEach((item) => {
    if (item.innerText.toLowerCase().includes(input)) {
      item.style.display = "list-item";
      resultado = true;
    } else {
      item.style.display = "none";
    }
  });

  let mensaje = document.getElementById("mensaje");
  if (!resultado) {
    mensaje.style.display = "block";
    mensaje.innerText = "No se encontraron resultados.";
  } else {
    mensaje.style.display = "none";
  }

  /* Limpieza del input al pulsar el boton */
  document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("search").value = "";
    filtrarIndice(); // Llamar a la función para que actualice la lista
  });
}

// Cambio dia y noche script
// Inicializar el tema guardado
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-bs-theme", savedTheme);
document.getElementById("themeSwitch").checked = savedTheme === "dark";

// Cambiar el tema al activar el switch
document.getElementById("themeSwitch").addEventListener("change", function () {
  const theme = this.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
  updateThemeIcon(theme);
});

// Actualizar el icono SVG según el tema
function updateThemeIcon(theme) {
  const icon = document.querySelector(".theme-icon-active use");
  if (theme === "dark") {
    icon.setAttribute("href", "#moon-stars-fill");
    document.querySelector(".theme-icon-active").classList.add("theme-dark");
  } else {
    icon.setAttribute("href", "#sun-fill");
    document.querySelector(".theme-icon-active").classList.remove("theme-dark");
  }
}
// Llamar a la función para actualizar el icono al cargar la página
updateThemeIcon(savedTheme);

/* Lectura automatica por voz */
const synth = window.speechSynthesis;
let voz = null;
let elementoLeyendo = null;

function seleccionarVoz() {
  const voces = synth.getVoices();
  voz =
    voces.find((v) => v.lang.startsWith("es") && v.name.toLowerCase().includes("natural")) ||
    voces.find((v) => v.lang.startsWith("es")) ||
    voces[0];
}

speechSynthesis.onvoiceschanged = seleccionarVoz;

function leer(id) {
  if (synth.speaking) synth.cancel();
  if (elementoLeyendo) {
    elementoLeyendo.classList.remove("leyendo");
  }

  const textoElemento = document.getElementById(id);
  const texto = textoElemento.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.voice = voz;

  utterance.onstart = () => {
    textoElemento.classList.add("leyendo");
    elementoLeyendo = textoElemento;
  };

  utterance.onend = () => {
    textoElemento.classList.remove("leyendo");
    elementoLeyendo = null;
  };

  utterance.onerror = () => {
    textoElemento.classList.remove("leyendo");
    elementoLeyendo = null;
  };

  synth.speak(utterance);
}

function pausar() {
  if (synth.speaking && !synth.paused) {
    synth.pause();
  } else if (synth.paused) {
    synth.resume();
  }
}

function parar() {
  synth.cancel();
  if (elementoLeyendo) {
    elementoLeyendo.classList.remove("leyendo");
    elementoLeyendo = null;
  }
}

window.onload = () => setTimeout(seleccionarVoz, 100);
