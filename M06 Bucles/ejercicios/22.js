function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  (mes >= 1 && mes <= 12) ? mes:mes = -1;
  if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    return 30;
  } else if (mes == 2) {
    return 28;
  } else {
    return (Math.sign(mes) == 1) ? 31:0;
  }
}

module.exports = diasEnMes;
