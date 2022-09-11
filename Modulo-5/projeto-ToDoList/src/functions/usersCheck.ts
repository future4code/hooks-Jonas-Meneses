import connection from "../database/connection";
import { UserId } from "../types";

const usersCheck = async (id:string) => {

    const result = await connection.raw(`
            SELECT id from Users
            WHERE id = "${id}"
        `)

        const user: UserId[] | undefined[] = await result[0]

        return user
}

export default usersCheck