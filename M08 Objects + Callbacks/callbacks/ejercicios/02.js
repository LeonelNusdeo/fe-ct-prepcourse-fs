function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  if (arguments.length == 2) {
    return callback(string);
  } else {
    return string;
  }
  
}

module.exports = cambiarCadena;
