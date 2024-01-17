function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let enMayusculas = array.map((arreglo) => {
    return arreglo.toUpperCase();
  })
  return enMayusculas;
}

module.exports = convertirStringAMayusculas;
