


for( let i = 0; i < 1000000000; i++)
{
// This synchronous script is going to delay parsing of the DOM,
// so the DOMContentLoaded event is going to launch later.
} 






// check if dom is ready
const dom = new PromiseDom()
dom.deferred.then(() => launch('starting'))



// launch function
function launch(message) {

    // include partials
    _include_partials()



}



// partials
function _include_partials() {
    const partial = new FetchPartial()
    partial.fetchAll()
}