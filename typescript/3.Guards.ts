// Type Predicates Scenario
type DeliminatedDocument = {
  text: string
  seperator: 'comma' | 'tab'
}

type PlaintextDocument = {
  text: string
}

const printDeliminated = (doc: DeliminatedDocument) => {
  /* ... */
}

const printPlaintext = (doc: PlaintextDocument) => {
  /* ... */
}

const printDocumentBroken = (doc: DeliminatedDocument | PlaintextDocument) => {
  /* 
  Argument of type 'DeliminatedDocument | PlaintextDocument' is not assignable to parameter of type 'DeliminatedDocument'.
  Property 'seperator' is missing in type 'PlaintextDocument' but required in type 'DeliminatedDocument'.ts(2345)
  */
  printDeliminated(doc) // WRONG!
}

const printDocument = (doc: DeliminatedDocument | PlaintextDocument) => {
  if ('seperator' in doc) {
    printDeliminated(doc)
  } else {
    printPlaintext(doc)
  }
}

// Type Predicates
export type LineItem = {
  productId: number
  quantity: number
  discounted?: boolean
  unitPrice: number
}

export type FinalInvoice = {
  __typename: 'FinalInvoice'
  insertedAt: string
  invoiceNumber: string
  customerId: number
  approvedBy: number
  lineItems: LineItem[]
}

export type DraftInvoice = {
  __typename: 'DraftInvoice'
  insertedAt: string
  invoiceNumber?: string
  customerId?: number
  approvedBy?: number
  lineItems: LineItem[]
}

export type Invoice = FinalInvoice | DraftInvoice

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
  return invoice.__typename === 'FinalInvoice'
}

export const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
  return invoice.__typename === 'DraftInvoice'
}

const invoice: Invoice = {
  __typename: 'DraftInvoice',
  insertedAt: '2021-05-01',
  lineItems: [],
}

isDraftInvoice(invoice) // true
isFinalInvoice(invoice) // false
