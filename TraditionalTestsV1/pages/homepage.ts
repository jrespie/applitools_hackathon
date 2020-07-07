import BasePage from './basepage';

class HomePage extends BasePage {
    open() {
        super.open('gridHackathonV1.html');
    }
    get applifashionHeaderImage() { return $('#IMG____9') }
    get applifashionSearchBar() { return $('#INPUTtext____42') }
    get applifashionHeaderSubMenu() { return $('#A__showsubmen__23') }
}

export default new HomePage();