// Array de consejos
const consejos = [
    "Llevar suficiente agua.",
    "Revisar el clima antes de salir.",
    "Llevar un botiquín de primeros auxilios.",
    "Avisar a alguien dónde vas."
];

// Función para mostrar los consejos
function mostrarConsejos() {

    const lista = document.getElementById("listaConsejos");

    lista.innerHTML = "";

    consejos.forEach(function(consejo) {

        const li = document.createElement("li");

        li.textContent = consejo;

        lista.appendChild(li);

    });

}

// Evento click
document.getElementById("btnConsejos").addEventListener("click", mostrarConsejos);

// Función para mostrar lo que escribe el usuario
function mostrarVistaPrevia() {

    const texto = document.getElementById("nuevoConsejo").value;

    if (texto === "") {
        document.getElementById("vistaPrevia").textContent = "";
    } else {

    document.getElementById("vistaPrevia").textContent =
        "Vista previa del consejo: " + texto;
    }
}

// Evento input
document.getElementById("nuevoConsejo")
.addEventListener("input", mostrarVistaPrevia);

// Función para validar el formulario
function validarFormulario(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    const error = document.getElementById("mensajeError");

    try {

        if (nombre === "" || email === "" || mensaje === "") {
            throw new Error("Todos los campos son obligatorios.");
        }

        error.style.color = "green";
        error.textContent = "Formulario enviado correctamente.";

    } catch (e) {

        error.style.color = "red";
        error.textContent = e.message;

    }

}

// Evento submit
document.getElementById("formContacto")
.addEventListener("submit", validarFormulario);