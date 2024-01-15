function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  return fecha instanceof Date && !isNaN(fecha);
  // instanceof https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
  // https://stackoverflow.com/questions/1353684/detecting-an-invalid-date-date-instance-in-javascript
  // no valido si esta mal pasado el string: YYYY-MM-DD o MM-DD-YYYY son los validos
  // DD-MM-YYYY es invalido (hay que parsearlo)
}

module.exports = esFechaValida;