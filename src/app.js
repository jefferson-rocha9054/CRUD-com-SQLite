import express from "express"
import userRoutes from "./routes/userRoutes.js"

const app = express()

// permite que o express entenda
//dados json  no corpo da requisição

app.use(express.json())







app.use("/users", userRoutes)
export default app;


