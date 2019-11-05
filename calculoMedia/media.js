/**
 * Cálculo da média
 * @author José de Assis
 */

// Variáveis globais
let nota1, nota2, media

function calcular() {
    nota1 = Number(frmMedia.txtNota1.value.replace(",", "."))
    nota2 = Number(frmMedia.txtNota2.value.replace(",", "."))
    media = (nota1 + nota2) / 2
    frmMedia.txtMedia.value = media.toFixed(2)
    if (media < 5) {
        frmMedia.txtStatus.value = 'REPROVADO'
    } else {
        frmMedia.txtStatus.value = 'APROVADO'
    }
}
