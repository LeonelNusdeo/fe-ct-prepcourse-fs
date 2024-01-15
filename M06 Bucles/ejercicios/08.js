function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   return (Math.sign(a) == 1 && a < 10) ? true:false;
   // El test esta mal: 0 no es considerado positivo ni negativo
   // esPositivoOInferiorA10(0) debe retornar FALSE
}

module.exports = esPositivoOInferiorA10;
