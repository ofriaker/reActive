const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router()
const Item = require('./models/item');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('/items', async (req, res) => {
    const items = await Item.find({});
    console.log(items);
    res.send(items);
})

// router.post("/cart", jsonParser, async (req, res) => {
//     console.log(req.body);
//     cartItem.create(req.body, (err,data) => {
//         if(err) console.log(err)
//         else res.send(data);
//     })
// })

// router.get("/cart", async (req, res) => {
// 	const newCartItem = await cartItem.find({});
// 	res.send(newCartItem);
// })

module.exports = router;