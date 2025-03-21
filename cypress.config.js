const { defineConfig } = require("cypress");

const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // neat-csv
  const neatCsv = (await import('neat-csv')).default;
      on('task', {
        parseCsv({ csvString }) {
          return neatCsv(csvString); // Returns a promise
        },
      });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

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
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js',
  },

});
