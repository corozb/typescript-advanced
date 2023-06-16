interface Users {
  id: number
  name: string
  address: {
    street: string
    city: string
    country: string
  }
}

type UserProperties = keyof Users // id | name | address

let userProperty: UserProperties = 'id'
let someString: string = userProperty
