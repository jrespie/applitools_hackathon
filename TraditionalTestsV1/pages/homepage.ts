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
    productShortcutsLocator = '#UL____222';

    get searchBar() { return $(this.searchBarLocator) }
    get headerSubMenu() { return $(this.headerSubMenuLocator) }
    get sidebarFilters() { return $(this.sidebarFiltersLocator) }
    get wishlistIcon() { return $(this.wishlistIconLocator) }
    get gridViewIcon() { return $(this.gridviewIconLocator) }
    get listViewIcon() { return $(this.listviewIconLocator) }
    get openFiltersIcon() { return $(this.openFiltersIconLocator) }
    get filtersLabel() { return $(this.filtersLabelLocator) }
    get productShortcuts() { return $(this.productShortcutsLocator) }

}

export default new HomePage();