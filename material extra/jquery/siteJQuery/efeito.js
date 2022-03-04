/**
 * Efeito fade para destacar uma imagem
 * Exemplo de uso de funções JQuery se comportando como if else
 * @author José de Assis
 */

$(document).ready(function () {
    $('ul.Destaque li img').hover (function() {
        $('ul.Destaque li img').not(this).stop().fadeTo(400,0.3) //(milisegundos,opacidade( 0 a 1))	
    }, function () {
        $('ul.Destaque li img').stop().fadeTo(400,1)
    })
})