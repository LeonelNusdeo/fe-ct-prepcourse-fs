numeros = [1, 2, 3, 4, 5];
repetidos = [];
  numeros.forEach((num, i, arr) => {
    if (arr.indexOf(num, i + 1) != -1) {
      repetidos.push(num);
    }
  })
console.log(repetidos[0]);