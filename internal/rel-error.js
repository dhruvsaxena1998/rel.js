export class RELError extends Error {
    constructor(message, options = {}) {
        super(message, options.cause ? { cause: options.cause } : undefined);
        this.name = 'RELError';
        this.expression = options.expression;
        this.location = options.location;
    }
}
