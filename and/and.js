/**
 * Estudo do operador lógico AND
 * @author José de Assis
 */

let receive
let sw1 = false
let sw2 = false

function sw(receive) {
    // a estrutura abaixo verifica o status das chaves
    // se o objeto sw1 for clicado e a condição inicial da chave for
    // desligada (false) ligar a chave (trocar imagem e mudar status
    // da variável sw1 para true)
    if (receive == 1 && sw1 == false) {
        document.getElementById('sw1').src = 'swon.png'
        sw1 = true
    } else if (receive == 1 && sw1 == true) {
        document.getElementById('sw1').src = 'swoff.png'
        sw1 = false
    } else if (receive == 2 && sw2 == false) {
        document.getElementById('sw2').src = 'swon.png'
        sw2 = true
    } else if (receive == 2 && sw2 == true) {
        document.getElementById('sw2').src = 'swoff.png'
        sw2 = false
    }
    //AND
    if (sw1 == true && sw2 == true) {
        document.getElementById('lamp').src = 'on.jpg'
    } else {
       document.getElementById('lamp').src = 'off.jpg'
    }
}