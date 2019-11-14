/**
 * Cálculo do IMC
 * @author José de Assis
 */

let peso, altura, imc

function calcular() {
    peso = Number(frmImc.txtPeso.value.replace(",", "."))
    altura = Number(frmImc.txtAltura.value.replace(",", "."))
    imc = peso / (altura * altura)
    frmImc.txtImc.value = imc.toFixed(2)
    if (imc < 17) {
        document.getElementById('status').src = 'imc1.png'
    } else if (imc >= 17 && imc < 18.5) {
        document.getElementById('status').src = 'imc2.png'
    } else if (imc >= 18.5 && imc < 25){
        document.getElementById('status').src = 'imc3.png'
    } else if (imc >= 25 && imc < 30){
        document.getElementById('status').src = 'imc4.png'
    }else if (imc >= 30 && imc < 35){
        document.getElementById('status').src = 'imc5.png'
    }else if (imc >= 35 && imc < 40){
        document.getElementById('status').src = 'imc6.png'
    }else {
        document.getElementById('status').src = 'imc7.png'
    }
}

function limpar() {
    document.getElementById('status').src = 'imc.png'
}
