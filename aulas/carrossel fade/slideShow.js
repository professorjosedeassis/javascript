/**
 * Simples carrossel de imagens com efeito fade
 * @author Professor José de Assis
 */

let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let intervalo = 3000
let indice = 0

show()

function show() {
    document.getElementById("slide").className += "FadeOut"
    setTimeout(function () {
        document.getElementById("slide").src = (`img/${slides[indice]}`)
        document.getElementById("slide").className = ""
    }, 1000)
    indice++
    if (indice === slides.length) {
        indice = 0
    }
    setTimeout(show, intervalo)
}