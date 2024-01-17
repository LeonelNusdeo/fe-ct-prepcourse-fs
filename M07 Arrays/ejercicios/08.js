function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let arrayDePares = array.filter((num) => {
    if (num % 2 == 0) {
      return num;
    }
  })
  return arrayDePares;
}

module.exports = filtrarNumerosPares;
