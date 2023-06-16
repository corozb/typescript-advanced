// GENERICS
export enum TaskType {
  feature = 'feature',
  bug = 'bug',
}

type Task<T = TaskType> = {
  name: string
  type: T
}

const whatever: Task = { name: 'Single Sign On', type: TaskType.feature }
whatever.type = TaskType.bug

type FeatureTask = Task<TaskType.feature>

const feature: FeatureTask = { name: 'Single Sign On', type: TaskType.feature }
feature.type = TaskType.bug // Type 'TaskType.bug' is not assignable to type 'TaskType.feature'.

const invalid: FeatureTask = { name: 'Single Sign On', type: TaskType.bug } // Type 'TaskType.bug' is not assignable to type 'TaskType.feature'

// Another example
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let user = { name: 'cristian', age: 39 }
const name = getProperty(user, 'name')
const age = getProperty(user, 'age')
