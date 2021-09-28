'use strict';
/**
 *
 * fetch html partial from url or from local file
 *
 */
var fetchHtml = /** @class */ (function () {
    function fetchHtml() {
    }
    /**
     * Runs a fetch request to replace the DOM element
     */
    fetchHtml.partial = function (HTMLElement) {
        var file = HTMLElement.getAttribute("href");
        return new Promise(function (resolve, reject) {
            var headers = new Headers();
            var request = new Request(file, {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default'
            });
            fetch(request).then(function (response) {
                credentials: 'same-origin';
                if (response.status == 200) {
                    return response.text();
                }
                else {
                    return Promise.reject(response);
                }
            }).then(function (html) {
                if (HTMLElement.attributes.rel.value === "html") {
                    HTMLElement.parentNode.innerHTML = html;
                }
                resolve(html);
            })["catch"](function (e) {
                throw 'HTTP error / ' + response.status;
                HTMLElement.parentNode.innerHTML = 'Sorry, the data can not be found / 404';
            });
        });
    };
    return fetchHtml;
}());
