window.onload = function() {
var valora = parseInt(prompt("Digite o valor de A"));
var valorb = parseInt(prompt("Digite o valor de B"));
var valorc = parseInt(prompt("Digite o valor de C"));

var quadradodeb = valorb * valorb;

console.log(quadradodeb);

var delta = quadradodeb - (4 * valora * valorc);

console.log(delta);

if (delta < 0) {
document.write("Não é possível calcular pois o Delta é menor que zero.");
return;
}

if (delta == 0) {
document.write("O Delta é zero, portando os valores de X1 e X2 serão iguais.<br>");
return;
}

var valordebneg = valorb * (-1); /* INVERTE O SINAL DO B */
var raizdedelta = Math.sqrt(delta); /* CALCULA A RAIZ DO DELTA, NO CASO, FEITO PELA FUNÇÃO Math.sqrt(variável) */

var divisor = 2 * valora; /* CALCULA O DIVISOR, NO CASO QUE DIVIDIRÁ B + RAIZ DE DELTA */

 var resultadox1 = (valordebneg + raizdedelta) / divisor; /* CALCULA O X1 */

 var resultadox2 = (valordebneg - raizdedelta) / divisor; /* CALCULA O X2 */

document.write("∆ = B² - 4 X A X C<br>");
document.write("∆ = " + quadradodeb + " - 4 X " + valora + " X " + valorb);
document.write("<br>∆ = " + delta);
document.write("<br><br>X1 = " + quadradodeb + " + " + raizdedelta + " / " + divisor);
document.write("<br>X1 = " + resultadox1);

document.write("<br><br>X2 = " + quadradodeb + " - " + raizdedelta + " / " + divisor);
document.write("<br>X2 = " + resultadox2);
}