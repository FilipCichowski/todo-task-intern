import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

interface SnackBar {
  message: string;
  action: string;
  type: string;
}

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
  @Input() message!: string;
  @Input() isSuccessful!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
