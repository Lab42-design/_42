'use strict';
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
class Partial {

    constructor() { }

    // Searces dom all html elements for <link rel="html" href="partial.html" />
    includeAll(element) {

        if (element === undefined) {
            element = 'link'
        }

        const _partial = document.getElementsByTagName(element)

        for (let i = 0; i < _partial.length; i++) {
            if (_partial[i].attributes.rel.value === "html") {
                const file = _partial[i].getAttribute("href")
                this.include(file, _partial[i])
            }
        }
    }

    makeRequest(location) {
        return new Promise((resolve, reject) => {
            fetch(location).then(function (_partial) {
                if (_partial.status == 200) {
                    return _partial.text()
                } else {
                    reject('Partial not found')
                }
            }).then(html => {
                resolve(html)
            })
        })
    }

    processRequest(response, _el) {
        return new Promise((resolve, reject) => {
            // resolve(_el.innerHTML = response)
            if (_el.attributes.rel.value === "html") {
                resolve(_el.outerHTML = response)
            } else {
                reject('No tag for html')
            }
        })
    }

    async include(url, _el) {
        try {
            const response = await this.makeRequest(url)
            const processedResponse = await this.processRequest(response, _el)
        } catch (error) {
            console.error(error)
        }
    }

}