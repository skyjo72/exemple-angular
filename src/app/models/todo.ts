export class Todo {
  name: string;
  done: boolean;

  constructor(name: string) {
    this.name = name;
    this.done = false;
  }
}
