/**
 * Estudo do operador lógico NOT
 * @author José de Assis
 */

let receive
let sw1 = false //variável de apoio à troca da imagem da chave
// false -> representa a chave desligada
// true -> representa a chave ligada
let broken = false

function sw(receive) {
    if (sw1 == false && receive == 1) {
        document.getElementById('sw1').src = 'swon.png'
        sw1 = true
    } else if (sw1 == true && receive == 1){
        document.getElementById('sw1').src = 'swoff.png'
        sw1 = false
    }

    //LAMP
    if (receive == 2) {
        document.getElementById('lamp').src = 'broken.jpg'
        broken = true
    }

    // NOT
    if (broken == false){
        if (!sw1) {
            document.getElementById('lamp').src = 'on.jpg'
        } else {
            document.getElementById('lamp').src = 'off.jpg'
        }
    }    
}