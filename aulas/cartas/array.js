/**
* JS - Aula14: Jogo de Cartas
* @author José de Assis
*/

var nipes=['♥','♦','♣','♠'];
var faces=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var nipe=nipes[Math.floor(Math.random()*4)];
var face=faces[Math.floor(Math.random()* faces.length)];
document.write("<h1>" + face + nipe + "</h1>");