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
 * partial.fetchAll( 'link[rel="html"]' )
 * or
 * const partial = new FetchPartial()
 * partial.fetchAll()
 *
 * partial.fetchAll( 'link[rel="html"]' )
 *
 */
class FetchOne {
    constructor() {
        console.log('_42 / FetchPartial');
    }
    async fetchPartial(_el) {
        // if (_selector === undefined) {
        //     _selector = 'link[rel="html"]'
        // }
        if (_el) {
            const url = _el.getAttribute('href');
            this.fetch(url, _el);
        }
        // const partials: NodeListOf<any> = document.querySelectorAll(_selector)
        // for (let i: number = 0; i < partials.length; i++) {
        //     const url = partials[i].getAttribute('href')
        //     this.fetch(url, partials[i])
        // }
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
    processRequest(response, _el) {
        return new Promise((resolve, reject) => {
            if (_el.parentNode && _el.parentNode.classList.contains('partial')) {
                resolve(_el.parentNode.innerHTML = response);
            }
            else {
                resolve(_el.outerHTML = response);
            }
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
