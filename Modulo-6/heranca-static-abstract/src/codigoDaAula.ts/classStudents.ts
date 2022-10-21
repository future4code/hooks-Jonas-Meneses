import { Pessoas } from "./classPessoas";

export class Students extends Pessoas {
    constructor(
        id: string,
        name: string,
        email:string,
        dataNasc: Date,
        turma: string,
        private hobbies: string[]
    ){
        super(
            id,
            name,
            email,
            dataNasc,
            turma
        )
    }
}