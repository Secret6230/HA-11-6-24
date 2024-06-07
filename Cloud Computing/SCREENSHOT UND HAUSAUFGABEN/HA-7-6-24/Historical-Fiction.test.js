const { Builder, By, until } = require("selenium-webdriver");
const fs = require("fs");
const { title } = require("process");
const { resolve } = require("path");
let driver;
beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
});

afterAll(async () => {
    await new Promise(resolve => setTimeout(resolve,3000));
    await driver.quit()
});

test.skip('sollte die neusten News von "Books to Scrape" scrapen', async () => {
    
    await driver.get("https://books.toscrape.com/catalogue/category/books/historical-fiction_4/index.html");
    
    await driver.wait(until.elementsLocated(By.css(".product_pod")), 10000);
    
    const articles = await driver.findElements(By.css(".product_pod"));
    
    // const firstArticle =  articles[0];
    // await firstArticle.click();
    // DER FEHLER VON StaleElementReferenceError: stale element reference: stale element not found
    // (Session info: chrome=125.0.6422.142) WAR AUF ZEILE 16
  
  let allTitles = [];

  for (let article of articles) {
    
    let titleElement = await article.findElement(By.css("h3 a"));
    
    let title = await titleElement.getAttribute("title");
    
    let priceElement = await article.findElement(By.css(".price_color"));
    
    let price = await priceElement.getText();

    let availabilityElement = await article.findElement(By.css(".instock"));
    
    let availability = await availabilityElement.getText();
    
    allTitles.push({ title, price, availability });
    
    fs.writeFileSync("Historical-Fiction.json", JSON.stringify(allTitles, null, 2));
  }
});