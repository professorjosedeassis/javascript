/**
 * Eleitor
 * Exercício de fixação else if AND OR
 * @author José de Assis
 */

function verificar() {
    let idade
    idade = Number(frmEleitor.txtIdade.value)
    if (idade < 16) {
        alert('Proibido votar')
    } else if (idade >= 18 && idade <= 70) {
        alert('Obrigatório votar')
    } else {
        alert('Voto facultativo')
    }
}