import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

// const wheyProtein = "https://www.myprotein.co.il/nutrition/protein/whey-protein.list";
// const milkProtein = "https://www.myprotein.co.il/nutrition/protein/milk-protein.list";
// const proteinBars = "https://www.myprotein.co.il/nutrition/healthy-food-drinks/protein-bars.list";
// const veganProtein = "https://www.myprotein.co.il/nutrition/protein/vegan-protein.list";
// const nutButter = "https://www.myprotein.co.il/nutrition/healthy-food-drinks/nut-butters.list";
// const drinks = "https://www.myprotein.co.il/nutrition/healthy-food-drinks/protein-drinks.list";

// const productsUrlList = new Set();

export async function getMyProteinUrls(url, productsUrlList) {
    try {
        const response = await fetch(url);
        const body = await response.text();
        const bestsellersPage = cheerio.load(body);
        
        bestsellersPage('.athenaProductBlock_linkImage').map((i, productLink) => {
            const productUrl = bestsellersPage(productLink).attr('href');
            const fullProductUrl = url + productUrl;
            productsUrlList.add(fullProductUrl);
        });

    } catch (error) {
        console.log(error);
    }
}

// module.exports.getMyProteinUrls = getMyProteinUrls;

// await getMyProtein(wheyProtein,productsUrlList);
// await getMyProtein(proteinBars);
// await getMyProtein(veganProtein);
// await getMyProtein(nutButter);
// await getMyProtein(drinks);
// await getMyProtein(milkProtein);

// console.log(productsUrlList.size);






