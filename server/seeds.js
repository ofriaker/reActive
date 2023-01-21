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
        description: "Vanilla",
        productImageUrl: '/images/proteinvanil.jpg'
      },
      {
        name: 'Nike Shirt',
        category: 'Clothing&Accessories',
        price: '40',
        description: "Pink shirt",
        productImageUrl: '/images/nike.jpg'
      },
      {
        name: 'Nike Shirt',
        category: 'Clothing&Accessories',
        price: '40',
        description: "Black shirt",
        productImageUrl: '/images/nikeblack.jpg'
      },
      {
        name: 'Protein snack',
        category: 'Foods&Snacks',
        price: '10',
        description: "Karamel",
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