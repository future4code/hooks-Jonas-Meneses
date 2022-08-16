export type  user ={
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string

} 

export type post = {
    userId: number,
    id: number,
    title: string,
    "body": string
}