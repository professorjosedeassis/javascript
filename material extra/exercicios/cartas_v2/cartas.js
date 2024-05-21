/**
 * Sorteio de uma carta
 * Exemplo de uso do array
 * @author Professor José de Assis
 */

function sortearCarta() {
    let nipes = ["♠", "♥", "♣", "♦"]
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    //sorteio do índice dos vetores
    let nipe = nipes[Math.floor(Math.random() * 4)]
    let face = faces[Math.floor(Math.random() * 13)]
    //console.log(`${face}${nipe}`)

    //Determinar a cor com base no naipe sorteado
    let cor
    if (nipe === '♥' || nipe === '♦') {
        cor = '#ff0000'
    } else {
        cor = '#000000'
    }

    // renderizar o canto superior esquerdo da carta
    document.getElementById('supEsq').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
    document.getElementById('supEsq').style.color = cor

    // renderizar o canto inferior direito da carta 
    document.getElementById('infDir').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
    document.getElementById('infDir').style.color = cor

    // renderizar o centro da carta
    let cc = document.getElementById('centroCarta')

    if (face === 'J') {
        cc.innerHTML = `<img src="./img/valete.png">`
    } else if (face === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png">`
    } else if (face === 'K') {
        cc.innerHTML = `<img src="./img/rei.png">`
    } else {
        cc.innerHTML = `${nipe}`
        cc.style.color = cor
    }
}