/**
 * Cálculo do IMC
 * @author José de Assis
 */

let peso, altura, imc

function calcular() {
    peso = Number(frmImc.txtPeso.value.replace(",","."))
    altura = Number(frmImc.txtAltura.value.replace(",","."))
    imc = peso / (altura * altura)
    frmImc.txtImc.value = imc.toFixed(2)
}
