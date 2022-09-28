
// forma verbosa
export class Users {

    public id: string
    public email : string
    public password: string

    constructor( id: string, email:string, password:string){
        this.id = id
        this.email = email
        this.password = password
    }
}

// forma menos verbosa

export class User2{
    constructor(
        public id: string,
        public name: string,
        public email: string
    ){}

    getName(){
        return this.name
    }
} 

const user1 = new User2("01", "jonas", "jonas@gmail.com")
console.log(user1.getName())