function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  // No me parece necesario usar un bucle, creo que es mas performante (y prolijo) usar Array.find()
  let primerMultiplo = secuencia.find((num) => num % n == 0);
  return primerMultiplo;
}

module.exports = encontrarPrimerMultiploDeN;