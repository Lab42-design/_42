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
        console.log('_42 / PromiseDom')
    }

    deferred = new Promise<void>(function (resolve, reject) {
        try {
            if (document.readyState === 'interactive' || document.readyState === 'complete') {
                return Promise.resolve()
            }
            document.addEventListener('DOMContentLoaded', () => resolve(), false)
        } catch (error) {
            console.error(error)
        }
    })
}
