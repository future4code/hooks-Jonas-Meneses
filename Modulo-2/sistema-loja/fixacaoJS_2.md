function calculaPrecoTotal(quantidade) {
  let valor=0
  if(quantidade>=12){valor = 1}else{valor = 1.30}
  return quantidade*valor
}