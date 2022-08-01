import {Component, ElementRef, ViewChild} from '@angular/core';
import {TodosService} from "./todos.service";
import {Todo} from "./Todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('primaryInput') primaryInput!: ElementRef;
  todo: Todo[] = [];

  addTodo(): void {
    this.todos.addTodo(this.primaryInput.nativeElement.value, false);
    this.updateTodo();
    this.clearInput();
    this.setFocusOnInput();
  }

  clearInput() {
    this.primaryInput.nativeElement.value = '';
  }

  setFocusOnInput(){
    this.primaryInput.nativeElement.focus();
  }

  updateTodo(): void {
    this.todo = this.todos.getTodos();
  }

  onSelectionChange(e: Todo, i: number):void {
    console.log(e, i);
  }

  constructor(private todos: TodosService) {
  }
}
