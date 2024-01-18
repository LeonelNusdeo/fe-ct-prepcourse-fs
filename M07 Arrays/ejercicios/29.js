function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  var numeroFaltante;
  for(i = 0; i < numeros.length; i++) {
    if((numeros[i] + 1 != numeros[i + 1]) && (numeros[i + 1] != undefined)) {
      numeroFaltante = numeros[i] + 1;
      break;
    }
  }
  return (numeroFaltante != undefined) ? numeroFaltante:null;  
}

module.exports = encontrarNumeroFaltante;