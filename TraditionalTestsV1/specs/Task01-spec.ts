
import HomePage from '../pages/homepage'
import { Browser } from 'webdriverio';
const { expect } = require('chai');

const viewportSizes = {
    DESKTOP: { width: 1200,height: 700 },
    TABLET: { width: 768,height: 700},
    MOBILE: { width: 500, height: 700}
}

describe('Open Homepage', () => {
    HomePage.open();
    describe('search bar element checks',() => {
        it('search bar should be present in desktop view', async () => {
            expect(await isElementPresentInViewport(HomePage.applifashionSearchBar,viewportSizes.DESKTOP.width,viewportSizes.DESKTOP.height));
        });
        it('search bar should be present in tablet view', async () => {
            expect(await isElementPresentInViewport(HomePage.applifashionSearchBar,viewportSizes.TABLET.width, viewportSizes.TABLET.height)).to.equal(true);
        });
        it('search bar should not be present in mobile view', async () => {
            expect(await isElementPresentInViewport(HomePage.applifashionSearchBar,viewportSizes.MOBILE.width, viewportSizes.MOBILE.height)).to.equal(false);
        });
    });

    describe('submenu element checks',() => {
        it('submenu should be present in desktop view', async () => {
            expect(await isElementPresentInViewport(HomePage.applifashionHeaderSubMenu,viewportSizes.DESKTOP.width,viewportSizes.DESKTOP.height)).to.equal(true);
        });
        it('submenu should not be present in desktop view', async () => {
            expect(await isElementPresentInViewport(HomePage.applifashionHeaderSubMenu, viewportSizes.TABLET.width, viewportSizes.TABLET.height)).to.equal(false);
        });
        it('submenu should not be present in desktop view', async () => {
            expect(await isElementPresentInViewport(HomePage.applifashionHeaderSubMenu, viewportSizes.MOBILE.width, viewportSizes.MOBILE.height)).to.equal(false);
        });
    })

});

async function isElementPresentInViewport(elementName: any, viewportWidth: number, viewportHeight: number) {
    await browser.setWindowSize(viewportWidth, viewportHeight);
    let element = await elementName;
    let isElementVisibleInViewport = await element.isDisplayedInViewport();
    return isElementVisibleInViewport;
}