function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  // Uso el metodo reduce, especialmente para estos casos de acumular
  // https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/
  return arrayOfNums.reduce((acumulador, num) => {
    return acumulador += num;
  }, 0);
}

module.exports = agregarNumeros;
