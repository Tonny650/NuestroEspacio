// Revisar si ya está autenticado
if (localStorage.getItem("autenticado") === "true") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-menu").style.display = "block";
}


const PIN_CODE = "110725";
let enteredPin = "";

const passwordScreen = document.getElementById("password-screen");
const pinDisplay = document.getElementById("pin-display");
const pinButtons = document.querySelectorAll(".pin-btn");
const pinClear = document.getElementById("pin-clear");
const pinEnter = document.getElementById("pin-enter");
const passwordError = document.getElementById("password-error");
const menu = document.getElementById("main-menu");

function updatePinDisplay() {
    pinDisplay.textContent = enteredPin.padEnd(6, "•");
}

pinButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;
        if (!isNaN(value)) {
            if (enteredPin.length < 6) {
                enteredPin += value;
                updatePinDisplay();
            }
        }
    });
});

pinClear.addEventListener("click", () => {
    enteredPin = enteredPin.slice(0, -1);
    updatePinDisplay();
});

pinEnter.addEventListener("click", () => {
    if (enteredPin === PIN_CODE) {
        // Guardar que el usuario está autenticado
        localStorage.setItem("autenticado", "true");

        passwordScreen.style.opacity = "0";
        passwordScreen.style.transition = "opacity 0.8s ease";
        setTimeout(() => {
            passwordScreen.style.display = "none";
            menu.style.display = "block";
        }, 800);
    } else {
        passwordError.textContent = "PIN incorrecto. Intenta de nuevo.";
        passwordError.style.display = "block";
        enteredPin = "";
        updatePinDisplay();
    }
});

updatePinDisplay();

document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
        const action = item.getAttribute("data-action");
        if (action === "carta") {
            window.location.href = "carta.html";
        } else if (action === "contador") {
            window.location.href = "contador.html";
        } else if (action === "fotos") {
            window.location.href = "fotos.html";
        }
    });
});

document.getElementById("btn-logout").addEventListener("click", () => {
    localStorage.removeItem("autenticado");
    window.location.href = "index.html";
});
