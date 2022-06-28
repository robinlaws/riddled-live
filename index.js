const express = require("express");
const app = express();
const mongoose = require('mongoose');
const RiddleModel = require("./models/riddles");
const cors = require('cors');
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://robinlaws:36Empire@riddledcluster.7nxyj.mongodb.net/riddledDatabase?retryWrites=true&w=majority");

app.get("/api/getRiddle", (req, res) => {
    const today = new Date();
    today.setHours(-2,-30,0,0)
   

    RiddleModel.findOne({'date': [today]}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });

});

app.post("/api/userGuess", async (req, res) => {
    const userGuess = req.body;
    console.log(userGuess);

});

app.listen(8000, () => {console.log("Listening on port 8000");
});