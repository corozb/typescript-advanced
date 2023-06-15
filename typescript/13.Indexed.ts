// INDEXED ACCESS TYPES
export interface User {
  id: number
  name: string
  address: {
    street: string
    city: string
    country: string
  }
}

type City = User['address']['city'] // string
type IdOrName = User['id' | 'name'] // number | string

// Type Alias
type UserId = User['id']
type UserAddress = User['address']

function updateAddress(id: UserId, newAddress: UserAddress) {}
