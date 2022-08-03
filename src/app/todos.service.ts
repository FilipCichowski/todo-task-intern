import {Injectable} from '@angular/core';
import {Todo} from "./Todo";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[] = [];

  addTodo(name: string, isDone: boolean): void {
    this.todos.unshift({
      name: name,
      isDone: isDone
    });
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  changeCheckedToOpposite(index: number): void {
    this.todos[index].isDone = !this.todos[index].isDone;
  }

  deleteTodoById(index: number): void {
    this.todos.splice(index, 1);
  }

  setDoneCreatedOnTodoById(date: string, index: number): void {
    this.todos[index].doneCreated = date;
  }

  constructor() {
  }
}
