//
//
//
console.clear()



// DEBUG
// DELAY
for (let i = 0; i < 100000000; i++) {
    // launch DOM later.
}


// UTILITY FUNCTIONS
function print(...message) {

    // let mymsg = message.replace(/,\s*$/, "");

    console.log(`%c${message}`, 'color: indigo')
}



// CHECK DOM
const dom = new PromiseDom()
dom.ready.then(() => ___launch('9 8 7 6 5 4 3 2 1 0'))



// LAUNCH
function ___launch(message) {
    print('__________________________________')
    print(message, ' ___launching')
    print('_____________•˙.__________________')

    // console.log('%cHello World!', 'color: indigo')



    // 01 html partials
    include_html_partials()

    // 99 observe dom for changes if any
    // ___observe('partials')

}




// PARTIALS
function include_html_partials() {
    const partial = new FetchPartial()
    partial.fetchAll()
}

// OBSERVE
function ___observe(_el) {

    // const target = document.getElementById(_el)
    const target = document.body
    // getElementsByTagName
    // getElementsByClassName
    // const target = document.getElementsByTagName("body")
    // const target = document.getElementsByClassName('partial');

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            console.log('mutations')
            include_html_partials()
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




