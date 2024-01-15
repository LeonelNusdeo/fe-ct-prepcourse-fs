function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  for (var i = a, resultado = 1; i <= b; i++) {
  resultado *= i;
  }
  return (resultado == +0 || resultado == -0) ? 0:resultado;
  // Tuve que agregar este operador ternario porque JS hace una diferencia entre -0 y +0, ambos son 0
  // Pero en el test daba error porque comparaba -0 con 0 (!?)
}

module.exports = productoEntreNúmeros;