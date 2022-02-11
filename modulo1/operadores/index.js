//-------------------------------------------
// Exercícios de interpretação de código
//-------------------------------------------
/*
1- Questão
    a - Resultado = false
    b - Resultado = false
    c - Resultado = True
    d - Resultado = Bollean

2- Questão
    O colega esqueceu de transformar o resultado do prompt em Number, com isso as variaveis 'primeiroNumero' e 'segundoNumero' tem o tipo String. A variavel 'soma' vai receber o Valor concatenado e não somado.
    O console vai imprimir o valor das variaveis concatenados

3- Questão
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = Number(primeiroNumero) + Number(segundoNumero)

    console.log(soma)

*/


alert("Exercicio de escrita de código")
//-------------------------------------------
// Exercícios de escrita de código
//-------------------------------------------
alert("Questão 1")
// 1- Questão
// A
    let minhaIdade = Number(prompt("Qual a sua idade?"))

// B 
    let idadeAmigo = Number(prompt("a idade do seu melhor amigo ou da sua melhor amiga?"))

// C
    console.log("Sua idade é maior do que a do seu melhor amigo? -", minhaIdade>idadeAmigo)

// D
    console.log("a diferença de idade é:", idadeAmigo - minhaIdade)


alert("Questão 2")
//
// 2- Questão
// A 
    let numero = Number(prompt("Digite um numero Par:"))

// B
    let restoDivisao = numero % 2
    console.log("resto da divisão:",restoDivisao)

// C
    // Os numeros pares sempre tem resto 0

// D
    // O valor o resto será 1


alert("Questão 3")
//
//3 - Questão
    let idade = Number(prompt("Qual sua idade?"))

// A
    let idadeEmMeses = idade * 12
    console.log("Sua idade em Meses é:", idadeEmMeses)

// B
    let idadeEmDias = idade * 365
    console.log("Sua idade em Dias é:", idadeEmDias)

// C
    let idadeEmHoras = idadeEmDias * 24
    console.log("Sua idade em Horas é:", idadeEmHoras)


    alert("Questão 4")
//
// 4 - Questão
    let numero1 = Number(prompt("Digite um numero:"))
    let numero2 = Number(prompt("Digite outro numero:"))

    console.log("O primeiro numero é maior que segundo? -", numero1>numero2)

    console.log("O primeiro numero é maior que segundo? -", numero1===numero2)

    let divisivel1 = numero1 % numero2
    console.log("O primeiro numero é maior que segundo? -", divisivel1 === 0)

    let divisivel2 = numero2 % numero1
    console.log("O primeiro numero é maior que segundo? -", divisivel2 === 0)


alert("* * * * DESAFIO * * * *")
//-------------------------------------------
// DESAFIO
//-------------------------------------------
// QUESTÃO 1

function celciosParaFahren(c){
    let fahren = c *(9/5) + 32
    return fahren
}

function fahrenParaKelvin(f){
    let kelvin = (f - 32)*(5/9) + 273.15
    return kelvin   
}

// A
    let kelvin
    kelvin = fahrenParaKelvin(77)
    console.log( "77 Graus Fahrenheit é equivalente a ", kelvin, "graus Kelvin ")

// B
    let fahren
    fahren = celciosParaFahren(80)
    console.log(" 80 Graus Celsius é equivalente a ", fahren, "graus Fahrenheit")

// C 
    fahren = celciosParaFahren(30)
    kelvin = fahrenParaKelvin(fahren)
    console.log("30 graus Celsius equivale a ", fahren, "graus Fahrenheit e a", kelvin, "Graus Kelvin" )

// D
    let valorPrompt = Number(prompt("Digite um valor em graus Celsius"))

    fahren = celciosParaFahren(valorPrompt)
    kelvin = fahrenParaKelvin(fahren)

    console.log(valorPrompt, " graus Celsius equivale a ", fahren, "graus Fahrenheit e a", kelvin, "Graus Kelvin" )
    

// QUESTÃO 2
// A
    let valorEnergia =  0.05*280
    console.log("voce irá pagar",valorEnergia ,"por 280 quilowatt-hora consumidos")

// B
    let valorDoDesconto = valorEnergia * (15/100)
    let valorComDesconto = valorEnergia - valorDoDesconto  


// QUESTÃO 3
// A
    let lib = 20
    let kg  = lib / 2.205
    console.log("20 libras é equivalente a ", kg, "kg")

//B
    let oz = 10.5
    kg = oz / 3.527
    console.log("20 Onças é equivalente a ", kg, "kg")

// C
    let mi = 100
    let m = mi * 1609.34
    console.log("100 milhas equivalem ", m, "metros")

//D
    let ft = 50
    m = 50 / 0.3048
    console.log("50 pes equivalem ", m, "metros")

//E
   let gal = 103.56
   let l =  gal * 3.78541
   console.log(gal, "gal equivalem ", l, "litros")

// F
    let xic = 450
    l = xic / 3.52
    console.log(xic , "xic equivalem ", l, "litros")

// G
    xic = Number(prompt("Digite uma valor pra tranformar de xicara para litro:"))
    l = xic / 3.52
    console.log(xic , "xic equivalem ", l, "litros")

//Amem senhor!!!