import * as cheerio from 'cheerio';
import eq from 'cheerio-eq';
import fetch from 'node-fetch';

let imgUrl ="";
let name ="";
let description = "";
let price = 0;
let rate = 4;
let flavoursSet;
let cutFlavours;
// let category = "";
let newLen;

export async function getMyProteinProduct(url, category) {
    try {
        const response = await fetch(url);
        const body = await response.text();
        const productPage = cheerio.load(body);

        flavoursSet = new Set;
        cutFlavours = new Set();
        let len = productPage('.athenaProductVariations_dropdownSegment >.athenaProductVariations_dropdown > option').length;
        if (len != 0) { 
            name = productPage('.athenaProductPage_productName > .productName > .productName_title').text();
            imgUrl = productPage('.athenaProductImageCarousel_image').attr('src');
            description = productPage('.athenaProductPage_productName > .productName > .productName_subtitle').text();
            const priceBefore = productPage('.athenaProductPage_productPrice_top > .productPrice > .productPrice_priceWithBadge >.productPrice_priceInfo >.productPrice_price').text()
            price = priceBefore.replace(/[^\d.-]/g, '');
            const beforeRate = productPage('.productReviewStarsPresentational').attr('aria-label');
            if(beforeRate) {rate = beforeRate.replace(/[^\d.-]/g, '')};
            // category = productPage('.breadcrumbs_item-active').text().trim();
            // category = category;
            if (len > 5)
            {
                 newLen = 5;
            } 
            else newLen = len;
            for (let i=0; i<newLen; i++) {
                flavoursSet.add(
                    productPage('.athenaProductVariations_dropdownSegment >.athenaProductVariations_dropdown > option')
                    .eq(i)
                    .text()
                    .trim()
                );              
        }
            const iterator = flavoursSet.values();
        for (let i=0; i<newLen ; i++)
        {
            cutFlavours.add(iterator.next().value);
        } 
        const flavours = Array.from(cutFlavours);
        console.log(flavours);


            return ({ name, imgUrl, description, price, rate, category, flavours });
    }
    }

    catch (error) {
        console.log(error);
    }
}

