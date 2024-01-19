function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let empiezaConA = arrayOfStrings.filter((str, i, arr) =>{
    if (str.charAt(0) == "a") {
      return str;
    }
  });
  return empiezaConA;
}

module.exports = filter;
