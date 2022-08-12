const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const transformDataAno = (data: string): number => {
    const arrayData = data.split("/")
    return Number(arrayData[arrayData.length - 1])
}

const verificaIdentidade = (validade: number, identidade: number): boolean => {
    if (identidade >= validade) {
        return true
    } else {
        return false
    }
}

readline.question("data de nascimento: ", (dataNasc: string) => {
    readline.question(" data de emissão da sua carteira de identidade: ", (dataIdentidae: string) => {

        const anoAtual: number = new Date().getFullYear()

        const anoNascimento: number = transformDataAno(dataNasc)
        const anoIdentidade: number = transformDataAno(dataIdentidae)

        const idade: number = anoAtual - anoNascimento
        const idadeIdentidade:number = anoAtual - anoIdentidade

        const checaIdentidae = () : boolean => {
            if (idade <= 20) {
                return verificaIdentidade(5, idadeIdentidade)
            } else if (idade <= 50) {
                return verificaIdentidade(10, idadeIdentidade)
            } else {
                return verificaIdentidade(15, idadeIdentidade)
            }

        }
        console.log(checaIdentidae())
        readline.close()
    })

});