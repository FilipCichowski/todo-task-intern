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

  addTodo(): void {
    this.todos.addTodo(this.primaryInput.nativeElement.value, false);
    this.clearInput();
    this.setFocusOnInput();
  }

  getTodos(): Todo[] {
    return [...this.todos.getTodos()];
  }

  clearInput() {
    this.primaryInput.nativeElement.value = '';
  }

  setFocusOnInput(){
    this.primaryInput.nativeElement.focus();
  }

  constructor(private todos: TodosService) {
  }
}
