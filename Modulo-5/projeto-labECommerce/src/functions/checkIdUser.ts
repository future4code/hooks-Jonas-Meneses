import connection from "../dataBase/connection"


const checkIduser = async (id:string) : Promise<[]> =>{

    const [result] = await connection.raw(`
        SELECT * FROM Labecommerce_users
        WHERE id="${id}";
    `)

    return await result

} 

export default checkIduser