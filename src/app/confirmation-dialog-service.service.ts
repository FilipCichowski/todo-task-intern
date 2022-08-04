import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogServiceService {
  private dialogRef!: MatDialogRef<ConfirmationDialogComponent>;
  private data!: boolean;

  constructor(public dialog: MatDialog) { }

  getUserConfirmation(callback: (data: any) => void) {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"

    this.dialogRef.afterClosed().subscribe(d =>{callback(d)});

    //console.log(this.data);
    //return this.data;
  }
}
