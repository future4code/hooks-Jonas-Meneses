// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite a altura"))
  let largura = Number(prompt("Digite a largura:"))

  return console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o Ano atual:"))
  const anoNasc = Number(prompt("qual ano vc nasceu?"))
  return console.log(anoAtual - anoNasc)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso/(altura*altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // 

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cores = []
  let cor = prompt("Digite sua cor favorita")
  cores.push(cor)
  cor = prompt("Digite sua cor favorita")
  cores.push(cor)
  cor = prompt("Digite sua cor favorita")
  cores.push(cor)
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let ingressos = custo/valorIngresso
  return ingressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let str1 = string1.length
  let str2 = string2.length
  let result = str1 === str2
  return result

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let nArray = array
  let ultimo = array[array.length -1 ]
  let primeiro = array[0]
  nArray[0] = ultimo
  nArray[nArray.length -1] = primeiro
  return nArray
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let str1 = string1.toUpperCase()
  let str2 = string2.toUpperCase()
  return str1===str2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let anoNasc = Number(prompt("Digite o ano de nascimento:"))
  let anoEmitRg = Number(prompt("Digite o ano Que sua carreira foi emitida:"))

  let idade = anoAtual - anoNasc
  let anoRg = anoAtual - anoEmitRg
  let renova = (((idade<=20) && (anoRg >= 5)) == true) || (((idade>20 && idade<=50) && anoRg >= 10) == true) || (((idade>50) && (anoRg >= 15)) == true)
  return console.log(renova)
 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let bissextoc1 = ano % 400 == 0 ||(ano % 4 == 0 && ano % 100 !=0)

  return bissextoc1
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos?")
  let ensino = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  let result = idade === "sim" && ensino === "sim" && disponibilidade === "sim"

  console.log(result)

}

// Graças