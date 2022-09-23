import { app } from "./app";
import createProduct from "./endpoints/createProduct";
import getAllProducts from "./endpoints/getAllProducts";
import getAllUsers from "./endpoints/getAllUsers";
import purchases from "./endpoints/purchases";
import seachUserPurchases from "./endpoints/seachUserPurchases";
import UserCreate from "./endpoints/UserCreate";


app.post("/users", UserCreate)
app.get("/users", getAllUsers)
app.post("/products", createProduct)
app.get("/products", getAllProducts)
app.post("/purchases", purchases)
app.get("/users/:user_id/purchases", seachUserPurchases)
