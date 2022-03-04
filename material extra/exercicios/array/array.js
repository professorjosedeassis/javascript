/**
 * Estudo do array
 * @author José de Assis
 */

//Exemplo 1 - Array simples (vetor)
function exemplo1() {
  //sem array
  let time1 = "Corinthians";
  let time2 = "São Paulo";
  let time3 = "Palmeiras";
  let time4 = "Santos";
  document.write("<p>Sem array: " + time1 + "</p>");
  //com array
  //a linha abaixo cria um array de tamanho 4
  var times = ["Corinthians", "São Paulo", "Palmeiras", "Santos"];
  //a linha abaixo recupera o conteúdo do (casinha) índice [2]
  document.write("<p>Com array: " + times[0] + "</p>");
  //a linha abaixo retorna o tamanho do array
  document.write("<p>Tamanho do array: " + times.length + "</p>");
}

//Exemplo 2 - Uso do array em um jogo de cartas
function exemplo2() {
  //Copas (alt + 3) Ouros (alt + 4) Paus (alt + 5) Espada (alt + 6)
  var nipes = ["♥", "♦", "♣", "♠"];
  var faces = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "R",
  ];
  //document.write("<p>Carta sorteada: " + faces[2] + " de " + nipes[1] +"</p>");//apoio a lógica
  //Usando a classe Math.random para gerar números aleatórios
  //Math.floor -> converte para números inteiros
  //(Math.random() * 4) -> sorteio (0 ou 1 ou 2 ou 3)
  var sorteio_nipe = nipes[Math.floor(Math.random() * 4)];
  var sorteio_face = faces[Math.floor(Math.random() * faces.length)];
  document.write("<p>Carta sorteada: " + sorteio_face + sorteio_nipe + "</p>");
}

//Exemplo 3 - Array Multidimensional (Matriz)
function exemplo3() {
  //a linha abaixo cria um array de 2 dimensões [[linha],[coluna]]
  //Atenção
  var boletim = [
    [8, 7, 9, 3],
    [4, 5, 8, 6],
  ];
  //a linha abaixo recupera o conteúdo de um array de 2 dimensões
  document.write("<p>Média: " + boletim[0][3] + "</p>");
}
