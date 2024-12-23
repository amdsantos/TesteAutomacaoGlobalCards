const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://advantageonlineshopping.com', 
    specPattern: 'cypress/e2e/Features/*.{feature,js}', 
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
  },
});
