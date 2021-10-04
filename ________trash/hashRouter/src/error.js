/**
 * 
 * Error
 * 
 */
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
        this.code = 404;
        router.show("error");
    }
}