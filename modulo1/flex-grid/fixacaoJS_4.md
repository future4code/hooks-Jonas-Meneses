function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let repeticao = 0
  for(let i of arrayDeNumeros){
    if(numeroEscolhido === i){
      repeticao +=1
    }
  }
  
  if(repeticao === 0){
    let resultado = "Número não encontrado"
    return resultado
  }else{
    let resultado = `O número ${numeroEscolhido} aparece ${repeticao}x`
    return resultado
  }