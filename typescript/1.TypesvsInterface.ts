// INTERFACE
interface Animal {
  name: string
}

interface Cat extends Animal {
  meow(): void
}

interface Book {
  title: string
  url: string
  pages: number
}

// TYPES
type Animals = {
  name: string
}

type Cats = Animals & {
  meow(): void
}

type Course = {
  title: string
  url: string
  pages: number
}

// EXTENDS
type User = {
  profile: string
}

type Learner = User & { resgisteredCourses: number }

// a type can extends an interface and viceversa
type ProfileAnimal = Animal & { profile: string }

// UNION (just types)
type LearningResource = Course | Book

// TUPLE (just types)
type CourseLearners = [Course, number]

// DECLARATION MERGING
interface Teacher {
  name: string
}

interface Teacher {
  age: number
}

const teacher: Teacher = {
  name: 'Cristian',
  age: 39,
}
