import { app } from "./app"
import { TaskBusiness } from "./business/TaskBusiness"
import { TaskController } from "./controller/TaskController"
import { UserController } from "./controller/UserController"
// import { createTask } from './endpoints/createTask'

const userController = new UserController()
const taskController = new TaskController()

app.post('/user', userController.createUser)
app.post("/task", taskController.createTask)

// app.post('/task', createTask)


