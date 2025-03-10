// index.js
const app = require("express")();
const server = require("http").Server(app);
const cors = require("cors");
// const { v4: uuidV4 } = require('uuid');

const appUrl = process.env.APP_URL || "http://localhost:3000";

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

app.get("/:room", (req, res) => {
  res.redirect(`${appUrl}/${req.params.room}`);
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);
  });

  socket.on("disconnect", () => {
    // console.log("disconnect")
  });

  socket.on("disconnectMe", ({ roomId, userId }) => {
    socket.to(roomId).emit("user-disconnected", userId);
  });

  socket.on("emit-message", (msg, roomId, userId) => {
    let content = { msg: msg, userId: userId };
    io.to(roomId).emit("broadcast-newMessage", content);
  });
});

const PORT = process.env.PORT || 4000;
console.log(PORT);
server.listen(PORT, () => {
  console.log(
    `Server is running on ${
      process.env.APP_URL ? process.env.APP_URL : ""
    }: ${PORT}`
  );
});
