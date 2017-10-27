import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})

export class MdfComponent implements OnInit {
  constructor() { }

  converterForm; decimalCount = 0; binaryCount = 0; octalCount = 0; hexCount = 0;

  ngOnInit() {
    this.converterForm = new FormGroup({
      decimalNum: new FormControl(),
      binaryNum: new FormControl(),
      octalNum: new FormControl(),
      hexNum: new FormControl()
    });
  }

  decimalChanged(new_value) {
    if (new_value !== '') {
      this.converterForm.patchValue({ binaryNum: parseInt(new_value, 10).toString(2) });
      this.converterForm.patchValue({ octalNum: parseInt(new_value, 10).toString(8) });
      this.converterForm.patchValue({ hexNum: parseInt(new_value, 10).toString(16) });
    } else {
      this.converterForm.patchValue({ binaryNum: '' });
      this.converterForm.patchValue({ octalNum: '' });
      this.converterForm.patchValue({ hexNum: '' });
    }
  }

  binaryChanged(new_value) {
    console.log('BCOUNT = ', this.binaryCount);
    this.binaryCount = this.binaryCount + 1;
    if (this.binaryCount === 1) {
      if (new_value !== '') {
        this.converterForm.patchValue({decimalNum: parseInt(new_value, 2).toString(10)});
      } else {
        this.converterForm.patchValue({decimalNum: ''});
      }
      // this.binaryCount = 0;
    }
  }

  octalChanged(new_value) {
/*
    if (new_value !== '') {
      this.converterForm.patchValue({ decimalNum: parseInt(new_value, 10).toString(10) });
      this.converterForm.patchValue({ binaryNum: parseInt(new_value, 10).toString(2) });
      this.converterForm.patchValue({ hexNum: parseInt(new_value, 10).toString(16) });
    } else {
      this.converterForm.patchValue({ decimalNum: '' });
      this.converterForm.patchValue({ binaryNum: '' });
      this.converterForm.patchValue({ hexNum: '' });
    }
*/
  }

  hexChanged(new_value) {
/*
    if (new_value !== '') {
      this.converterForm.patchValue({ decimalNum: parseInt(new_value, 10).toString(10) });
      this.converterForm.patchValue({ binaryNum: parseInt(new_value, 10).toString(2) });
      this.converterForm.patchValue({ octalNum: parseInt(new_value, 10).toString(8) });
    } else {
      this.converterForm.patchValue({ decimalNum: '' });
      this.converterForm.patchValue({ binaryNum: '' });
      this.converterForm.patchValue({ octalNum: '' });
    }
*/
  }
}
