import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

let apiResponse; 

Given('que faço uma requisição GET para "/api/produtos"', () => {
  cy.request('GET', 'https://www.advantageonlineshopping.com/catalog/api/v1/products/16')
    .then((response) => {
      apiResponse = response;
    });
});

Then('recebo um retorno com status 200', () => {
  expect(apiResponse.status).to.eq(200); 
});

Then('a resposta contem "Produto"', () => {
  expect(apiResponse.body).to.include('Produto'); 
});
