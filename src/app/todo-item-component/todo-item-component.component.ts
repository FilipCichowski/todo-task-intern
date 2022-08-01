import { Component, OnInit } from '@angular/core';
import {Todo} from "../Todo";
import {Input} from "@angular/core";
import {TodosService} from "../todos.service";

@Component({
  selector: 'app-todo-item-component',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.css']
})
export class TodoItemComponentComponent implements OnInit {
  @Input()
  item!: Todo;
  @Input()
  index!: number;

  imageBinUrl: string = "/assets/trash-bin.png";

  onClickDone(): void {
    this.todos.changeCheckedToOpposite(this.index);
  }

  removeItem(): void {
    this.todos.deleteTodoById(this.index);
  }

  constructor(private todos: TodosService) { }

  ngOnInit(): void {
  }

}
