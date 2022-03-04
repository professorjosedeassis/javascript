/**
 * Função jQuery para voltar ao topo
 * @author José de Assis
 */

$(document).ready(function () {
    // .click(function(){}) -> quando clicar no objeto identificado pelo id #top
    $('#top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow')
    })
})