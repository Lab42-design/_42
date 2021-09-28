/**
* 
* usage
* 
* let dom = new PromiseDom()
* 
* dom.then(() => start('one'))
* dom.then(() => start('two'))
* etc...
* function start(message) {
*     console.log('___ startup script: ', message)
* }
*/
class PromiseDom {

    deferred = new Promise<void>(function (resolve, reject) {

        try {
            // resolve early if DOM is already ready
            // states: loading, interactive, complete
            if (document.readyState === 'interactive' || document.readyState === 'complete') {
                return Promise.resolve()
            }
            else {
                document.addEventListener('DOMContentLoaded', () => resolve(), false)
            }
        } catch (error) {
            console.error(error)
        }

    })

}
