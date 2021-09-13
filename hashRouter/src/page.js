
/**
 * 
 * Page
 * 
 */
class Page {

    constructor(url) {
        this.url = url;
    }

    async load() {

        try {

            const response = await fetch(this.url);

            if (response.ok) {
                // if (response.status == 200) {
                const contentType = response.headers.get('Content-Type') || '';

                if (contentType.includes('text/html')) {
                    return response
                        .text()
                        .then((res) => {
                            return (this.html = res);
                        })
                        .catch((error) => {
                            // return Promise.reject( new ResponseError('HTML error: ' + error.message) );
                            throw 'HTML error';
                        });
                }
                // return Promise.reject(new ResponseError('Invalid content type: ' + contentType));
                throw 'ResponseError';
            }

            if (response.status == 404) {
                // return Promise.reject(new NotFoundError('Page not found: ' + this.url));
                throw '404 / ' + this.url;
            }

            // return Promise.reject(new HttpError('HTTP error: ' + response.status));
            throw 'HTTP error / ' + response.status;

        } catch (e) {
            // return Promise.reject(new NotFoundError('Page not found: ' + this.url));
            router.show("error");
            // return Promise.reject(new NetworkError(error2.message));
            // console.log('ERROR ' + e);
        }

    } // load

    show(el) {
        el.innerHTML = this.html;
    }

}
