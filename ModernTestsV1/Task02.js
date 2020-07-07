'use strict';

const { remote } = require('webdriverio');
const {
    VisualGridRunner,
    Eyes,
    Target,
    Configuration,
    RectangleSize,
    BatchInfo,
    BrowserType,
    DeviceName,
    ScreenOrientation
} = require('@applitools/eyes-webdriverio');

let browser;
let eyes;

const applitoolsApiKey = process.env.APPLITOOLS_API_KEY;

describe('wdio5', function () {
    let runner

    before(async () => {
        const chrome = {
            capabilities: {
                browserName: 'chrome'
            },
            logLevel: 'silent',
        };
        browser = await remote(chrome);

        runner = new VisualGridRunner(10);

        eyes = new Eyes(runner);
        const configuration = new Configuration();

        configuration.setApiKey(applitoolsApiKey);

        configuration.setBatch(new BatchInfo('UFG Hackathon'));
        configuration.setTestName('Task 2');

        eyes.setConfiguration(configuration);
    });


    it('ultraFastTest', async () => {

        await browser.url('https://demo.applitools.com/gridHackathonV1.html');

        await eyes.open(browser, 'Hackathon App', 'Task 2', new RectangleSize(800, 600));

        const filterToggle = await browser.$('#A__openfilter__206');
        await filterToggle.click();

        const blackColourFilterCheckmark = await browser.$('#LABEL__containerc__104');
        await blackColourFilterCheckmark.waitForClickable();
        await blackColourFilterCheckmark.click();

        const filterButton = await browser.$('#filterBtn');
        await filterButton.click();

        await eyes.check('Shopping Experience Test', Target.window().fully());

        await eyes.closeAsync();
    });

    after(async () => {
        await browser.deleteSession();

        await eyes.abortAsync();

        const results = await runner.getAllTestResults(false);
        console.log(results);
    });

});