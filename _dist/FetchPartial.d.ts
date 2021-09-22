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
declare class FetchPartial {
    static readonly url: string;
    static readonly tagName: string;
    static readonly _el: HTMLCollectionOf<any>;
    fetchAll(tagName?: any): void;
    makeRequest(url: string): Promise<string>;
    processRequest(response: any, _el: any): Promise<void>;
    fetc(url: string, _el: HTMLCollectionOf<any>): Promise<void>;
}
