const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

const iniciarTeste = async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()

    await driver.get('https://http.cat');
    const urls = await driver.findElements(By.css('li a'));
    console.log(urls.length);

    const hrefs = [];

    for(var elemento of urls) {
        var url = await elemento.getAttribute('href');
        hrefs.push(url);
    }

    console.log(hrefs);

    for (var href of hrefs) {
        await driver.get(href);
    }
    
    await driver.close();
}

iniciarTeste();