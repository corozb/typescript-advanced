// CONDITIONAL TYPES
type Diesel = {
  type: 'petroleum' | 'bio' | 'synthetic'
}

type Gasoline = {
  type: 'hybrid' | 'conventional'
}

type Bus = {
  engine: Diesel
}

type Car = {
  engine: Gasoline
}

type Engine<T> = T extends { engine: unknown } ? T['engine'] : never

type BusEngine = Engine<Bus>

const busEngine: BusEngine = {
  type: 'bio',
}

const carEngine: Engine<Car> = {
  type: 'hybrid',
}

const invalid: Engine<Car> = {
  type: 'bio', // Type '"bio"' is not assignable to type '"hybrid" | "conventional"'
}

type Bicycle = {
  power: 'limbs'
}

type NoEngine = Engine<Bicycle>

const noEngine: NoEngine = { type: 'limbs' } // Type '{ type: string; }' is not assignable to type 'never'
console.log(noEngine)

// SECOND
// Another example, useful when you getting data from a thirt service, like an api, and you have a generated type without those aliases and you can dig down and get different components.

// When you are using GraphQL and have different queries and one part of your app you are using a handful of field of a resource versus another one.
enum Priority {
  mustHave = 'Must Have',
  shouldHave = 'Should Have',
  couldHave = 'Could Have',
  wontHave = "Won't Have",
}

const backlog = {
  releases: [
    {
      name: 'Sprint 1',
      epics: [
        {
          name: 'Account Management',
          tasks: [
            { name: 'Single Sign On', priority: Priority.mustHave },
            { name: 'Email Notifications', priority: Priority.mustHave },
          ],
        },
      ],
    },
  ],
}

type Unarray<T> = T extends Array<infer U> ? U : T

type Release = Unarray<(typeof backlog)['releases']>

type Epic = Unarray<Release['epics']>

export const releases: Release = {
  name: 'Sprint 1',
  epics: [
    {
      name: 'Account Management',
      tasks: [
        { name: 'Single Sign On', priority: Priority.mustHave },
        { name: 'Email Notifications', priority: Priority.mustHave },
      ],
    },
  ],
}

export const epic: Epic = {
  name: 'Account Management',
  tasks: [
    { name: 'Single Sign On', priority: Priority.mustHave },
    { name: 'Email Notifications', priority: Priority.mustHave },
  ],
}
