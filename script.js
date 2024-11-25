// Mostrar el menú de módulos después del registro
document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.querySelector(".form-container").style.display = "none";
    document.getElementById("menu").style.display = "block";
});

// Función para mostrar los módulos
function mostrarModulo(modulo) {
    // Ocultar todos los módulos
    const modulos = document.querySelectorAll('.table-container');
    modulos.forEach(modulo => modulo.style.display = "none");

    // Mostrar el módulo seleccionado
    document.getElementById(modulo).style.display = "block";
}

// Función para volver al menú principal
function volverMenu() {
    const modulos = document.querySelectorAll('.table-container');
    modulos.forEach(modulo => modulo.style.display = "none");
    document.getElementById("menu").style.display = "block";
}

// Función para cerrar sesión
function cerrarSesion() {
    alert("Has cerrado sesión correctamente.");
    document.getElementById("menu").style.display = "none";
    document.querySelector(".form-container").style.display = "block";
}
