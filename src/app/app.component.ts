import {Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {TodosService} from "./todos.service";
import {Todo} from "./Todo";
import {SnackbarService} from "./snackbar.service";
import {DatePickerDialog} from "./date-picker-dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('primaryInput') primaryInput!: ElementRef;

  @ViewChild('notification', {read: ViewContainerRef, static: true})
  private notification!: ViewContainerRef;
  taskName: string = "";

  addTodo(): void {
    this.taskName = this.primaryInput.nativeElement.value;
    if (this.taskName.length >= 5) {
      this.datePickerDialog.renderDataPicker((date) => {
        if (typeof(date) === "string") {
          this.todos.addTodo(this.taskName, false, date);
          this.snackbarService.renderOverlay("Item succesfully added", true);
        }
      });
    } else {
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

  constructor(private todos: TodosService, private snackbarService: SnackbarService, private datePickerDialog: DatePickerDialog) {
  }



}
