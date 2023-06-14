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
