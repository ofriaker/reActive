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
    // console.log(items);
    res.send(items);
})

router.get('/items/:id', async (req, res) => {
     const itemById = await Item.findById({_id:req.params.id});
    
     res.send(itemById);
})


router.get("/users/:email", async (req, res) => {
    const userByEmail = await User.find({ email: req.params.email });
    console.log(userByEmail);
    res.send(userByEmail);
})

router.put('/users/:email',jsonParser, async (req, res) => {
  const { userName, address } = req.body;
  const filter = { email: req.params.email };
  const update = { $set: { userName, address } };
  const options = { new: true };
  try {
    await User.findOneAndUpdate(filter, update, options, (err, data) => {
        if (err) console.log(err)
        else res.send(data);
    })
 } catch (err) {
    console.log(err);
 }
});


router.post("/users", jsonParser, async (req, res) => {
  
    console.log(req.body.email);
    await User.create(req.body, (err, data) => {
        if (err) console.log(err)
        else res.send(data);
    })
})

router.post("/buys", jsonParser, async (req, res) => {
    console.log(req.body.buy);
    await Buy.create(req.body.buy, (err, data) => {
        if (err) console.log(err)
        else res.send(data);
    })
})

router.get("/buys/:userId", async (req, res) => {
    const buys = await Buy.find({ userId: req.params.userId });
    console.log(buys);
    res.send(buys);
})

router.get('/items/flavours/:category', async (req, res) => {
    const category = req.params.category;
    const query = [
      {
        $match: {
          category: category
        }
      },
      {
        $unwind: "$flavours"
      },
      {
        $group: {
          _id: "$flavours"
        }
      }
    ];

    const flavours = await Item.aggregate(query);
    res.send(flavours);
});

module.exports = router;