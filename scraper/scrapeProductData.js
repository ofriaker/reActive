import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const productUrl = "https://www.myprotein.co.il/nutrition/protein/vegan-protein.list/sports-nutrition/clear-vegan-protein-plus-digestion/13105719.html";
let imgUrl ="";
let name ="";
let description = "";
let price = "";
let rank = 0;
// let optionsCategoryName = ""
let flavours = [];

async function getMyProteinProduct(url) {
    try {
        const response = await fetch(url);
        const body = await response.text();
        const productPage = cheerio.load(body);
        name = productPage('.athenaProductPage_productName > .productName > .productName_title').text();
        imgUrl = productPage('.athenaProductImageCarousel_image').attr('src');
        description = productPage('.athenaProductPage_productName > .productName > .productName_subtitle').text();
        const priceBefore = productPage('.athenaProductPage_productPrice_top > .productPrice > .productPrice_priceWithBadge >.productPrice_priceInfo >.productPrice_price').text()
        price = priceBefore.replace(/[^\d.-]/g, '');
        rank = productPage('.productReviewStarsPresentational').attr('aria-label');
        flavours = (productPage('.athenaProductVariations_dropdownSegment >.athenaProductVariations_dropdown > option').text());
    }

    catch (error) {
        console.log(error);
    }
}

await getMyProteinProduct(productUrl);
console.log(imgUrl);
console.log(name);
console.log(description);
console.log(price);
console.log(rank);
console.log(flavours);
