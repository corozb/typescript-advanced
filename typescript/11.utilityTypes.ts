// PARTIAL
// Allow become all the properties optionals

import { removeArgumentsFromDocument } from '@apollo/client/utilities'

interface Starship {
  name: string
  enableHyperjump: boolean
}

const updateStarship = (id: number, starship: Partial<Starship>) => {}

updateStarship(1, {
  name: 'Explorer',
})

// REQUIRED
// Become the optional property in required
interface A {
  x?: number
  y?: number
}

type Require = Required<A>
/*
      type Require = {
          x: number;
          y: number;
      }
*/

// READONLY
// The propeties can be overwritten
type JustRead = Readonly<A>
/*
    type JustRead = {
        readonly x?: number | undefined;
        readonly y?: number | undefined;
    }
*/

// RECORD<T, K>
const starships: Record<string, Starship> = {
  Explorer1: {
    name: 'Explorer1',
    enableHyperjump: true,
  },
  Explorer2: {
    name: 'Explorer2',
    enableHyperjump: false,
  },
}

// PICK<T, K>
// Select just specific properties
interface Az {
  x: number
  y: number
  z: number
}

type picked = Pick<Az, 'x' | 'z'> /* type picked = {
        x: number;
        z: number;
      } */

type StarshipNameOnly = Pick<Starship, 'name'> // type StarshipNameOnly = { name: string }

// OMIT
// The opposite of pick
type StarshipWithoutName = Omit<Starship, 'name'> // type StarshipWithoutName = {   enableHyperjump: boolean }

//EXCLUDE
type B = string | string[] | undefined
type Excluded = Exclude<B, undefined> // string | string[]

type AvailableDrinks = 'Coffe' | 'Tea' | 'Orange Juice' | 'Lemonade'
let JohnsDrinks: AvailableDrinks = 'Coffe'

type DrinksJanesDoesntLike = 'Coffe' | 'Orange Juice'
let JanesDrink: Exclude<AvailableDrinks, DrinksJanesDoesntLike> // let JanesDrink: "Tea" | "Lemonade"

// EXTRACT
// The opossite of Exclude
type DrinksJanesLike = 'Tea' | 'Mohito' | 'Lemonade'
let JanesDrinks: Extract<AvailableDrinks, DrinksJanesLike>

// NONNULLABLE<T>
type N = string | string[] | null | undefined
type NoNullablesType = NonNullable<N> // type NoNullablesType = string | string[]

interface StarshipProperties {
  color?: 'blue' | 'red' | 'green'
}

function paintStarship(id: number, color: NonNullable<StarshipProperties['color']>) {
  return {
    id,
    color,
  }
}
paintStarship(1, 'blue')

// RETURN TYPE
type PainStarshipReturn = ReturnType<typeof paintStarship>
/*
    type PainStarshipReturn = {
        id: number;
        color: NonNullable<"blue" | "red" | "green" | undefined>;
    }
*/

// INSTANCETYPE<T>
type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance

function Deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean
    delete() {}
  }
}

class Car {
  constructor(public name: string) {}
}

class Users {
  constructor(public name: string) {}
}

const DeletableCar = Deletable<Car>
const DeletableUsers = Deletable<Users>

type DeletableUserInstance = InstanceType<typeof DeletableUsers>
type DeletableCarInstance = InstanceType<typeof DeletableCar>

class Profile {
  user: DeletableUserInstance
  car: DeletableCarInstance
}

const profile = new Profile()
profile.user = new DeletableUsers('cristian')
profile.car = new DeletableCar('ferrari')

// THISTYPE<T>
interface MyObject {
  sayHello(): void
}

interface MyObjectThis {
  helloWorld(): string
}

const myObject: MyObject & ThisType<MyObjectThis> = {
  sayHello() {
    return this.helloWorld()
  },
}

myObject.sayHello = myObject.sayHello.bind({
  helloWorld() {
    return 'Hello World'
  },
})

console.log(myObject.sayHello()) // Hello World
