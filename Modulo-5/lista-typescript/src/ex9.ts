
const palavra: string = process.argv[2]



const fatorial = (palavra: string) => {

    const numLetras: number = palavra.length

    let fatorial: number = numLetras

    for (let index = numLetras - 1; index > 0; index--) {
        fatorial *= index

    }
    return fatorial
}



const verificaLetras = (palavra: string): boolean => {
    let letrasRepetidas = 0
    let array: string[] = []

    for (const i of palavra) {
        if (array.includes(i)) {
            letrasRepetidas += 1
        } else {
            array.push(i)
        }

    }
    return letrasRepetidas > 0
}

const response: string = verificaLetras(palavra) ? "a Palavra tem letras repetidas" :
    `a quantidade de anagramas que a palavra ${palavra} possui é ${fatorial(palavra)}.`

console.log(response)