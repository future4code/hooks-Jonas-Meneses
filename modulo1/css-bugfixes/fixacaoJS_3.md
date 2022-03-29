function calculaNota(ex, p1, p2) {
  let media = (ex+(2*p1)+(p2*3))/6
  
  let resultado = ""
  
  if(media<6){resultado = "D"}else if(media<7.5){
    resultado="C"}else if(media<=9){resultado="B"}else{ resultado="A"}
    
  return resultado
}