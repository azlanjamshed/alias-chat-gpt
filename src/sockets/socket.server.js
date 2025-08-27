
const { Server } = require("socket.io")


// function initSocketServer(httpServer) {
//     const io = new Server(httpServer, {});

//     io.on("connection", (socket) => {
//         console.log("New Socket", socket.id);
//     });

//     io.listen(3000);
// }


// module.exports = initSocketServer

// const { Server } = require("socket.io");

function initSocketServer(httpServer) {
    const io = new Server(httpServer, {}); // ✅ capital S

    io.on("connection", (socket) => {
        console.log("New socket connected:", socket.id);

        socket.on("disconnect", () => {
            console.log("Socket disconnected:", socket.id);
        });
    });

    return io;
}

module.exports = initSocketServer;