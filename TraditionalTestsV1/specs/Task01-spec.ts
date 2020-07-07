
import HomePage from '../pages/homepage'
const { expect } = require('chai');

const viewportSizes = {
    DESKTOP: { width: 1200,height: 700 },
    TABLET: { width: 768,height: 700},
    MOBILE: { width: 500, height: 700}
}

describe('Open Homepage', () => {
    HomePage.open();
    it('search bar should be present', async () => {
        await browser.setWindowSize(viewportSizes.DESKTOP.width, viewportSizes.DESKTOP.height);
        browser.capabilities
        let searchBar = await HomePage.applifashionSearchBar;
        expect(await searchBar.isDisplayedInViewport()).to.equal(true);
    });
});