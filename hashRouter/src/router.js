/**
 * 
 * Router
 * 
 */
class Router {

    constructor(routes, el) {
        this.routes = routes;
        this.el = el;
        window.onhashchange = this.hashChanged.bind(this);
        this.hashChanged();
    }

    async hashChanged(ev) {
        if (window.location.hash.length > 0) {
            const pageName = window.location.hash.substring(1);
            // console.log(pageName);
            return this.show(pageName);
        } else if (this.routes['#index']) {
            return this.show('#index');
        }

    }

    async show(pageName) {
        const page = this.routes[pageName];
        await page.load();
        this.el.innerHTML = '';
        page.show(this.el);
    }

}
