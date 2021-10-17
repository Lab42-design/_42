/**
 *
 * Searces dom all partial tags: <link rel="html" href="partial.html" />
 * checks for rel="html" and href="partial.html" values
 *
 * usage
 *
 * html
 *
 * <link rel="html" href="partial.html" />
 *
 * or use it with a wrapper
 * <div class="partial">
 *     <link rel="html" href="./baz.html" />
 * </div>
 *
 * js
 *
 * then check if dom ise ready and..
 *
 * const partial = new FetchPartial()
 * partial.fetchAll()
 *
 */
class FetchPartial {
    constructor() {
        console.log('_42 / FetchPartial');
    }
    async fetchAll(_selector) {
        if (_selector === undefined) {
            _selector = 'link[rel="html"]';
        }
        // const partials = document.getElementsByTagName(tagName)
        const partials = document.querySelectorAll(_selector);
        // console.log('______PARTIALS')
        // console.log(partials)
        // console.log(partialsTwo)
        // console.log('______PARTIALS')
        for (let i = 0; i < partials.length; i++) {
            // if (partials[i].hasAttribute('rel' && 'href')) {
            //     let attribute = partials[i].getAttribute('rel')
            //     if (attribute === 'html') {
            //         const url = partials[i].getAttribute('href')
            //         this.fetch(url, partials[i])
            //     }
            // }
            // if (partials[i].attributes.rel.value === 'html') {
            const url = partials[i].getAttribute('href');
            this.fetch(url, partials[i]);
            // }
        }
    }
    makeRequest(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(function (partial) {
                if (partial.status == 200) {
                    return partial.text();
                }
                else {
                    reject('Partial ' + url + ' not found');
                }
            }).then(html => {
                resolve(html);
            });
        });
    }
    // check if parent element is a loader for the partial
    processRequest(response, _el) {
        return new Promise((resolve, reject) => {
            if (_el.parentNode && _el.parentNode.classList && _el.parentNode.classList.contains('partial')) {
                resolve(_el.parentNode.innerHTML = response);
            }
            else {
                resolve(_el.outerHTML = response);
            }
            // if (_el.parentNode.classList && _el.parentNode.classList.contains('partial')) {
            //     resolve(_el.parentNode.innerHTML = response)
            // } else {
            //     resolve(_el.outerHTML = response)
            // }
        });
    }
    // HTMLCollectionOf<any>
    async fetch(url, _el) {
        try {
            const response = await this.makeRequest(url);
            const processedResponse = await this.processRequest(response, _el);
            return processedResponse;
        }
        catch (error) {
            console.error(error);
        }
    }
}
