/**
 * Exemplo de uso da estrutura switch case
 * @author José de Assis
 */

function converter() {
  var numero;
  //parseInt faz a conversão para o tipo inteiro
  numero = parseInt(frmConversor.txtNumero.value);
  //exemplo de uso da estrutura switch case
  switch (numero) {
    case 1:
      frmConversor.txtMes.value = "Janeiro";
      break;
    case 2:
      frmConversor.txtMes.value = "Fevereiro";
      break;
    // e assim vai...
    default:
      frmConversor.txtMes.value = "Mês inválido";
      break;
  }
}
