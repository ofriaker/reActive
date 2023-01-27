import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

export async function getMyProteinUrls(url, productsUrlList) {
    try {
        const response = await fetch(url);
        const body = await response.text();
        const bestsellersPage = cheerio.load(body);
        
        bestsellersPage('.athenaProductBlock_linkImage').map((i, productLink) => {
            const productUrl = bestsellersPage(productLink).attr('href');
            const fullProductUrl = url + productUrl;
            if (!(productsUrlList.has(fullProductUrl))){
                productsUrlList.add(fullProductUrl);
            }
        });

    } catch (error) {
        console.log(error);
    }
}






