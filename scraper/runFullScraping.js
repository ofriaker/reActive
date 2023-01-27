import { getMyProteinUrls }  from'./scrapeUrls.js';
import { getMyProteinProduct } from './scrapeProductData.js';

const wheyProteinURL = "https://www.myprotein.co.il/nutrition/protein/whey-protein.list";
const milkProteinURL = "https://www.myprotein.co.il/nutrition/protein/milk-protein.list";
const proteinBarsURL = "https://www.myprotein.co.il/nutrition/healthy-food-drinks/protein-bars.list";
const veganProteinURL = "https://www.myprotein.co.il/nutrition/protein/vegan-protein.list";
const nutButterURL = "https://www.myprotein.co.il/nutrition/healthy-food-drinks/nut-butters.list";
const drinksURL = "https://www.myprotein.co.il/nutrition/healthy-food-drinks/protein-drinks.list";

const wheyUrlList = new Set();
const milkUrlList = new Set(); 
const barsUrlList = new Set(); 
const veganUrlList = new Set(); 
const nutUrlList = new Set();
const drinksUrlList = new Set();

const wheyProtein = "Whey Protein";
const milkProtein ="Milk Protein";
const proteinBars = "Protein Bars"; 
const veganProtein = "Vegan Protein"; 
const nutButter = "Nut Butter";
const drinks = "Drinks";

await getMyProteinUrls(wheyProteinURL, wheyUrlList);
await getMyProteinUrls(milkProteinURL, milkUrlList);
await getMyProteinUrls(proteinBarsURL, barsUrlList);
await getMyProteinUrls(veganProteinURL, veganUrlList);
await getMyProteinUrls(nutButterURL, nutUrlList);
await getMyProteinUrls(drinksURL, drinksUrlList);


import mongoose from 'mongoose';
import  Item  from '../server/models/item.js';


mongoose.connect('mongodb://127.0.0.1:27017/items', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })




wheyUrlList.forEach(async (url) => {
    var p = await getMyProteinProduct(url, wheyProtein);
    Item.insertMany(p)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
});

milkUrlList.forEach(async (url) => {
    var p = await getMyProteinProduct(url, milkProtein);
    Item.insertMany(p)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
});

barsUrlList.forEach(async (url) => {
    var p = await getMyProteinProduct(url, proteinBars);
    Item.insertMany(p)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
});

veganUrlList.forEach(async (url) => {
    var p = await getMyProteinProduct(url, veganProtein);
    Item.insertMany(p)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
});

nutUrlList.forEach(async (url) => {
    var p = await getMyProteinProduct(url, nutButter);
    Item.insertMany(p)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
});

drinksUrlList.forEach(async (url) => {
    var p = await getMyProteinProduct(url, drinks);
    Item.insertMany(p)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
});




