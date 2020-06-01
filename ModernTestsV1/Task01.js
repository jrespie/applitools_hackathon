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
        configuration.setTestName('Task 1');

        configuration.addBrowser(1200, 700, BrowserType.CHROME);
        configuration.addBrowser(1200, 700, BrowserType.FIREFOX);
        configuration.addBrowser(1200, 700, BrowserType.EDGE_CHROMIUM);
        configuration.addBrowser(768, 700, BrowserType.CHROME);
        configuration.addBrowser(768, 700, BrowserType.FIREFOX);
        configuration.addBrowser(768, 700, BrowserType.EDGE_CHROMIUM);
        configuration.addDeviceEmulation(DeviceName.iPhone_X, ScreenOrientation.PORTRAIT);

        eyes.setConfiguration(configuration);
    });


    it('ultraFastTest', async () => {

        await browser.url('https://demo.applitools.com/gridHackathonV1.html');

        await eyes.open(browser, 'Hackathon App', 'Task 1', new RectangleSize(800, 600));

        await eyes.check('Cross-Device Elements Test', Target.window().fully());

        await eyes.closeAsync();
    });

    after(async () => {
        await browser.deleteSession();

        await eyes.abortAsync();

        const results = await runner.getAllTestResults(false);
        console.log(results);
    });

});