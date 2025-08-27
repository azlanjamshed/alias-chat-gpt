require("dotenv").config()
const http = require("http")
const app = require("./src/app")
const connectToDB = require("./src/db/db")
const initSocketServer = require("./src/sockets/socket.server")

connectToDB()

const httpServer = http.createServer(app);
initSocketServer(httpServer)

httpServer.listen(3000, () => {
    console.log("server started at 3000");

})