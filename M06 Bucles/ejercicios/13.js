function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  let numeroString = num.toString();
  let separarDecimal = numeroString.split(".");
  return (separarDecimal.length == 2) ? false:true;
  // Convierto el numero a un string, lo spliteo en un array por el caracter "." (separador de decimales).
  // Si el array tiene 2 items, es porque el numero tiene decimal. Si tiene 1 solo item, es porque es entero.
}

module.exports = esEntero;
