function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
    let arrayMayoresA10 = array.filter((num) => {
    if (num > 10) {
      return num;
    }
  })
  return arrayMayoresA10.length;
}

module.exports = contarElementosMayoresA10;
