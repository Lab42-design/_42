'use strict';
/**
 * 
 * fetch html partial from url or from local file
 *  
 */
class fetchHtml {

    constructor() {
        // this.partialTag = partialTag
    }

    /**
     * Searces all html elements for <link rel="html" href="partial.html" />
     */
    static all(el) {

        const partialTags = document.getElementsByTagName(el);

        for (let i = 0; i < partialTags.length; i++) {
            this.partial(partialTags[i]);
        }

    }

    static oneById(id) {
        const partialTag = document.getElementById(id);
        this.partial(partialTag);
    }

    // static zorro(el) {
    //     const partialTags = document.getElementsByTagName(el);
    //     for (let i = 0; i < partialTags.length; i++) {
    //         this.partial(partialTags[i]);
    //     }
    // }
    // console.log("___ i " + i);
    // console.log(i + " " + partialTags);

    /**
     * Runs a fetch request to replace the DOM element
     */
    static async partial(HTMLElement) {

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
                if (HTMLElement.attributes.rel.value === "html") {
                    HTMLElement.parentNode.innerHTML = html;
                }
                resolve(html);
            }).catch(function (e) {
                HTMLElement.parentNode.innerHTML = 'Sorry, an error occured / 404';
            })
        })
    }

}
