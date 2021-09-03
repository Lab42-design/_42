'use strict';
/**
 * 
 * fetch html partial from url or from local file
 *  
 */
class fetchHtml {

    constructor() {}

    /**
     * Runs a fetch request to replace the DOM element
     */
    static partial(HTMLElement):Promise<string> {

        const file:string = HTMLElement.getAttribute("href");

        return new Promise<string>((resolve, reject) => {
            const headers:Headers = new Headers();
            const request:Request = new Request(file, {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default',
            });

            fetch(request).then(function (response):Promise<string> {
                credentials: 'same-origin'
                if (response.status == 200) {
                    return response.text();
                } else {
                    return Promise.reject(response) ;
                }
            }).then(html => {
                if (HTMLElement.attributes.rel.value === "html") {
                    HTMLElement.parentNode.innerHTML = html;
                }
                resolve(html);
            }).catch(function (e) {
                HTMLElement.parentNode.innerHTML = 'Sorry, the data can not be found / 404';
            })
        })
    }

}
