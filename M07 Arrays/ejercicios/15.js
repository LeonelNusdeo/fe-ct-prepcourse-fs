function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  // La funcion dentro de un 
  return array.every((num, i, arr) => num === arr[0])
}

module.exports = todosIguales;
