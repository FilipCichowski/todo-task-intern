import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { TodoItemComponentComponent } from './todo-item-component/todo-item-component.component';
import { FilterTodoByStatus } from './filter-todo-by-status';
import { TooltipDirective } from './tooltip.directive';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponentComponent,
    FilterTodoByStatus,
    TooltipDirective,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
