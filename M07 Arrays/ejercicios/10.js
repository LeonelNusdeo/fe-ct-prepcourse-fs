function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  // Busco el mayor numero en el array usando reduce y Math.max (tambien sirve Math.max.apply)
  // y despues con un indexOf obtengo el indice de ese numero.
  // Si el array esta vacio, mayorNumero = -Infinity => posicionMayorNumero = -1
  // Como el test me pide que el resultado sea 0 en caso de un array vacio, uso operador ternario.
  let mayorNumero = array.reduce((a, b) => Math.max(a, b), -Infinity);
  posicionMayorNumero = array.indexOf(mayorNumero);
  return (posicionMayorNumero == -1) ? 0:posicionMayorNumero;
}

module.exports = encontrarIndiceMayor;
