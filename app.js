// El principal objetivo de este desafío es forrtalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = [];

var input = document.getElementById('amigo');
var lista = document.getElementById('listaAmigos');
var resultado = document.getElementById('resultado');

console.log(input, lista, resultado);

function agregarAmigo() {
    var nombre = input.value.trim(); // lo que escribió el usuario
    console.log("Nombre ingresado:", nombre);

    



if (nombre === "") {
    alert("Por favor, escribe un nombre antes de añadir.");
    return; // salimos de la función
}

if (amigos.some(a => a.toLowerCase() === nombre.toLowerCase())) {
    alert("Ese nombre ya está en la lista.");
    return;
}

    amigos.push(nombre);

    var li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);

    input.value = "";
    input.focus();
}

    




function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    var indice = Math.floor(Math.random() * amigos.length);
    var elegido = amigos[indice];

    resultado.innerHTML = "🎉 El amigo secreto es: <strong>" + elegido + "</strong>";
    // Vaciar la lista de amigos visualmente
    lista.innerHTML = "";

    // Vaciar el array para que ya no queden nombres
    amigos.length = 0;
}
