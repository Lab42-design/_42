/**
 *
 * Returns a Promise that resolves when the DOM is ready
 *
 */
let domResolve;
const domReady = new Promise(function (resolve) {
    // expose fulfilled state holder to outer scope
    domResolve = resolve;
});
// add event listener and trigger resolve when ready
document.addEventListener('DOMContentLoaded', domResolve);
// init app when ready
// domReady.then(initApp);
class PromiseDom {
    /////
    constructor() {
        this.documentReady();
    }
    dom() {
        console.log('_____ dom');
        var domResolve;
        var domReady = new Promise(function (resolve) {
            // expose fulfilled state holder to outer scope
            domResolve = resolve;
        });
        // add event listener and trigger resolve when ready
        document.addEventListener('DOMContentLoaded', domResolve);
        // return new Promise((resolve, reject) => {
        //     const { readyState } = document
        //     // resolve early if DOM is already ready
        //     // loading, interactive, complete
        //     if (readyState === 'interactive' || readyState === 'complete') {
        //         document.removeEventListener("DOMContentLoaded", resolve);
        //         return resolve('dom ready')
        //     }
        //     // resolve when ready
        //     document.addEventListener('DOMContentLoaded', resolve)
        // })
    }
    // _el: HTMLCollectionOf<any>
    async documentReady() {
        console.log('__documentReady');
        try {
            const response = await this.dom();
            console.log(domReady);
            domReady.then();
            // const processedResponse: void = await this.processRequest(response, _el)
            // console.log(response)
            // return response
        }
        catch (error) {
            console.error(error);
        }
    }
}
//# sourceMappingURL=PromiseDom.js.map