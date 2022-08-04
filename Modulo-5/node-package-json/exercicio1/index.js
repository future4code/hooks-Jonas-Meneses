
const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = idade + 7

nome || console.log("faltou nome e idade")

nome && idade &&  console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`) 

idade || nome &&  console.log(`Olá ${nome}, flatou só sua idade!`)



