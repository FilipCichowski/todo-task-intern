import { Injectable } from '@angular/core';
import {DatePickerComponent} from "./date-picker/date-picker.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class DatePickerDialog {
  renderDataPicker(callback: (data:any) => void) {
    let dialogRef = this.dialog.open(DatePickerComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      callback(result);
    })
  }

  constructor(public dialog: MatDialog) { }
}
