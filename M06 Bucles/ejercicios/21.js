function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  // Para saber si 2^x = numero, aplico log2 a ambos miembros: x = log2(numero)
  let x = Math.log2(numero);
  // Si el numero es entero, es potencia de 2. Si el numero tiene decimales, no lo es.
  let numeroString = x.toString();
  let separaDecimal = numeroString.split(".");
  return (separaDecimal.length == 2) ? false:true;
  // Este approach me parece mas eficiente que un ciclo while
}

module.exports = esPotenciaDeDos;
