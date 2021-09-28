'use strict';
/**
 * 
 * Returns a Promise that resolves when the DOM is ready
 * 
 */

 ??????
const deferred = new Promise(function (resolve) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        const deferred = new Promise(function (resolve) {
            console.log('_________deferred check')
            resolve('ready');
        }
    else {
        document.addEventListener('DOMContentLoaded', (start) => resolve());
    }
});

export default (fn) => deferred.then(fn);

console.log('Module assigned to window.OneReady. Logged below:')
console.log(deferred)

deferred.then(() => console.log('One ready.'))
deferred.then(() => console.log('Two ready.'))





    ??????


const documentReady = () => new Promise(resolve => {

        const { readyState } = document

        // resolve early if DOM is already ready
        // document ready states: loading, interactive, complete
        if (readyState === 'interactive' || readyState === 'complete') {

            document.removeEventListener("DOMContentLoaded", resolve);
            return resolve()

        }

        // otherwise, resolve when ready
        document.addEventListener('DOMContentLoaded', resolve)
    })

// export the Promise, not the generator
const domready = documentReady()
// export default singleton




const windowReady = () => new Promise(resolve => {

    const { readyState } = document

    // resolve early
    if (readyState === 'complete') {
        window.removeEventListener("load", resolve);
        return resolve()
    }
    // otherwise, resolve when ready
    window.addEventListener('load', resolve);
})

const winready = windowReady();