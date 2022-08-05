import { TestBed } from '@angular/core/testing';

import { DatePickerDialog } from './date-picker-dialog.service';

describe('DataPickerDialogService', () => {
  let service: DatePickerDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatePickerDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
