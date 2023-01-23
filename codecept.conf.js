exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://www.youtube.com',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle0'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    allure: {
      enabled: true,
      outputDir: "./output/allure-results"
    },
    stepByStepReport: {
      enabled: true,
      fullPageScreenshots: true,
      deleteSuccessful: true,
      screenshotsForAllureReport: true
    }
  },
  tests: './*test.js',
  name: 'Automation'
}