/**
 * Exemplo de uso de um plugin JQuery
 * @author José deAssis * 
 */

 $(document).ready(function(){
     $('#frmCadastro').validate({
         rules:{
            nome: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            senha: {
                required: true,
                minlength: 8
            },
            senhaConfirmacao: {
                required: true,
                equalTo: senha
            },
            termos: {
                required: true
            }
         },
         
         messages:{
            nome: {
                required: " Favor digitar o nome",
                minlength: " O campo nome deve ter no mínimo 4 caracteres"
            },
            email: {
                required: " O campo Email é obrigatório",
                email: " Email inválido"
            },
            senha: {
                required: " Campo obrigatório",
                minlength: " A senha deve ter no mínimo 8 caracteres"
            },
            senhaConfirmacao: {
                required: " Campo obrigatório",
                equalTo: " As senhas digitadas não são iguais"
            },
            termos: {
                required: " Para se cadastrar é necessário aceitar os termos"
            }

         }
     })
 })