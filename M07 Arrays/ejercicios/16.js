function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesBuscados = array.filter((str) => {
    if (str == "Enero" || str == "Marzo" || str == "Noviembre") {
      return str
    }
  })
  return (mesesBuscados.length == 3) ? mesesBuscados:"No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
