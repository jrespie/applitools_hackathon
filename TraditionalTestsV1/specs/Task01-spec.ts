
import HomePage from '../pages/homepage'
const { expect } = require('chai');

describe('Open Homepage', () => {
    HomePage.open();
    it('search bar should be present', async () => {
        let searchBar = await HomePage.applifashionSearchBar;
        expect(await searchBar.isExisting()).to.equal(true);
    });
});