import { app } from "./app";
import createProduct from "./endpoints/createProduct";
import getAllProducts from "./endpoints/getAllProducts";
import getAllUsers from "./endpoints/getAllUsers";
import UserCreate from "./endpoints/UserCreate";

app.post("/users", UserCreate)
app.get("/users", getAllUsers)
app.post("/products", createProduct)
app.get("/products", getAllProducts)