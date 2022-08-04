import {Component, EventEmitter, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {Todo} from "../Todo";
import {Input} from "@angular/core";
import {TodosService} from "../todos.service";
import {SnackbarService} from "../snackbar.service";

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


  onClickDone(): void {
    if (this.todos.getTodos()[this.index].isDone !== true) {
      let today = new Date().toLocaleString('en-US', {timeZone: 'UTC'});
      this.todos.setDoneCreatedOnTodoById(today, this.index);
    } else {
      this.todos.setDoneCreatedOnTodoById("Not finished yet", this.index);
    }
    this.todos.changeCheckedToOpposite(this.index);
    this.snackbarService.renderOverlay("Item state changed", true);
  }

  removeItem(): void {
    this.todos.deleteTodoById(this.index);
    this.snackbarService.renderOverlay("Item successfully removed", true);
  }

  constructor(private todos: TodosService, private snackbarService: SnackbarService) {
  }
}
