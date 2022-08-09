const op = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])



switch (op) {
    case "add":
        n1 || n2 || console.log("Esperava 3 parâmetros só recebi um")
        n2 || n1 && console.log("Esperava 3 parâmetros só recebi 2")
        n1 && n2 && console.log(`Resposta: ${n1 + n2}`)

        break;

    case "sub":
        n1 || n2 || console.log("Esperava 3 parâmetros só recebi um")
        n1 && n2 || console.log("Esperava 3 parâmetros só recebi 2")
        n1 && n2 && console.log(`Resposta: ${n1 - n2}`)

        break;

    case "mult":
        n1 || n2 || console.log("Esperava 3 parâmetros só recebi um")
        n1 && n2 || console.log("Esperava 3 parâmetros só recebi 2")
        n1 && n2 && console.log(`Resposta: ${n1 * n2}`)

        break;
    case "div":
        n1 || n2 || console.log("Esperava 3 parâmetros só recebi um")
        n1 && n2 || console.log("Esperava 3 parâmetros só recebi 2")
        n1 && n2 && console.log(`Resposta: ${n1 / n2}`)

        break;

    default:
        op && console.log(`Operador invalido \nopçoes: 
         add => para somar; 
         sub => para subtrair; 
         div => para dividir;
         mult => para multiplicar \n`)
        op || console.log("Esperava 3 parâmetros não recebi nenhum")

        break;
}
