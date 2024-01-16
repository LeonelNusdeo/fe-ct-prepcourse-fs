function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  stringSinEspacios = string.replaceAll(" ","");
  stringInicial = stringSinEspacios.toLowerCase();
  for (var i = stringInicial.length, stringInvertido = ""; i != 0; i--) {
  stringInvertido = stringInvertido + stringInicial.charAt(i-1);
  }
  return (stringInicial == stringInvertido) ? true:false;
}

module.exports = esPalindromo;
