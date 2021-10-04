const dom = new PromiseDom()
dom.deferred.then(() => launch('starting'))

function launch(message) {
    // include partials
    const partial = new FetchPartial()
    partial.fetchAll()
}