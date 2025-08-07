let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Correcto! Has adivinado el número secreto en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor.');
        }
        intentos++;
        limpiarCampos();
    }
    return;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCampos();
    // Indicar mensaje de intercalo de numero secreto.
    // Generar el numero aleatorio.
    // Inicializar el numero de intentos.
    condicionesIniciales();
    // Deshabilitar el boton de reinicio.
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingrese un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sortemos todos ls numeros.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se han sorteado todos los números.');
    } else {
        //Si el numero generado esta incluido en la lista de numeros sorteados.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function limpiarCampos() {
    document.getElementById('valorUsuario').value = '';
    return;
}

condicionesIniciales();