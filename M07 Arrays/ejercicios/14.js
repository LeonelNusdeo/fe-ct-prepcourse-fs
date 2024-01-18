function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  // arguments NO ES UN ARREGLO, es un OBJETO similar a un arreglo.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
  // forEach() y map() NO funcionan con arguments, salvo que lo convierta en un arreglo con Array.from()
  const argumentos = Array.from(arguments);
  let productoria = 1;
  argumentos.forEach((num) => {
    return productoria *= num;
  })
  return (argumentos.length == 0) ? 0:productoria;
}

module.exports = multiplicarArgumentos;
