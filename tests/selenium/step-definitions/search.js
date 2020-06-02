let {$, sleep} = require('./funcs');

module.exports = function() {

  this.Given(/^that I'm at the Sellaphone page$/, async function () {
    await helpers.loadPage('http://localhost:8081');
    await sleep(2000)
    let elem = await $('nav>a>h1')
    assert(elem, 'Expected to find h1 element')
    await sleep(2000)
  });


}

