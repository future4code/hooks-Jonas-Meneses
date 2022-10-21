import express from "express"
import { FriendsController } from "../controller/FriendsController"

export const friendsRouter = express.Router()
const friendsController = new FriendsController()

friendsRouter.post("/create", friendsController.create)
friendsRouter.delete("/delete", friendsController.delete)
friendsRouter.get("/:id", friendsController.getFriends)
