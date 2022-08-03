import {Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {TodosService} from "./todos.service";
import {Todo} from "./Todo";
import {NotificationComponent} from "./notification/notification.component";

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
      this.renderNotification("Item succesfully added", true)
    } else {
      this.renderNotification("Item name should contain at least 5 characters", false);
      console.log("input invalid");
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

  displayNotification(notification: string) {
    console.log(notification);
    this.renderNotification(notification, true);
  }

  renderNotification(message: string, isSuccesful: boolean) {
    this.notification.clear();
    const component = this.notification.createComponent(NotificationComponent);
    component.instance.isSuccesful = isSuccesful;
    component.instance.message = message;
  }

  constructor(private todos: TodosService) {
  }
}
