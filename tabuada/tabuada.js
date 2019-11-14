/**
 * Super exemplo mágico de uso do laço for
 * @author José de Assis
 */

for (let i = 1; i <= 10; i++) {
    document.write('<p>Tabuada do ' + i + '</p>')
    for (let j = 1; j <= 10; j++) {
        document.write(i + ' x ' + j + ' = ' + (i * j) + '<br>')
    }
}