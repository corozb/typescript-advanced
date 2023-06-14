"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDraftInvoice = exports.isFinalInvoice = void 0;
const printDeliminated = (doc) => {
    /* ... */
};
const printPlaintext = (doc) => {
    /* ... */
};
const printDocumentBroken = (doc) => {
    /*
    Argument of type 'DeliminatedDocument | PlaintextDocument' is not assignable to parameter of type 'DeliminatedDocument'.
    Property 'seperator' is missing in type 'PlaintextDocument' but required in type 'DeliminatedDocument'.ts(2345)
    */
    printDeliminated(doc); // WRONG!
};
const printDocument = (doc) => {
    if ('seperator' in doc) {
        printDeliminated(doc);
    }
    else {
        printPlaintext(doc);
    }
};
const isFinalInvoice = (invoice) => {
    return invoice.__typename === 'FinalInvoice';
};
exports.isFinalInvoice = isFinalInvoice;
const isDraftInvoice = (invoice) => {
    return invoice.__typename === 'DraftInvoice';
};
exports.isDraftInvoice = isDraftInvoice;
const invoice = {
    __typename: 'DraftInvoice',
    insertedAt: '2021-05-01',
    lineItems: [],
};
(0, exports.isDraftInvoice)(invoice); // true
(0, exports.isFinalInvoice)(invoice); // false
