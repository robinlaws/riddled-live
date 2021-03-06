const path = require('path');
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const RiddleModel = require('./models/riddleModels')
const cors = require('cors');
const https = require('https');
const http = require('http');
const fs = require('fs');

app.use(express.static(path.join(__dirname, '/build')))
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://robinlaws:36Empire@riddledcluster.7nxyj.mongodb.net/riddledDatabase?retryWrites=true&w=majority");
// mongoose.connect("mongodb://127.0.0.1:27017/riddles");

app.get("/api/getRiddle", (req, res) => {
    const today = new Date();
    today.setHours(0,0,0,0)
    RiddleModel.findOne({'date':[today]}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.enable('trust proxy')
app.use((req, res, next) => {
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
})

const httpsServer = https.createServer({
        key: fs.readFileSync('/etc/letsencrypt/live/riddled.ca/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/riddled.ca/fullchain.pem'),
}, app);

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});

const httpServer = http.createServer(app);

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

