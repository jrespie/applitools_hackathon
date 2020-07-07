import BasePage from './basepage';

class HomePage extends BasePage {
    open() {
        super.open('gridHackathonV1.html');
    }

    applifashionSearchBarLocator = '#INPUTtext____42';
    applifashionHeaderSubMenuLocator = '#A__showsubmen__23';

    get applifashionSearchBar() { return $(this.applifashionSearchBarLocator) }
    get applifashionHeaderSubMenu() { return $(this.applifashionHeaderSubMenuLocator) }
}

export default new HomePage();