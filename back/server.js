const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const dbConnect = require('./config/db');
const cors = require('cors');
const config = require('config');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/api/auth');
const userRoute = require('./routes/api/user');
const getNearestTaxis = require('./controllers/taxi').getNearestTaxis;

const server = http.createServer(app);

var io = socketio(server, {
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

io.on("connection", (socket) => {
  console.log('connected');

  socket.on('nearest taxis', (userCoords, callback) => {
      console.log('hiiii')
      const result = getNearestTaxis();
      console.log(result);
      callback({nearestTaxisToUser: result});
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

});

server.listen(PORT, () => {
    console.log(`Server app is listening on port ${PORT}`);
});
