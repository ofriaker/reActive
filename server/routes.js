const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router()
const Item = require('./models/item');
const Buy = require("./models/buy");

var bodyParser = require('body-parser');
const User = require("./models/user");

var jsonParser = bodyParser.json();

router.get('/items', async (req, res) => {
    const items = await Item.find({});
    console.log(items);
    res.send(items);
})

router.get("/items/:name", async (req, res) => {
	const itemByname = await Item.find({name: req.params.name});
    console.log(itemByname);
	res.send(itemByname);
})

router.post("/users", jsonParser, async (req, res) => {
        console.log(req.body);
        User.create(req.body, (err,data) => {
            if(err) console.log(err)
            else res.send(data);
        })
})

router.get("/buys/:userId", async (req, res) => {
	const buys = await Buy.find({userId: req.params.userId});
    console.log(buys);
	res.send(buys);
})

module.exports = router;