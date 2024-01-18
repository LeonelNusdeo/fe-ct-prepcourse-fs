function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  // typeof arr me devuelve object. Asi que no puedo usarlo para saber si arr es un array.
  // Para eso uso "arr instanceof Array" o "Array.isArray(arr)"
  return (arr instanceof Array && arr.length > 0);
}

module.exports = esArrayNoVacio;