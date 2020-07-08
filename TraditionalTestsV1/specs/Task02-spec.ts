import HomePage from '../pages/homepage'
import { Browser } from 'webdriverio';
const { expect } = require('chai');

const fs = require('fs');

const taskNumber = '2';

describe('Open Homepage', () => {
    HomePage.open();
    browser.setWindowSize(800,600);
    describe('filter for black shoes', function () {
        it('should open the filter sidebar', async function () {
            let filterToggle = await HomePage.openFiltersIcon;
            await filterToggle.click();
            await (await HomePage.sidebarFilters).waitForClickable();
            expect(await checkForElementVisibility(HomePage.sidebarFilters, this.test?.title, HomePage.sidebarFiltersLocator, true)).to.equal(true);
        });
        it('should filter for black shoes only', async function () {
            let blackColourFilterCheckmark = await HomePage.blackColourFilterCheckmark;
            await blackColourFilterCheckmark.waitForClickable();
            await blackColourFilterCheckmark.click();
            let filterButton = await HomePage.filterButton;
            await filterButton.click();
            let numberOfFilteredItems = await HomePage.gridItems;
            let result = (numberOfFilteredItems.length==2);
            hackathonReporter(taskNumber,this.test?.title,HomePage.blackColourFilterCheckmarkLocator,result);
            expect(numberOfFilteredItems.length).to.equal(2);
        });
    })
});

async function checkForElementVisibility(elementName: any, testName: any, locator: string, expectedResult: boolean) {

    let element = await elementName;
    element.scrollIntoView();
    let isElementVisibleInViewport = await element.isDisplayedInViewport();

    hackathonReporter(taskNumber, testName, locator, isElementVisibleInViewport == expectedResult);

    return isElementVisibleInViewport == expectedResult;
}

async function hackathonReporter(task: string, testName: any, domId: string, comparisonResult: boolean) {
    let viewport = await browser.getWindowSize()
    fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser.capabilities.browserName}, Viewport: ${viewport.width}x${viewport.height}, Device: TABLET, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
    return comparisonResult;
}
