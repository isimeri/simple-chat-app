const socket = require("socket.io");
const express = require("express");

//app setup
const PORT = process.env.PORT || 5000;
const app = express();
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", (socket) => {
    socket.on("chat", (data) => {
        io.sockets.emit("chat", data);
    });
});