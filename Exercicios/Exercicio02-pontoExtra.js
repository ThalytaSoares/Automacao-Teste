function contarVogais(texto) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
  
    for (let i = 0; i < texto.length; i++) {
      if (vogais.includes(texto[i])) {
        contador++;
      }
    }
  
    return contador;
  }
  
  // Exemplo de uso
  let frase = "ola mundo";
  let quantidade = contarVogais(frase);
  console.log(quantidade); // 4