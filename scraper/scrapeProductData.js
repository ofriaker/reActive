import * as cheerio from 'cheerio';
import eq from 'cheerio-eq';
import fetch from 'node-fetch';

const productUrl = "https://www.myprotein.co.il/sports-nutrition/protein-spreads/11691950.html";
let imgUrl ="";
let name ="";
let description = "";
let price = "";
let rank = "";
let flavours = [];
let category = "";

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
        category = productPage('.breadcrumbs_item-active').text().trim();
        let len = productPage('.athenaProductVariations_dropdownSegment >.athenaProductVariations_dropdown > option').length;
        for (let i=0; i<len; i++) {
            flavours.push(
                productPage('.athenaProductVariations_dropdownSegment >.athenaProductVariations_dropdown > option')
                .eq(i)
                .text()
                .trim()
            );
        }
    }

    catch (error) {
        console.log(error);
    }
}

await getMyProteinProduct(productUrl);
// console.log(imgUrl);
// console.log(name);
// console.log(description);
// console.log(price);
// console.log(rank);
// console.log(category);
// console.log(flavours);
