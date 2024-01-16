function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  (n >= 100) ? n = 100:n;
  for (var i = 1, resultado = 0; i <= n; i++) {
  resultado += i;
  }
  return resultado;
  // No me queda claro el enunciado "Si la suma supera a 100"
  // Asi que considero que si n > 100, n sea 100 (tope)
}

module.exports = sumarHastaNConBreak;