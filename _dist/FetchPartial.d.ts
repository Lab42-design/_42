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
declare class FetchPartial {
    i: number;
    element: string;
    file: string;
    url: string;
    constructor();
    includeAll(element: any): void;
    makeRequest(file: any): Promise<unknown>;
    processRequest(response: any, _el: any): Promise<unknown>;
    include(url: any, _el: any): Promise<unknown>;
}
