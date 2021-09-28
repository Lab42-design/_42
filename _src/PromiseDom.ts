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
    deferred = new Promise(function (resolve, reject) {
        try {
            if (document.readyState === 'interactive' || document.readyState === 'complete') {
                Promise.resolve()
            }
            else {
                document.addEventListener('DOMContentLoaded', () => resolve('resolved'), false)
            }
        } catch (error) {
            console.log(error)
        }
    })
}