const {Builder, By, until, Browser} = require("selenium-webdriver")
import App from "./App";
const Input = require("selenium-webdriver/bidi/input")

let driver;

// beforeAll(async () => {
//     driver = await new Builder().forBrowser("chrome").build();

// })
// afterAll

test("ob der Titel korrekt angezeigt wird", async () => {
    driver = await new Builder().forBrowser("chrome").build();
    
    await driver.get("https://google.de")

    const title = await driver.getTitle()

    expect(title).toBe("Google")
})

// findElement = sucht nur nach dem ersten Element der heißt "button"
// findElements = sucht nach Allen Elementen die "button heißen"
 
test("Ob er den Button/Checkbox anklickt", async () => {

    const checkbox = await driver.findElement(By.id("checkbox"));

    const button = await driver.findElement(By.tagName("button"));

    checkbox.click();
    button.click();

    const oldClass = await button.getAttribute("class")

    expect(oldClass).toBe("rot")

    const newClass = await button.getAttribute("class")

    expect(newClass).toBe("grau")

})

test("Ob er Input und Button ausführt", async() => {

    const input = await Input(driver)

    await driver.get("http://localhost:3000/")

    const Input = await driver.findElement(By.id("inputName"));

    const checkbox = await driver.findElement(By.id("inputEmail"));








})


    // setTimeout( async () => {
    //     await button.click

    // }, 3000);

// setTimeout(async () => {
// await driver.quit()
// },3000)


// async function getWebseite() {

// driver = await new Builder().forBrowser("firefox").build();

// await driver.get("https://de.wikipedia.org/wiki/Albert_Einstein")

// const title = await driver.getTitle()

// console.log(title)
// }

// getWebseite();
