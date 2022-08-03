import {Component, EventEmitter, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {Todo} from "../Todo";
import {Input} from "@angular/core";
import {TodosService} from "../todos.service";
import {NotificationComponent} from "../notification/notification.component";

@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.css']
})
export class TodoItemComponentComponent {
  @Input()
  item!: Todo;
  @Input()
  index!: number;

  @Output() newTodoEvent = new EventEmitter<string>();

  onClickDone(): void {
    if (this.todos.getTodos()[this.index].isDone !== true) {
      let today = new Date().toLocaleString('en-US', {timeZone: 'UTC'});
      this.todos.setDoneCreatedOnTodoById(today, this.index);
    }
    this.newTodoEvent.emit("Item state changed");
    this.todos.changeCheckedToOpposite(this.index);
  }

  removeItem(): void {
    this.newTodoEvent.emit("Item deleted");
    this.todos.deleteTodoById(this.index);
  }

  constructor(private todos: TodosService) {
  }
}
