function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  let vocales = ["a", "e", "i", "o", "u"];
  let posicion = vocales.indexOf(letra);
  if (letra.length > 1 || posicion == -1) {
    return "Dato incorrecto";
  } else {
    return "Es vocal";
  }
  // No necesitaria poner "letra.length > 1" en la condicion porque un vocales.indexOf("aaa") igual me daria -1
  // pero lo dejo a los fines de aclarar lo pedido
}

module.exports = esVocal;
