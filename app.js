const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');



mongoose.connect("mongodb+srv://dbUser:U4vavjSGR11s6FzK@cluster0.yxgst.mongodb.net/Test-Task?retryWrites=true&w=majority", {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
})
       .then(() => console.log("Database connected!"))
       .catch(err => console.log(err));

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const myapi = require('./api');
app.use('/', myapi);


http.createServer(app).listen(process.env.PORT || 8000);
console.log("Backend Server iS On=", process.env.PORT || 8000);