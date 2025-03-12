// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres
let amigo = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Doble if para verificar las condiciones
    if (nombre === "") {
        alert("El nombre está vacío.");
    } else if (amigo.includes(nombre)) {
        alert("El nombre ya ha sido agregado.");
    } else {
        amigo.push(nombre); // Agregar el nombre a la lista
        actualizarLista(); // Actualizar la lista en la interfaz
        input.value = ""; // Limpiar el input
        input.focus(); // Volver a enfocar el campo de texto
    }
}

// Función para actualizar la lista de amigos en la UI
function actualizarLista() {
    let lista = document.getElementById("listaAmigo");
    lista.innerHTML = ""; // Limpiar la lista

    // Crear un elemento de lista para cada amigo
    amigo.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigo.length < 2) {
        alert("Debes agregar al menos dos participantes.");
        return;
    }

    let indice = Math.floor(Math.random() * amigo.length);
    let resultadoLista = document.getElementById("resultado");

    // Limpiar el resultado anterior
    resultadoLista.innerHTML = "";

    // Crear el mensaje del resultado
    let li = document.createElement("li");
    li.textContent = `🎉 Amigo Secreto: ${amigo[indice]}`;
    resultadoLista.appendChild(li);
}

// Agregar eventos a los botones (para evitar usar "onclick" en HTML)
document.querySelector(".button-add").addEventListener("click", agregarAmigo);
document.querySelector(".button-draw").addEventListener("click", sortearAmigo);