// ```tsx
// "Olá me chamo {NOME},   " 
// ```

const nome: string = String(process.argv[2])
const dataNasc: string[] = String(process.argv[3]).split("/")
const dia : string = dataNasc[0] != 'undefined' ? ` nasci no dia ${dataNasc[0]}`: "Esperava  data de nascimento"
const mes: string = dataNasc[0] != 'undefined' ? ` do mês de ${dataNasc[1]}` : ""
const ano: string = dataNasc[0] != 'undefined' ? ` do ano de ${dataNasc[2]}`: ""
const result: string = nome != 'undefined' ? `Olá me chamo ${nome}, ${dia} ${mes} ${ano} `: "esperava 2 argumentos e não recebi nenhum"

console.log(result)