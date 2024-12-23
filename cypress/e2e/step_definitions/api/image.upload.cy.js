import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let userId;
let productId = '10'; 
let newImageId;


Given('que faço login com as minhas credencias', () => {
    cy.get('#menuUserLink').click()
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('adminAM')
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('123*Am')
    cy.get('#sign_in_btn').click()
})


When('consulto o produto através do ID {string}', (id) => {
  cy.request('https://www.advantageonlineshopping.com/catalog/api/v1/products/16')
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', id);
    });
});


When('atualizo a imagem do produto', () => {
  const newImage = 'nova_imagem.png'; 

  cy.fixture(newImage, 'binary').then((image) => {
    const blob = Cypress.Blob.binaryStringToBlob(image, 'image/png');
    const formData = new FormData();
    formData.append('image', blob, 'nova_imagem.png');

    cy.request({
      method: 'PUT',
      url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/16',
      body: formData,
      headers: {
        'content-type': 'multipart/form-data',
      },
    }).then((response) => {
      expect(response.status).to.eq(200); 
      newImageId = response.body.imageId; 
      expect(newImageId).to.exist; 
    });
  });
});


Then('valido que a imagem foi atualizada', () => {
  cy.request('https://www.advantageonlineshopping.com/catalog/api/v1/products/16')
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.imageId).to.eq(newImageId); 
    });
});

