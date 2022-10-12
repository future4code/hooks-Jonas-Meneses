
export class UserBusiness {
    public async createUser(input: any){
        const {name, email, password} = input
        
        if(!name || !email || !password) throw new Error("Body incompleto")

        
    }
}