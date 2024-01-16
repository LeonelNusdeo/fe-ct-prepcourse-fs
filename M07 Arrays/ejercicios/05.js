function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  function tieneMasDe5(arreglo) {
    return (arreglo.length > 5) ? arreglo:undefined;
  }
  return array.find(tieneMasDe5);
}

module.exports = obtenerPrimerStringLargo;
