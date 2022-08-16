type result = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]):result  {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b
// existe tambem o tipo array, number

//c

const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

//    obterEstatisticas: (numeros:number[]) => result 
}