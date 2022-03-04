/**
 * PDV - Exercício referente à cálculo de porcentagem
 * @author José de Assis
 */

// Esta variável está presente nas 2 funções, portanto precisa ser global
let totalDesconto

function calcularDesconto() {
    let total, desconto, valorDesconto
    //entrada
    total = Number(frmPdv.txtTotal.value.replace(',', '.'))
    desconto = Number(frmPdv.txtPorcentagem.value.replace(',', '.'))
    //processamento
    valorDesconto = (total * desconto) / 100
    totalDesconto = total - (total * desconto) / 100
    //saída
    frmPdv.txtDesconto.value = 'R$ ' + valorDesconto.toFixed(2)
    frmPdv.txtTotalDesconto.value = 'R$ ' + totalDesconto.toFixed(2)
}

function calcularTroco() {
    let valorPago, troco
    valorPago = Number(frmPdv.txtValorPago.value.replace(',', '.'))
    troco = valorPago - totalDesconto
    frmPdv.txtTroco.value = 'R$ ' + troco.toFixed(2)
}