// MAPPED TYPES
type Properties = 'propA' | 'propB'

type MyMappedType<Properties extends string | number | symbol> = {
  [P in Properties]: P
}

type MyNewType = MyMappedType<'propA' | 'propB'>
/*
    type MyNewType = {
      propA: "propA";
      propB: "propB";
    }
*/

// Using generic
type MyMappedTypeGeneric<T> = {
  [P in keyof T]?: T[P]
}

type MyNewTypeWithGeneric = MyMappedTypeGeneric<{ a: 'a'; b: 'b' }>
/*
    type MyNewTypeWithGeneric = {
        a?: 'a';
        b?: 'b';
    }
*/

// PICK
type Pick1<T, Properties extends keyof T> = {
  // Properties extends keyof T allow validate that the Properties is inside the T
  [P in Properties]: T[P]
}

type MyNewType2 = Pick1<{ a: 'a'; b: 'b' }, 'a'>
/*
  type MyNewType2 = {
    a: 'a';
  }
*/

// Record
type Record1<K extends keyof any, T> = {
  [P in K]: T
} & {
  anotherProperty: string | number
}

const someRecord: Record1<string | number, number> = {
  anotherProperty: 4,
}
someRecord.apples = 10
someRecord.orange = 10
someRecord.anotherProperty = 'abd'
someRecord[1] = 1

const someRecordString: Record1<'A' | 'B', number | string> = {
  A: 1,
  B: 'letra b',
  anotherProperty: 'abc',
}
