const fotos = document.querySelectorAll(".foto img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalFecha = document.getElementById("modal-fecha");
const cerrarModal = document.getElementById("cerrar-modal");

// Abrir modal
fotos.forEach(foto => {
    foto.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = foto.src;
        modalFecha.textContent = foto.parentElement.querySelector("p").textContent;
    });
});

// Cerrar modal
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar si se hace clic fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Botón regresar
document.getElementById("btn-regresar").addEventListener("click", () => {
    window.location.href = "index.html";
});
