import "promise/polyfill"
import "whatwg-fetch"




// check if dom is ready
const dom = new PromiseDom()
dom.deferred.then(() => launch('starting'))



// launch function
function launch(message: string) {

    // include partials
    _include_partials()



}



// partials
function _include_partials() {
    const partial = new FetchPartial()
    partial.fetchAll()
}