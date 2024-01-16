function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" string0 "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  let str1Minusculas = str1.toLowerCase();
  let str2Minusculas = str2.toLowerCase();  
  let string1 = str1Minusculas.split("").sort().join("");
  let string2 = str2Minusculas.split("").sort().join("");
  return (string2 === string1) ? true:false;
}

module.exports = esAnagrama;
