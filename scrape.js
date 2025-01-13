const puppeteer = require('puppeteer');

async function scrapeAllData(url) {
    // Launch a browser (non-headless for debugging)
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        // Navigate to the URL
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Wait for the main container to load
        await page.waitForSelector('.finder_snip_main_wrap', { timeout: 60000 });

        // Extract all data
        const allData = await page.evaluate(() => {
            const data = [];
            // Select all phone elements
            document.querySelectorAll('.finder_snip_main_wrap').forEach(phone => {
                const name = phone.querySelector('.finder_snip_title')?.innerText.trim();
                const price = phone.querySelector('.price.price_padding')?.innerText.trim();
                const rating = phone.querySelector('.finder_snip_rating_over')?.innerText.trim();
                const image = phone.querySelector('img')?.src; // Get the image URL
                const description = phone.querySelector('.specs_li')?.innerText.trim(); // Get the first feature as description
                const features = Array.from(phone.querySelectorAll('.specs_li')).map(feature => feature.innerText.trim());

                if (name && price) {
                    data.push({
                        name,
                        price,
                        rating,
                        image,
                        description,
                        features
                    });
                }
            });
            return data;
        });

        // Close the browser
        await browser.close();

        return allData;
    } catch (error) {
        console.error('Error scraping data:', error);
        await browser.close();
        return null;
    }
}

// Example usage
const url = process.argv[2]; // Get the URL from the command line argument

if (!url) {
    console.log('Please provide a URL as an argument.');
    console.log('Usage: node scrape.js <URL>');
    process.exit(1);
}

scrapeAllData(url)
    .then(data => {
        if (data) {
            console.log('All Data:');
            console.log(JSON.stringify(data, null, 2)); // Pretty-print the JSON data
        } else {
            console.log('Failed to scrape data.');
        }
    });