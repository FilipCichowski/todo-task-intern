import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {DialogRef} from "@angular/cdk/dialog";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  date: FormControl = new FormControl(new Date());

  onClickConfirm(): void {
    this.dialogRef.close(this.date.value.toLocaleDateString());
  }

  onClickCancel(): void {
    this.dialogRef.close(null);
  }

  constructor(private dialogRef: MatDialogRef<DialogRef>) { }

  ngOnInit(): void {
  }

}
