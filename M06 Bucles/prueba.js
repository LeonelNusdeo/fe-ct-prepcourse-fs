  let string = "reconocer";
  for (var i = string.length, stringInvertido = ""; i != 0; i--) {
  stringInvertido = stringInvertido + string.charAt(i-1);
  }
  console.log(string);
  console.log(stringInvertido);