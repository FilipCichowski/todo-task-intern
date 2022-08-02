import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "./Todo";

@Pipe({
  name: 'filterTodoByStatus'
})
export class FilterTodoByStatus implements PipeTransform {
  transform(input: Todo[], selectedOnly: boolean): Todo[] {
    //return input.filter(e => e.isDone === selectedOnly);
    return input;
  }
}
