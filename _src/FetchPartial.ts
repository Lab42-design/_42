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

    // static readonly url: string
    // static readonly tagName: string = 'link'
    // static readonly _el: HTMLCollectionOf<any>

    // constructor() {
    //     // this.partialTag = partialTag
    // }

    // Searces dom all html elements for <link rel="html" href="partial.html" />
    // and calls fetcOne()
    fetchAll(tagName?): void {

        if (tagName === undefined) {
            tagName = 'link'
        }

        const partials = document.getElementsByTagName(tagName)

        for (let i: number = 0; i < partials.length; i++) {
            if (partials[i].attributes.rel.value === 'html') {
                const url = partials[i].getAttribute('href')
                this.fetc(url, partials[i])
            }
        }
    }

    makeRequest(url: string): Promise<string> {
        return new Promise((resolve, reject) => {
            fetch(url).then(function (partial) {
                if (partial.status == 200) {
                    return partial.text()
                } else {
                    reject('Partial not found')
                }
            }).then(html => {
                resolve(html)
            })
        })
    }

    processRequest(response, _el): Promise<void> {
        return new Promise((resolve, reject) => {
            if (_el.attributes.rel.value === 'html') {
                resolve(_el.outerHTML = response)
            } else {
                reject('No tag for html')
            }
        })
    }

    // _el: HTMLCollectionOf<any>
    async fetc(url: string, _el: HTMLCollectionOf<any>): Promise<void> {
        try {
            const response = await this.makeRequest(url)
            const processedResponse: void = await this.processRequest(response, _el)
            return processedResponse
        } catch (error) {
            console.error(error)
        }
    }

}

