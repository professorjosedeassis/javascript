/**
* JS - Aula7: Tabuada
* @author Professor José de Assis
*/

for(var i = 1; i < 11; i++){
	document.write("<p>Tabuada do " + i + "</p>");
	for(var j = 1; j < 11; j++){
		document.write(i + " x " + j + " = " + (i * j) + "<br>");
	}
}