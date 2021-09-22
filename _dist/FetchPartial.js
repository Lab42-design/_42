/**
 *
 * usage
 *
 * <link rel="html" href="partial.html" />
 *
 * const partial = new Partial()
 * partial.includeAll()
 *
 */
class FetchPartial {
    constructor() {
        // this.partialTag = partialTag
    }
    // Searces dom all html elements for <link rel="html" href="partial.html" />
    includeAll(element) {
        if (element === undefined) {
            element = 'link';
        }
        const partial = document.getElementsByTagName(element);
        for (let i = 0; i < partial.length; i++) {
            if (partial[i].attributes.rel.value === "html") {
                const file = partial[i].getAttribute("href");
                this.include(file, partial[i]);
            }
        }
    }
    makeRequest(file) {
        return new Promise((resolve, reject) => {
            fetch(file).then(function (partial) {
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
            if (_el.attributes.rel.value === "html") {
                resolve(_el.outerHTML = response);
            }
            else {
                reject('No tag for html');
            }
        });
    }
    async include(url, _el) {
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