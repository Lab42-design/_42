#### Promise wrapper for DOMContentLoaded

Returns a Promise that resolves when the DOM is ready
Prevents event duplication. 

Respond to the DOM being ready in different JS modules without binding multiple DOMContentLoaded handlers.

```js
// dom ready
domready.then(document_ready);
 
// window ready
winready.then(window_ready);

// both
Promise.all([domready, winready]).then(start_application);

// or
domready.then(msg => {
    // DOM is ready launch the app
    start_application('OK, document is ready');
    const timing = 3000;
}, err => {
    console.log(err);
});

/////
winready.then(msg => {
    // window is ready, do something
    const timing = 3000;
}, err => {
    console.log(err);
});
```

```js

domready.then(document_ready);

winready.then(window_ready);

Promise.all([domready, winready]).then(start_application);

function start_application() {
    console.log('documentResolve AND windowResolve');
    console.log('OK');
};

function window_ready() {
    console.log('windowResolve');
    console.log('OK');
};

function document_ready() {
    console.log('documentResolve');
    console.log('OK');
};
```

source script taken from:
Taken from:
https://github.com/callmecavs/one-ready/blob/master/test/manual.html

