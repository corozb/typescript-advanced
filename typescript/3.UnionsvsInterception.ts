// UNION
type HasName = { name: string }
type HasAge = { age: number }

type HasNameOrAge = HasName | HasAge

const a: HasNameOrAge = { name: 'cristian' }
const b: HasNameOrAge = { age: 39 }

const c: HasNameOrAge = {
  name: 'cristian',
  age: 39,
}

// INTERCEPTION
type HasNameAndAge = HasAge & HasName
const d: HasNameAndAge = {
  name: 'cristian',
  age: 39,
}
