const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const sleep = ms => new Promise(resolve => {
  setTimeout(
    () => { resolve() },
    ms
  );
});

async function testGoogle() {
  const options = new chrome.Options();
  options.addArguments('--headless');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--disable-gpu');
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('https://www.google.com');

    let searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Selenium WebDriver');
    await searchBox.submit();

    await driver.wait(until.titleContains('Selenium'), 5000);
  } finally {
    await driver.quit();
  }
};

test('Google', async () => {
  await testGoogle();
}, 15000);