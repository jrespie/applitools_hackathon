import BasePage from './basepage';

class HomePage extends BasePage {
    open() {
        super.open('gridHackathonV1.html');
    }

    searchBarLocator = '#INPUTtext____42';
    headerSubMenuLocator = '#A__showsubmen__23';
    sidebarFiltersLocator = '#sidebar_filters';
    wishlistIconLocator = '#A__wishlist__52';
    gridviewIconLocator = '#I__tiviewgrid__202';
    listviewIconLocator = '#I__tiviewlist__204';
    openFiltersIconLocator = '#ti-filter';
    filtersLabelLocator = '#SPAN____208';
    productWishlistIconLocator = '#I__tiheart__225';
    productCompareIconLocator = '#I__ticontrols__229';
    productAddToCartIconLocator = '#I__tishopping__233';

    blackColourFilterCheckmarkLocator = '#LABEL__containerc__104';
    filterButtonLocator = '#filterBtn';
    gridItemsLocator = '.grid_item';

    appliAirXNightThumbnailLocator = '#IMG__imgfluid__215';

    get searchBar() { return $(this.searchBarLocator) }
    get headerSubMenu() { return $(this.headerSubMenuLocator) }
    get sidebarFilters() { return $(this.sidebarFiltersLocator) }
    get wishlistIcon() { return $(this.wishlistIconLocator) }
    get gridViewIcon() { return $(this.gridviewIconLocator) }
    get listViewIcon() { return $(this.listviewIconLocator) }
    get openFiltersIcon() { return $(this.openFiltersIconLocator) }
    get filtersLabel() { return $(this.filtersLabelLocator) }
    get productWishlistIcon() { return $(this.productWishlistIconLocator) }
    get productCompareIcon() { return $(this.productCompareIconLocator) }
    get productAddToCartIcon() { return $(this.productAddToCartIconLocator) }

    get blackColourFilterCheckmark() { return $(this.blackColourFilterCheckmarkLocator) }
    get filterButton() { return $(this.filterButtonLocator) }
    get gridItems() { return $$(this.gridItemsLocator) }
    get appliAirXNightThumbnail() { return $(this.appliAirXNightThumbnailLocator) }

}

export default new HomePage();