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
        category: 'Whey protein',
        price: '20',
        description: "Vanilla",
        productImageUrl: '/images/proteinvanil.jpg'
      },
      {
        name: 'Nike Shirt',
        category: 'Whey protein',
        price: '40',
        description: "Pink shirt",
        productImageUrl: '/images/proteinvanil.jpg'
      },
      {
        name: 'Nike Shirt',
        category: 'Whey protein',
        price: '40',
        description: "Black shirt",
        productImageUrl: '/images/proteinvanil.jpg'
      },
      {
        name: 'Protein snack',
        category: 'Milk protein',
        price: '10',
        description: "Karamel",
        productImageUrl: '/images/proteinvanil.jpg'
      },
      {
        name: 'Protein snack',
        category: 'Milk protein',
        price: '10',
        description: "Karamel",
        productImageUrl: '/images/proteinvanil.jpg'
      },
      {
        name: 'Protein snack',
        category: 'Vegan protein',
        price: '10',
        description: "Karamel",
        productImageUrl: '/images/proteinvanil.jpg'
      },
      {
        name: 'Protein snack',
        category: 'Snacks',
        price: '10',
        description: "Karamel",
        productImageUrl: '/images/proteinvanil.jpg'
      },
      {
        name: 'Protein snack',
        category: 'Snacks',
        price: '10',
        description: "Karamel",
        productImageUrl: '/images/proteinvanil.jpg'
      },
      {
        name: 'Protein snack',
        category: 'Spreads',
        price: '10',
        description: "Karamel",
        productImageUrl: '/images/proteinvanil.jpg'
      },
      {
        name: 'Protein snack',
        category: 'Drinks',
        price: '10',
        description: "Karamel",
        productImageUrl: '/images/proteinvanil.jpg'
      }

]

Item.insertMany(seedItems)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })