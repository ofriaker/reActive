const { default: mongoose } = require("mongoose");

const Buy = require('./models/buy')

mongoose.connect('mongodb://127.0.0.1:27017/items', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })

const seedBuys = [
    {
        userId: 'aa@gmail.com',
        products: [{
          productName: 'Defence Shots (Sample)',
          quantity: '2'
        },
        {
          productName: 'Defence Shots (Sample)',
          quantity: '1'
        },
        {
          productName: 'Essential Whey Protein (Sample)',
          quantity: '3'
        }],
    },
    {
      userId: 'aa@gmail.com',
      products: [{
        productName: 'Defence Shots (Sample)',
        quantity: '2'
      },
      {
        productName: 'Essential Whey Protein (Sample)',
        quantity: '1'
      }],
    },
    {
      userId: '2',
      products: [{
        productName: '111111',
        quantity: '2'
      },
      {
        productName: '121',
        quantity: '1'
      },
      {
        productName: '131',
        quantity: '3'
      }],
    }]

Buy.insertMany(seedBuys)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })