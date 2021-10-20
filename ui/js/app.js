/**
 *
 * https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/
 *
 */
//  import { PromiseDom } from "./promise_dom";
class App {
    constructor() {
        console.log('_42 / App');
    }
    async Launch(_fn) {
        console.log('_42 / App / Launch');
        if (_fn === undefined) {
            _fn = 'start';
        }
        const dom = new PromiseDom();
        dom.ready.then(() => this.___launch('9 8 7 6 5 4 3 2 1 0'));
    }
    ___launch(message) {
        console.log(message);
    }
}
