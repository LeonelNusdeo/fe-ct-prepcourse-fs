function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  // Podria hacerlo con el metodo reduce, pero elijo hacerlo con un forEach para cambiar el approach
  // El resultado acumulado lo divido por la cantidad de examenes (array.length)
  let sumatoriaNotas = 0;
  resultadosTest.forEach((num) => {
    return sumatoriaNotas += num;
  })
  return (sumatoriaNotas / resultadosTest.length);
}

module.exports = promedioResultadosTest;
