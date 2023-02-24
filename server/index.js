const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const routes = require("./routes");
const websocket = require('./websocket.js');
const http = require('http');

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

mongoose.connect('mongodb://127.0.0.1:27017/items', { useNewUrlParser: true })
    .then(() => {
        const app = express();
        app.use(cors(corsOptions));
        app.set('view engine', 'ejs');
        app.use(express.urlencoded( { extended: true }));
        app.use("/api", routes);
        const server = http.createServer(app);
        websocket(server);
        app.listen(4000, () => {
            console.log("listening on port 4000!");
        }) 
        
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })