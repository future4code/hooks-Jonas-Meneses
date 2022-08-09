function comparaDoisNumeros(num1:number, num2:number):void {
    let maiorNumero:number;
    let menorNumero:number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return console.log(`a diferença entre o numeros é: ${diferenca}`) 
  }

  const num1 = Number(process.argv[2]) 
  const num2 = Number(process.argv[3]) 

  comparaDoisNumeros(num1, num2)