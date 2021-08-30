'use strict';
/**
 * 
 * Returns a Promise that resolves when the DOM is ready
 * 
 */
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

    if (readyState === 'complete') {

        document.removeEventListener("load", resolve);
        return resolve()

    }

    window.addEventListener('load', resolve);
})

const winready = windowReady();