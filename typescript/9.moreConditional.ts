type SomeType = number
type MyConditionalType = SomeType extends string ? string : never

type SomeArgs<T> = T extends boolean ? 'TYPE A' : 'TYPE B'
type TypesMultiples<T> = T extends boolean
  ? 'TYPE A'
  : T extends string
  ? 'TYPE B'
  : T extends number
  ? 'TYPE C'
  : 'TYPE D'

function someFunction<T>(value: T) {
  const someOtherFunction = (someArg: SomeArgs<T>) => {
    const a: 'TYPE A' | 'TYPE B' = someArg
  }

  return someOtherFunction
}

const typeA = someFunction(true) // TYPE A
const typeB = someFunction('') // TYPE B
