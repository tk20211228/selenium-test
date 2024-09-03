const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

(async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://myemm.work/auth/login/');
  
    let title = await driver.getTitle();
    assert.equal("MyEmm", title);
  
    await driver.manage().window().setRect({ width: 968, height: 948 })
  
    await driver.findElement(By.id("input-44")).click()
    await driver.findElement(By.id("input-44")).sendKeys("t5kuboki@gmail.com")
    await driver.sleep(5000);
    await driver.findElement(By.id("input-47")).click()
    await driver.findElement(By.id("input-47")).sendKeys("test123!!")
    await driver.sleep(5000);
    await driver.findElement(By.css(".v-input--selection-controls__ripple")).click()
    await driver.findElement(By.css(".primary > .v-btn__content")).click()
    await driver.sleep(5000);
  } catch (e) {
    console.log(e)
  } finally {
    await driver.quit();
  }
}())