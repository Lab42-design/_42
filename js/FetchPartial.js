/**
 *
 * usage
 *
 * <link rel="html" href="partial.html" />
 *
 * const partial = new FetchPartial()
 * partial.fetchAll()
 *
 * or use it with a wrapper
 *  <div class="partial">
 *       <link rel="html" href="./baz.html" />
 *  </div>
 *
 */
class FetchPartial {
    // static readonly url: string
    // static readonly tagName: string = 'link'
    // static readonly _el: HTMLCollectionOf<any>
    // constructor() {
    //     // this.partialTag = partialTag
    // }
    // Searces dom all partial tags: <link rel="html" href="partial.html" />
    // checks for rel="html" and href="partial.html" values
    // and calls fetcOne()
    async fetchAll(tagName) {
        if (tagName === undefined) {
            tagName = 'link';
        }
        const partials = document.getElementsByTagName(tagName);
        // return new Promise((resolve, reject) => {
        // try {
        // } catch (error) {
        //     console.error(error)
        // }
        for (let i = 0; i < partials.length; i++) {
            if (partials[i].attributes.rel.value === 'html') {
                const url = partials[i].getAttribute('href');
                this.fetc(url, partials[i]);
            }
            else {
                // reject('Tag ' + partials[i] + ' is not in the DOM')
            }
        }
        // })
        // for (let i: number = 0; i < partials.length; i++) {
        //     if (partials[i].attributes.rel.value === 'html') {
        //         const url = partials[i].getAttribute('href')
        //         this.fetc(url, partials[i])
        //     }
        //     // else {
        //     //     Promise.reject('Tag ' + partials[i] + ' is not in the DOM')
        //     // }
        // }
    }
    makeRequest(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(function (partial) {
                if (partial.status == 200) {
                    return partial.text();
                }
                else {
                    reject('Partial ' + url + 'not found');
                }
            }).then(html => {
                resolve(html);
            });
        });
    }
    processRequest(response, _el) {
        return new Promise((resolve, reject) => {
            // typeof _el.parentNode.attributes.class === 'undefined'
            // if (_el.parentNode.attributes.class === 'partial') {
            //     resolve(_el.parentNode.parentNode.innerHTML = response)
            // } else {
            resolve(_el.outerHTML = response);
            // }
        });
    }
    // _el: HTMLCollectionOf<any>
    async fetc(url, _el) {
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
//# sourceMappingURL=FetchPartial.js.map