import { readline } from "../hooks/usereadLine";

function checaAnoBissexto(ano: number) {
    const cond1: boolean = ano % 400 === 0
    const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }

readline.question("digite o ano: ", (ano: string) => {

const result: boolean = checaAnoBissexto(Number(ano))

result ? console.log(`O ano ${ano} é Bissexto`): console.log(`O ano ${ano} não é Bissexto`)
readline.close()
})