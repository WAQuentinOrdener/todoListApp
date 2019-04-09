export class Task {
  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.state = false;
  }
  id: number;
  title: string;
  description: string;
  state: boolean;
}

export const tasks: Task[] = [
  {
    id: 0,
    title: 'Task 1',
    description: 'Task description',
    state: false
  },
  {
    id: 1,
    title: 'Task 2',
    description: 'Task description',
    state: true
  },
  {
    id: 2,
    title: 'Task 3',
    description: 'Task description',
    state: false
  },
  {
    id: 3,
    title: 'Task 4',
    description: 'Task description',
    state: true
  },
  {
    id: 4,
    title: 'Task 5',
    description: 'Task description',
    state: false
  }
];
