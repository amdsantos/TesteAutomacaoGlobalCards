import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("que acesso na página de login", () => {
    cy.visit('https://advantageonlineshopping.com')
})

When("insiro meu usuário e senha",()=>{
    cy.get('#menuUserLink').click()
    cy.get('[a-hint="Username"] > .inputContainer > .ng-pristine').type('adminAM')
    cy.get('[a-hint="Password"] > .inputContainer > .ng-pristine').type('123*Am')
    cy.get('#sign_in_btn').click()
})

Then("realizo o login com sucesso",()=> {
    cy.get('.logo > a')
})
