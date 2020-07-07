
import HomePage from '../pages/homepage'
import { Browser } from 'webdriverio';
const { expect } = require('chai');

const fs = require('fs');

const viewportSizes: any = {
    'DESKTOP': { width: 1200, height: 700 },
    'TABLET': { width: 768, height: 700},
    'MOBILE': { width: 500, height: 700}
}

const taskNumber = '1';

describe('Open Homepage', () => {
    HomePage.open();
    describe('search bar element checks', function() {
        it('search bar should be present in desktop view', async function() {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.applifashionSearchBar, 'DESKTOP', this.test?.title, HomePage.applifashionSearchBarLocator, expectedResult);

            expect(result).to.equal(true);
        });

        it('search bar should be present in tablet view', async function() {
            let expectedResult=true;
            let result = await checkForElementVisibility(HomePage.applifashionSearchBar, 'TABLET', this.test?.title, HomePage.applifashionSearchBarLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('search bar should not be present in mobile view', async function() {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.applifashionSearchBar, 'MOBILE', this.test?.title, HomePage.applifashionSearchBarLocator, expectedResult);

            expect(result).to.equal(true);
        });
    });

    describe('submenu element checks',() => {
        it('submenu should be present in desktop view', async function() {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.applifashionHeaderSubMenu, 'DESKTOP', this.test?.title, HomePage.applifashionHeaderSubMenuLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('submenu should not be present in tablet view', async function() {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.applifashionHeaderSubMenu, 'TABLET', this.test?.title, HomePage.applifashionHeaderSubMenuLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('submenu should not be present in mobile view', async function() {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.applifashionHeaderSubMenu, 'MOBILE', this.test?.title, HomePage.applifashionHeaderSubMenuLocator, expectedResult);

            expect(result).to.equal(true);
        });
    })

});

async function checkForElementVisibility(elementName: any, viewport: string, testName: any, locator: string, expectedResult: boolean) {
    let viewportSize: any = viewportSizes[viewport];
    await browser.setWindowSize(viewportSize.width, viewportSize.height);

    let element = await elementName;
    let isElementVisibleInViewport = await element.isDisplayedInViewport();

    hackathonReporter(taskNumber,testName,locator,viewport,isElementVisibleInViewport==expectedResult);

    return isElementVisibleInViewport==expectedResult;
}

async function hackathonReporter(task: string, testName: any, domId: string, device: string, comparisonResult: boolean) {
    let viewport = await browser.getWindowSize()
    fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser.capabilities.browserName}, Viewport: ${viewport.width}x${viewport.height}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
    return comparisonResult;
}