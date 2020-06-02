const features = require('../reports/cucumber-report.json');
// load ares-helper and the ares configuration
const ares = require('ares-helper');
ares.debug = true;
ares.setProjectInfo('ares-config.json');

reportToAres();

async function reportToAres() {
  await ares.startTests();
  // a feature = a cucumber feature ≈ an ares module
  for (let feature of features) {
    await ares.startModule({
      moduleName: feature.name,
      totalTests: feature.elements.length
    });
    // console.log('feature', feature.name);
    for (let scenario of feature.elements) {
      let error = '';
      let lastKeyword;
      for (let step of scenario.steps) {
        let kw = step.keyword.trim();
        if (kw === 'After') { continue; }
        if (kw === 'And') { kw = lastKeyword; }
        if (step.result.error_message) {
          error = 'Failed on ' + kw + ' ' + step.name +
            ' Error: ' + step.result.error_message.split('\n')[0];
        }
        lastKeyword = kw;
      }
      await ares.testResult({
        moduleName: feature.name,
        title: scenario.name,
        passed: !error,
        errorMessage: error,
        testBrowser: 'Firefox' // hardcoded for now
      });
      // console.log('scenario', scenario.name);
      // console.log(error ? 'failed: ' + error : 'passed')
    }
    await ares.endModule({
      moduleName: feature.name
    });
  }
  await ares.endTests()
}