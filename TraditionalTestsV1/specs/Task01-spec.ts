
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
            let result = await checkForElementVisibility(HomePage.searchBar, 'DESKTOP', this.test?.title, HomePage.searchBarLocator, expectedResult);

            expect(result).to.equal(true);
        });

        it('search bar should be present in tablet view', async function() {
            let expectedResult=true;
            let result = await checkForElementVisibility(HomePage.searchBar, 'TABLET', this.test?.title, HomePage.searchBarLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('search bar should not be present in mobile view', async function() {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.searchBar, 'MOBILE', this.test?.title, HomePage.searchBarLocator, expectedResult);

            expect(result).to.equal(true);
        });
    });

    describe('submenu element checks',() => {
        it('submenu should be present in desktop view', async function() {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.headerSubMenu, 'DESKTOP', this.test?.title, HomePage.headerSubMenuLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('submenu should not be present in tablet view', async function() {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.headerSubMenu, 'TABLET', this.test?.title, HomePage.headerSubMenuLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('submenu should not be present in mobile view', async function() {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.headerSubMenu, 'MOBILE', this.test?.title, HomePage.headerSubMenuLocator, expectedResult);

            expect(result).to.equal(true);
        });
    })

    describe('sidebar filter element checks', () => {
        it('sidebar filter should be present in desktop view', async function () {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.sidebarFilters, 'DESKTOP', this.test?.title, HomePage.sidebarFiltersLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('sidebar filter should not be present in tablet view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.sidebarFilters, 'TABLET', this.test?.title, HomePage.sidebarFiltersLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('sidebar filter should not be present in mobile view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.sidebarFilters, 'MOBILE', this.test?.title, HomePage.sidebarFiltersLocator, expectedResult);

            expect(result).to.equal(true);
        });
    })

    describe('wishlist icon element checks', () => {
        it('wishlist icon should be present in desktop view', async function () {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.wishlistIcon, 'DESKTOP', this.test?.title, HomePage.wishlistIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('wishlist icon should not be present in tablet view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.wishlistIcon, 'TABLET', this.test?.title, HomePage.wishlistIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('wishlist icon should not be present in mobile view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.wishlistIcon, 'MOBILE', this.test?.title, HomePage.wishlistIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
    });

    describe('gridview icon element checks', () => {
        it('gridview icon should be present in desktop view', async function () {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.gridViewIcon, 'DESKTOP', this.test?.title, HomePage.gridviewIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('gridview icon should not be present in tablet view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.gridViewIcon, 'TABLET', this.test?.title, HomePage.gridviewIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('gridview icon should not be present in mobile view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.gridViewIcon, 'MOBILE', this.test?.title, HomePage.gridviewIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
    });
    describe('listview icon element checks', () => {
        it('listview icon should be present in desktop view', async function () {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.listViewIcon, 'DESKTOP', this.test?.title, HomePage.listviewIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('listview icon should not be present in tablet view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.listViewIcon, 'TABLET', this.test?.title, HomePage.listviewIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('listview icon should not be present in mobile view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.listViewIcon, 'MOBILE', this.test?.title, HomePage.listviewIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
    });

    describe('open filters icon element checks', () => {
        it('open filters icon should not be present in desktop view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.openFiltersIcon, 'DESKTOP', this.test?.title, HomePage.openFiltersIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('open filters icon should be present in tablet view', async function () {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.openFiltersIcon, 'TABLET', this.test?.title, HomePage.openFiltersIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('open filters icon should be present in mobile view', async function () {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.openFiltersIcon, 'MOBILE', this.test?.title, HomePage.openFiltersIconLocator, expectedResult);

            expect(result).to.equal(true);
        });
    });

    describe('filters label element checks', () => {
        it('filters label should not be present in desktop view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.filtersLabel, 'DESKTOP', this.test?.title, HomePage.filtersLabelLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('filters label should be present in tablet view', async function () {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.filtersLabel, 'TABLET', this.test?.title, HomePage.filtersLabelLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('listview icon should not be present in mobile view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.filtersLabel, 'MOBILE', this.test?.title, HomePage.filtersLabelLocator, expectedResult);

            expect(result).to.equal(true);
        });
    });

    describe('product shortcuts element checks', () => {
        it('product shortcuts should not be present in desktop view', async function () {
            let expectedResult = false;
            let result = await checkForElementVisibility(HomePage.productShortcuts, 'DESKTOP', this.test?.title, HomePage.productShortcutsLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('product shortcuts should be present in tablet view', async function () {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.productShortcuts, 'TABLET', this.test?.title, HomePage.productShortcutsLocator, expectedResult);

            expect(result).to.equal(true);
        });
        it('product shortcuts should be present in mobile view', async function () {
            let expectedResult = true;
            let result = await checkForElementVisibility(HomePage.productShortcuts, 'MOBILE', this.test?.title, HomePage.productShortcutsLocator, expectedResult);

            expect(result).to.equal(true);
        });
    });
});

async function checkForElementVisibility(elementName: any, viewport: string, testName: any, locator: string, expectedResult: boolean) {
    let viewportSize: any = viewportSizes[viewport];
    await browser.setWindowSize(viewportSize.width, viewportSize.height);

    let element = await elementName;
    let isElementVisibleInViewport = await element.isDisplayed();

    hackathonReporter(taskNumber,testName,locator,viewport,isElementVisibleInViewport==expectedResult);

    return isElementVisibleInViewport==expectedResult;
}

async function hackathonReporter(task: string, testName: any, domId: string, device: string, comparisonResult: boolean) {
    let viewport = await browser.getWindowSize()
    fs.appendFileSync('Traditional-V1-TestResults.txt', `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser.capabilities.browserName}, Viewport: ${viewport.width}x${viewport.height}, Device: ${device}, Status: ${(comparisonResult ? "Pass" : "Fail")}\n`);
    return comparisonResult;
}