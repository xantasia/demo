import express from "express"
import path from "node:path"
import http from "node:http"

const __dirname = path.resolve()
const server = http.createServer()
const app = express(server)

app.use(
    express.static(
        path.join(__dirname, "bidi")
    )
)
app.get("/", (req, res) => {
    res.sendFile(__dirname, "./bidi/index.html")
})