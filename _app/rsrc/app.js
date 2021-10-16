//
//
//

// DEBUG
// DELAY
for (let i = 0; i < 1000000000; i++) {
    // launch DOM later.
}



// check if dom is ready
const dom = new PromiseDom()
dom.deferred.then(() => launch('starting'))

// LAUNCH
function launch(message) {
    _include_partials()
    ___observe()
}

// PARTIALS
function _include_partials() {
    const partial = new FetchPartial()
    partial.fetchAll()
}

// OBSERVE
function ___observe() {

    const target = document.getElementById('partials')
    // getElementsByTagName
    // getElementsByClassName
    // const target = document.getElementsByTagName("body")
    // const target = document.getElementsByClassName('partial');

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            console.log('mutations')
            _include_partials()
            // target.style.color = target.innerText;
        });
    });

    const config = {
        subtree: true,
        attributes: true,
        childList: true,
        characterData: true
    };

    observer.observe(target, config);
}




