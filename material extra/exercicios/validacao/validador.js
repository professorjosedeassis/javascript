/**
 * Validação simples com JS
 * @author José de Assis
 */

function validacao() {
  // o método abaixo é usado para capturar dados de formulários
  // diversos facilitando a busca
  let formulario = document.forms.frmCadastro;
  let nome = formulario.txtNome.value;
  let cpf = formulario.txtCpf.value;
  let sexo = formulario.sexo.value;
  let perfil = formulario.txtPerfil.value;
  let erro = false; // apoio a lógica o formulário não tem erros
  if (nome.indexOf(" ") === -1) {
    alert("Preencha o nome completo");
    erro = true;
  }
  if (cpf.length != 11) {
    alert("CPF inválido");
    erro = true;
  }
  if (perfil.length < 20) {
    alert("Digite pelo menos 20 caracteres");
    erro = true;
  }

  if (erro === true) {
    return false;
  } else {
    return true;
  }
}
