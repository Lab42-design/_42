/**
 *
 * Returns a Promise that resolves when the DOM is ready
 *
 */
declare let domResolve: any;
declare const domReady: Promise<unknown>;
declare class PromiseDom {
    constructor();
    dom(): void;
    documentReady(): Promise<void>;
}
