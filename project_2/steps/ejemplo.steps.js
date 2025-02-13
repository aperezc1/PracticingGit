const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

let browser;
let page;

Given('I am on the Google homepage', async function() {  
  console.log('Navegando a la página de inicio de Google...');
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('https://www.google.com');
});

When('I enter {string} in the search box', async function(searchQuery) {
    console.log(`Ingresando la palabra "${searchQuery}" en el cuadro de búsqueda...`);
    await page.fill('textarea[name="q"]', searchQuery);
});

When('I click the "Buscar" button', async function() {
  console.log('Haciendo clic en el botón "Buscar"...');
    await page.click('input[name="btnK"]'); // Selector del botón "Buscar"
});

Then('I should see the Google search results page', async function() {
  const title = await page.title();
  expect(title).toContain('Google');
  await browser.close();
});
