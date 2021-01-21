const express = require('express');
const app = express();
const dbConnect = require('./config/db');
const cors = require('cors');
const config = require('config');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/api/auth');
const userRoute = require('./routes/api/user');

dbConnect();

app.use(express.json());
app.use(cors({ credentials: true, origin: config.get("corsOrigin") }));
app.use(cookieParser());

app.use('/api/auth/', authRoute);
app.use('/api/user/', userRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
});
