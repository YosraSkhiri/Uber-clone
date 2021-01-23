const express = require('express');
const app = express();
var http = require('http').Server(app);
const dbConnect = require('./config/db');
const cors = require('cors');
const config = require('config');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/api/auth');
const userRoute = require('./routes/api/user');

var io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true
    }
});

dbConnect();

app.use(express.json());
app.use(cors({ credentials: true, origin: config.get("corsOrigin") }));
app.use(cookieParser());

app.use('/api/auth/', authRoute);
app.use('/api/user/', userRoute);

const PORT = process.env.PORT || 4000;



let interval = [];

io.on("connection", (socket) => {

  console.log("New client connected "+socket.id);

  if (interval[socket.id]) {
    clearInterval(interval[socket.id]);
  }

  interval[socket.id] = setInterval(() => getApiAndEmit(socket), 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected "+socket.id);
    clearInterval(interval[socket.id]);
  });

});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

http.listen(PORT, () => {
    console.log(`Server app is listening on port ${PORT}`);
});
