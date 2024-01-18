function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  var arreglo = [];
  for(i = 0, numero = num; i < 10; i++) {
    if (i == numero) {
      break;
    } else {
      numero += 2;
      arreglo.push(numero);
    }
  }
  return (arreglo.length == 10) ? arreglo:"Se interrumpió la ejecución";
}

module.exports = breakStatement;
