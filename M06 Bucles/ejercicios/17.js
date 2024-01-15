function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let colores = ['blue', 'red', 'green', 'orange'];
  return (colores.indexOf(color) != -1) ? "This is " + color:"Color not found";
  // Si bien puedo usar un switch, me parece que con un array y buscando con un indexOf() se repite menos codigo
}

module.exports = colors;
