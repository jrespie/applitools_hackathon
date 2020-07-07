export default class BasePage {
    constructor() {
        const title = 'Applifashion Base Page'
    }

    open(path: string) {
        browser.url(path);
    }
}