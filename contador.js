// Fecha en la que comenzó la relación (AÑO, MES-1, DÍA, HORA, MINUTO, SEGUNDO)
const fechaInicio = new Date(2025, 6, 11, 18, 35, 0); // Ejemplo: 11 de julio 2025

function actualizarContador() {
    const ahora = new Date();
    let diferencia = Math.floor((ahora - fechaInicio) / 1000);

    const dias = Math.floor(diferencia / (60 * 60 * 24));
    diferencia %= (60 * 60 * 24);

    const horas = Math.floor(diferencia / (60 * 60));
    diferencia %= (60 * 60);

    const minutos = Math.floor(diferencia / 60);
    const segundos = diferencia % 60;

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

// Actualizar cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();

document.getElementById("btn-regresar").addEventListener("click", () => {
    window.location.href = "index.html";
});
