/**
* JS - Aula6: Jogo do dado
* @author Professor José de Assis
*/

var sorteio = Math.floor(Math.random() * 6 + 1);

switch(sorteio){
	case 1:
		document.getElementById("face").src = "face1.png";
		break;
	case 2:
		document.getElementById("face").src = "face2.png";
		break;
	case 3:
		document.getElementById("face").src = "face3.png";
		break;
	case 4:
		document.getElementById("face").src = "face4.png";
		break;
	case 5:
		document.getElementById("face").src = "face5.png";
		break;
	case 6:
		document.getElementById("face").src = "face6.png";
		break;
	default:
		//caso contrário
		break;
}