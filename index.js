require('dotenv').config();

const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const RiddleModel = require("./models/riddles");
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(express.json());
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

const posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    }
]

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name));
})

app.post('/login', (req, res) => {
    // authenticate user

    const username = req.body.username;
    const user = { name: username }

    // serialize user using secret key
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

function authenticateToken(req, res, nex) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]   // undefined or actual token returned
    if (token == null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)

        req.user = user
        next()
    })
}

app.listen(8000, () => {console.log("Listening on port 8000");
});