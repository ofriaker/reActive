const { default: mongoose } = require("mongoose");

const Item = require('./models/item')

mongoose.connect('mongodb://127.0.0.1:27017/items', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })

const seedItems = [
    {
        name: 'Prothein',
        category: 'Nutirion',
        price: '20',
        flavour: "Vanilla",
        productImageUrl: '/images/proteinvanil.jpg'
      },
      {
        name: "Clear Whey Isolate",
        imgUrl: "https://static.thcdn.com/productimg/1600/1600/12081396-1994792209042321.jpg",
        quantity: 1,
        category: 'Nutirion',
        price: 5,
        flavour: "Peach Tea"
      },
      {
        name: "Sparkling Energy Drink",
        imgUrl: "https://static.thcdn.com/productimg/1600/1600/12770761-5274858302518136.jpg",
        quantity: 2,
        category: 'Nutirion',
        price: 8,
        flavour: "Mixed Berry"
      },
      {
        name: 'Protein snack',
        category: 'Foods&Snacks',
        price: '10',
        flavour: "Karamel",
        productImageUrl: '/images/snak.png'
      }

]

Item.insertMany(seedItems)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })