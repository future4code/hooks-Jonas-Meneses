
import {readline} from "../hooks/usereadLine"

readline.question("Insira sua primeira cor favorita: ", (cor1: string) => {
    readline.question("Insira sua segunda cor favorita: ", (cor2: string) => {
        readline.question("Insira sua terceira cor favorita: ", (cor3: string) => {
            console.table([cor1, cor2, cor3])
            readline.close()
        })
        
    })

});

// console.log(readline)npm run start