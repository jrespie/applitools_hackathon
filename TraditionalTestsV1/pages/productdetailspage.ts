import BasePage from './basepage';

class ProductDetailsPage extends BasePage {
    open() {
        super.open('gridHackathonProductDetailsV1.html?id=1');
    }

    shoeNameLocator = '#shoe_name';
    selectedSizeLocator = '#DIV__customsele__92 > div > span';
    newShoePriceLocator = '#new_price';

    get shoeName() { return $(this.shoeNameLocator) }
    get selectedSize() { return $(this.selectedSizeLocator) }
    get newShoePrice() { return $(this.newShoePriceLocator) }

}

export default new ProductDetailsPage();