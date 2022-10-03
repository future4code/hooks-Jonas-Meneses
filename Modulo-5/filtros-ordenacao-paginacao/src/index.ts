import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import getNameAndType from "./endpoints/getNameAndType";

app.get("/allusers", getAllUsers)

app.get("/users/:tipo", getNameAndType)