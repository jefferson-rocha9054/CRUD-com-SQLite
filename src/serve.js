import app from "./app.js"

const port = 3000

app.listen(port, () => {
    console.log(`servidor rodado em http://localhost:${port}`)
})