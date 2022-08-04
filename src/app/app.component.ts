import {Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {TodosService} from "./todos.service";
import {Todo} from "./Todo";
import {SnackbarService} from "./snackbar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('primaryInput') primaryInput!: ElementRef;

  @ViewChild('notification', {read: ViewContainerRef, static: true})
  private notification!: ViewContainerRef;

  addTodo(): void {
    //console.log(typeof (this.primaryInput.nativeElement.value));
    if (this.primaryInput.nativeElement.value.length >= 5) {
      console.log("input valid");
      this.todos.addTodo(this.primaryInput.nativeElement.value, false);
      this.snackbarService.renderOverlay("Item succesfully added", true);
    } else {
      console.log("input invalid");
      this.snackbarService.renderOverlay("Item's name is too short", false);
    }
    this.clearInput();
    this.setFocusOnInput();
  }

  getTodos(): Todo[] {
    return [...this.todos.getTodos()];
  }

  clearInput() {
    this.primaryInput.nativeElement.value = '';
  }

  setFocusOnInput() {
    this.primaryInput.nativeElement.focus();
  }

  constructor(private todos: TodosService, private snackbarService: SnackbarService) {
  }



}
