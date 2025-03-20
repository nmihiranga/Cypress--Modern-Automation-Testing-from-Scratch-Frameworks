const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Cypress cloud Project ID
  projectId: 'dsjy5z',

  // Mochawesome reporter
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
  },

  // To retry failed tests
  retries: {
    runMode: 1,
  },

  // Environment variables
  env: {
    url : 'https://rahulshettyacademy.com'
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js',
  },

});
