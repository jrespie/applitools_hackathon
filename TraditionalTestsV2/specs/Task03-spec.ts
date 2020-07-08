import HomePage from '../pages/homepage'
import ProductDetailsPage from '../pages/productdetailspage'
import { Browser } from 'webdriverio';
const { expect } = require('chai');

const fs = require('fs');

const taskNumber = '3';

describe('Open Homepage', () => {
    HomePage.open();
    browser.setWindowSize(800,600);
    describe('browse to first black shoe', function () {
        it('should open the details page for Appli Air x Night', async function () {
            let firstBlackShoeThumbnail = await HomePage.appliAirXNightThumbnail;
            firstBlackShoeThumbnail.click();
            let shoeName = await ProductDetailsPage.shoeName;
            let result = (await shoeName.getText() == 'Appli Air x Night');
            hackathonReporter(taskNumber, this.test?.title, ProductDetailsPage.shoeNameLocator, result);
            expect(await shoeName.getText()).to.equal('Appli Air x Night');
        });
        it('should default to size small', async function() {
            let defaultShoeSize = await ProductDetailsPage.selectedSize;
            let result = (await defaultShoeSize.getText() == 'Small (S)');
            hackathonReporter(taskNumber, this.test?.title, ProductDetailsPage.shoeNameLocator, result);
            expect(await defaultShoeSize.getText()).to.equal('Small (S)');
        })
        it('should have a new price of $33.00', async function() {
            let newShoePrice = await ProductDetailsPage.newShoePrice;
            let result = (await newShoePrice.getText() == '$33.00');
            hackathonReporter(taskNumber, this.test?.title, ProductDetailsPage.newShoePriceLocator, result);
            expect(await newShoePrice.getText()).to.equal('$33.00');
        })
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
    fs.appendFileSync('Traditional-V2-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser.capabilities.browserName}, Viewport: ${viewport.width}x${viewport.height}, Device: TABLET, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
    return comparisonResult;
}
