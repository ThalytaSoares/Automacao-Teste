function removerStrings(lista) {
    return lista.filter(function(item) {
    return typeof item == 'number';
  });
  }
  
  let entrada = [1, 'a',2,'b',3,'c'];
  let resultado = removerStrings(entrada);
  console.log(resultado);