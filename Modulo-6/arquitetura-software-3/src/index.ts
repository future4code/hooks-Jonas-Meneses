import {app} from "./app"
import { movieRouter } from "./routes/MovieRouter"
import {userRouter} from "./routes/userRouter"

app.use("/user", userRouter)

app.use("/movie", movieRouter)

