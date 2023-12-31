const { defineConfig } = require("cypress");
//const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor");
//const { browserify } = require("@badeball/cypress-cucumber-preprocessor/browserify");
module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportFilename: "callenge-report",
  },
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    //specPattern: "**/*.feature",
    //setupNodeEvents(on, config) {
    //  preprocessor.addCucumberPreprocessorPlugin(on, config);
    // on("file:preprocessor", browserify.default(config));
    // return config;
    // },
  },
});
