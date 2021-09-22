/**
 *
 * usage
 *
 * <link rel="html" href="partial.html" />
 *
 * const partial = new FetchPartial()
 * partial.fetchAll()
 *
 */
class FetchPartial {
    // constructor() {
    //     // this.partialTag = partialTag
    // }
    // Searces dom all html elements for <link rel="html" href="partial.html" />
    // and calls fetcOne()
    fetchAll(tagName) {
        if (tagName === undefined) {
            tagName = 'link';
        }
        const partials = document.getElementsByTagName(tagName);
        for (let i = 0; i < partials.length; i++) {
            if (partials[i].attributes.rel.value === 'html') {
                const url = partials[i].getAttribute('href');
                this.fetc(url, partials[i]);
            }
        }
    }
    makeRequest(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(function (partial) {
                if (partial.status == 200) {
                    return partial.text();
                }
                else {
                    reject('Partial not found');
                }
            }).then(html => {
                resolve(html);
            });
        });
    }
    processRequest(response, _el) {
        return new Promise((resolve, reject) => {
            if (_el.attributes.rel.value === 'html') {
                resolve(_el.outerHTML = response);
            }
            else {
                reject('No tag for html');
            }
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
FetchPartial.tagName = 'link';
//# sourceMappingURL=FetchPartial.js.map