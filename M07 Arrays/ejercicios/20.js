function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var cantidadNumPares = 0;
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      cantidadNumPares++;
    } else {
      continue;
    }
  }
  return cantidadNumPares;
}

module.exports = contarParesConContinue;
