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
        // this.partialTag = partialTag
        console.log('_________________FetchPartial')
    }

    async fetchAll(tagName?) {

        if (tagName === undefined) {
            tagName = 'link'
        }

        const partials = document.getElementsByTagName(tagName)

        for (let i: number = 0; i < partials.length; i++) {
            if (partials[i].attributes.rel.value === 'html') {
                const url = partials[i].getAttribute('href')
                this.fetch(url, partials[i])
            }
        }
    }

    makeRequest(url: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            fetch(url).then(function (partial) {
                if (partial.status == 200) {
                    return partial.text()
                } else {
                    reject('Partial ' + url + 'not found')
                }
            }).then(html => {
                resolve(html)
            })
        })
    }

    // check if parent element is a loader for the partial
    processRequest(response, _el): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (_el.parentNode.classList && _el.parentNode.classList.contains('partial')) {
                resolve(_el.parentNode.innerHTML = response)
            } else {
                resolve(_el.outerHTML = response)
            }
        })
    }

    async fetch(url: string, _el: HTMLCollectionOf<any>): Promise<void> {
        try {
            const response = await this.makeRequest(url)
            const processedResponse: void = await this.processRequest(response, _el)
            return processedResponse
        } catch (error) {
            console.error(error)
        }
    }

}

