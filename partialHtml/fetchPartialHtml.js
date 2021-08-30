'use strict';
/**
 * 
 * fetch html partial from url or from local file
 *  
 */
class Partial {

    constructor() {
        // this.partialTag = partialTag
    }


    /**
     * Runs a fetch request to replace the DOM element
     * @param {file} url The URL to request
     * @param {HTMLElement} $el The element to insert our HTML or error into
     */
    static fetchHtml(HTMLElement) {

        const file = HTMLElement.getAttribute("href");

        return new Promise((resolve, reject) => {
            const headers = new Headers();
            const request = new Request(file, {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default',
            });

            fetch(request).then(function (response) {
                credentials: 'same-origin' // https://github.com/github/fetch
                if (response.status == 200) {
                    return response.text();
                } else {
                    return Promise.reject(response);
                }
            }).then(html => {
                if (HTMLElement.attributes.rel.value === "partial") {
                    HTMLElement.parentNode.innerHTML = html; // OK
                }
                resolve(html);
            }).catch(function (e) {
                HTMLElement.innerHTML = 'Sorry, the data can not be found / 404';
            })
        })
    }

}
