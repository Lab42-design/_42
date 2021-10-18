/**
 *
 * document.readyStates = loading || interactive || complete
 *
 * usage
 *
 * let dom = new PromiseDom()
 *
 * dom.then(() => start('one'))
 * dom.then(() => start('two'))
 * etc...
 *
 * function start(message) {
 *     console.log('___ startup script: ', message)
 * }
 *
 */
class PromiseDom {
    constructor() {
        this.ready = new Promise(function (resolve, reject) {
            let _state = document.readyState;
            try {
                if (_state === 'interactive' || _state === 'complete') {
                    return Promise.resolve();
                }
                document.addEventListener('DOMContentLoaded', () => resolve(), false);
            }
            catch (error) {
                console.error(error);
            }
        });
        console.log('_42 / PromiseDom');
    }
}
