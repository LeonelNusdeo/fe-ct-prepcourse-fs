function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  // Uso un forEach y -por cada elemento- hago un indexOf del numero en que estoy, a partir de la siguiente posicion en el array (i + 1)
  // Si retorno algo != -1 (porque encontro el elemento -repetido- en X posicion), pusheo ese valor en el array de repetidos
  // Y devuelvo el valor de la 1er posicion del array de repetidos (tengo todos los repetidos, devuelvo el primero)
  repetidos = [];
  numeros.forEach((num, i, arr) => {
    if (arr.indexOf(num, i + 1) != -1) {
      repetidos.push(num);
    }
  })
  return repetidos[0];
}

module.exports = encontrarElementoRepetido;