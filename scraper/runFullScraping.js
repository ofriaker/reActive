import { getMyProteinUrls }  from'./scrapeUrls.js';
import { getMyProteinProduct } from './scrapeProductData.js';

const wheyProtein = "https://www.myprotein.co.il/nutrition/protein/whey-protein.list";
const milkProtein = "https://www.myprotein.co.il/nutrition/protein/milk-protein.list";
const proteinBars = "https://www.myprotein.co.il/nutrition/healthy-food-drinks/protein-bars.list";
const veganProtein = "https://www.myprotein.co.il/nutrition/protein/vegan-protein.list";
const nutButter = "https://www.myprotein.co.il/nutrition/healthy-food-drinks/nut-butters.list";
const drinks = "https://www.myprotein.co.il/nutrition/healthy-food-drinks/protein-drinks.list";

const productsUrlList = new Set();


await getMyProteinUrls(wheyProtein, productsUrlList);
await getMyProteinUrls(proteinBars, productsUrlList);
await getMyProteinUrls(veganProtein, productsUrlList);
await getMyProteinUrls(nutButter, productsUrlList);
await getMyProteinUrls(drinks, productsUrlList);
await getMyProteinUrls(milkProtein, productsUrlList);


import mongoose from 'mongoose';
import  Item  from '../server/models/item.js';


mongoose.connect('mongodb://127.0.0.1:27017/items', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })




productsUrlList.forEach(async (url) => {
    var p = await getMyProteinProduct(url);
    Item.insertMany(p)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
});





