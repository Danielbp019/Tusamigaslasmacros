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
