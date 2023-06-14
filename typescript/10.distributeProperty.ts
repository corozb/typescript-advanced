// DISTRIBUTE PROPERTY
type StringOrNot<T> = T extends string ? string : never

type AUnion = string | boolean | never

// type Exclude<T, U> = T extends U ? never : T;
type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'> // 'c'

/*
 'a' extends 'a' | 'b' ? never : 'a' => never
 'b' extends 'a' | 'b' ? never : 'b' => never
 'c' extends 'a' | 'b' ? never : 'c' => 'c'
 */

type MyType<T> = T extends string | number ? T : never
type MyResult = MyType<string | number | boolean> // string | boolean

// comparing function
type MyTypeFn<T> = (() => T) extends () => string | number ? T : never
type MyResultFn = MyTypeFn<string | number | boolean> // never

// INFER
type InferSomething<T> = T extends infer U ? U : any
type Inferred = InferSomething<'I am a string'>

type InferSomethingTwo<T> = T extends { a: infer A; b: number } ? A : any
type InferredTwo = InferSomethingTwo<{ a: 'Hello'; b: 1 }>

type InferSomethingThree<T> = T extends { a: infer A; b: infer B } ? A & B : any
type InferredThree = InferSomethingThree<{
  a: { someProp: 1 }
  b: { someProp: 'B' }
}>

// Return type
type MyFuncReturnValue = ReturnType<() => true> // true
