function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  for (var i = texto.length, textoInvertido = ""; i != 0; i--) {
  textoInvertido = textoInvertido + texto.charAt(i-1);
  }
  return textoInvertido;
}

module.exports = invertirTexto;