/**
 * Cálculo de porcentagem "REGRA de 3"
 * @author José de Assis
 */

function calcular() {
    let x, y, resultado
    x = Number(frmRegra3.txtX.value.replace(',', '.'))
    y = Number(frmRegra3.txtY.value.replace(',', '.'))
    resultado = (x * y) / 100
    frmRegra3.txtResultado.value = resultado.toFixed(2)
}