# fetchHtml
Checs the dom for <link rel="html" href="partial.html" /> tags, and replaces it with a partial html file

How to load the scripts?
Make sure the dom is ready

```html
<script module src="./../readyPromise/readyPromise.src.js"></script>
<script module src="./../fetchHtml/fetchHtml.src.js"></script>
```
partial can be defined with a loader
```html
<div class="partial">
    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" class="anim-rotate">
        <use href="#Circle" />
    </svg>
    <link rel="html" href="./foo.html">
</div>
```

```js
<div class="partial">
    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" class="anim-rotate">
        <use href="#Circle" />
    </svg>
    <link rel="html" href="./foo.html">
</div>
```

check id dom is ready and os window ready, for example for a slideshow or similar
```js
Promise.all([domready, winready]).then(start_application);

function start_application() {
    fetchHtml.all('link');
};
```