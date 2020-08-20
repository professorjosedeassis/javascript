/**
 * Estudo do DOM
 * Estudo da função com passagem de parâmetros
 */

/*
// Sem passagem de parâmetros 
function ligar() {
   document.getElementById('lamp').src = 'on.jpg'
}

function desligar() {
    document.getElementById('lamp').src = 'off.jpg'
}
*/

// Com passagem de parametros
let recebe

function controlar(recebe) {
    if (recebe == 1) {
        document.getElementById('lamp').src = 'on.jpg'
    } else {
        document.getElementById('lamp').src = 'off.jpg'
    }
}