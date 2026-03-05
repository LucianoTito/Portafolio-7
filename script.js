const menu = document.querySelector(".main-menu");
const links = document.querySelectorAll(
  ".main-menu .main-menu__item .main-menu__link"
);
const fabars = document.querySelector(".fa-bars");

function handleMenu() {
  menu.classList.toggle("menu_show");
}

fabars.addEventListener("click", handleMenu);

links.forEach((link) => {
  link.addEventListener("click", handleMenu);
});

//CONTACTO//

function redirectToWhatsapp() {
  window.open("https://wa.me/543874527977", "_blank");
}

function redirectToEmail() {
  window.open("mailto:lucianotitocedron@gmail.com", "_blank");
}

//FOOTER
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* DARK MODE */
const button__dark = document.querySelector("#button__dark-mode");
const body = document.querySelector("body");

load();

button__dark.addEventListener("click", (e) => {
  body.classList.toggle("dark__mode");
  toggleIcon();
  store(body.classList.contains("dark__mode"));
});

function load() {
  const darkmode = localStorage.getItem("dark__mode");
  if (!darkmode) {
    store("false");
  } else if (darkmode == "true") {
    body.classList.add("darkmode");
    toggleIcon();
  }
}

function store(value) {
  localStorage.setItem("darkmode", value);
}

function toggleIcon() {
  const darkIcon = document.querySelector(".dark-mode-icon");
  const lightIcon = document.querySelector(".light-mode-icon");
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");
}

/* Cambiar idioma */
const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  try {
    const requestJson = await fetch(`/languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;

      if (textToChange.tagName === "INPUT" && textToChange.type === "submit") {
        textToChange.value = texts[section][value];
      } else if (
        textToChange.tagName === "INPUT" ||
        textToChange.tagName === "TEXTAREA"
      ) {
        textToChange.placeholder = texts[section][value];
      } else {
        textToChange.innerHTML = texts[section][value];
      }
    }
  } catch (error) {
    console.error("Error al cambiar el idioma:", error);
  }
};

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

/*Efecto de estrellas */

const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
  const layer = [];
  for (let i = 0; i < totalStars; i++) {
    const color = COLORS[~~(Math.random() * COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
  }
  const container = document.querySelector(selector);
  container.style.setProperty("--size", size);
  container.style.setProperty("--duration", duration);
  container.style.setProperty("--space-layer", layer.join(","));
};

generateSpaceLayer("2px", ".space-1", 350, "25s");
generateSpaceLayer("2.5px", ".space-2", 200, "20s");
generateSpaceLayer("4px", ".space-3", 25, "15s");


//Validaciones de formulario
const form = document.querySelector('.contact__container');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const mensaje = document.querySelector('#mensaje');

form.addEventListener('submit', (e) => {
    let isValid = true;

    // 1. Validar Nombre (que no sean solo espacios)
    if (nombre.value.trim().length < 3) {
        showError(nombre, "El nombre debe tener al menos 3 caracteres.");
        isValid = false;
    } else {
        hideError(nombre);
    }

    // 2. Validar Email con Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, "Ingresa un correo electrónico válido.");
        isValid = false;
    } else {
        hideError(email);
    }

    // 3. Validar Teléfono (mínimo 8 dígitos numéricos)
    if (telefono.value.trim().length < 8) {
        showError(telefono, "Ingresa un número de teléfono válido, debe tener al menos 8 dígitos.");
        isValid = false;
    } else {
        hideError(telefono);
    }

    // 4. Validar Mensaje
    if (mensaje.value.trim().length < 10) {
        showError(mensaje, "El mensaje es demasiado corto (mínimo 10 caracteres).");
        isValid = false;
    } else {
        hideError(mensaje);
    }

    // Si algo no es válido, detenemos el envío a FormSubmit
    if (!isValid) {
        e.preventDefault();
    }
});

function showError(input, message) {
    const errorSpan = document.getElementById(`error-${input.id}`);
    input.classList.add('invalid');
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
    }
}

function hideError(input) {
    const errorSpan = document.getElementById(`error-${input.id}`);
    input.classList.remove('invalid');
    if (errorSpan) {
        errorSpan.style.display = 'none';
    }
}