import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("faço login na plataforma e acesso o carrinho", () => {
          cy.visit('https://advantageonlineshopping.com')
          cy.get('#menuUserLink').click();
          cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('adminAM');
          cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('123*Am');
          cy.get('#sign_in_btn').click();
          cy.get('#mobileSearch > .roboto-medium').type('tablet');
          cy.get('svg[data-ng-click="goToCategoryPage()"]').click();
          cy.get(':nth-child(1) > :nth-child(4) > .productName').click();
          cy.get('.fixedBtn > .roboto-medium').click()

        });
      
When("verifico os itens nele",()=>{ 
    cy.get('#shoppingCartLink').click();
    cy.get(':nth-child(6) > .price')
      .should('exist') 
      .and('be.visible'); 

      });

Then("finalizo a compra dos itens",()=> {
    cy.get('#checkOutButton').click();
    cy.get('.mobileBtnHandler > #next_btn').click();
});