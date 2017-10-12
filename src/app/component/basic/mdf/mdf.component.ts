import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})

export class MdfComponent implements OnInit {
  constructor() { }

  form; decimalCount = 0; binaryCount = 0; octalCount = 0; hexCount = 0;

  ngOnInit() {
    this.form = new FormGroup({
      decimalNum: new FormControl(),
      binaryNum: new FormControl(),
      octalNum: new FormControl(),
      hexNum: new FormControl()
    });
  }

  decimalChanged(new_value) {
    if (new_value !== '') {
      this.form.patchValue({ binaryNum: parseInt(new_value, 10).toString(2) });
      this.form.patchValue({ octalNum: parseInt(new_value, 10).toString(8) });
      this.form.patchValue({ hexNum: parseInt(new_value, 10).toString(16) });
    } else {
      this.form.patchValue({ binaryNum: '' });
      this.form.patchValue({ octalNum: '' });
      this.form.patchValue({ hexNum: '' });
    }
    this.decimalCount++;
  }

  binaryChanged(new_value) {
    if (new_value !== '') {
      this.form.patchValue({ decimalNum: parseInt(new_value, 10).toString(10) });
      this.form.patchValue({ octalNum: parseInt(new_value, 10).toString(8) });
      this.form.patchValue({ hexNum: parseInt(new_value, 10).toString(16) });
    } else {
      this.form.patchValue({ decimalNum: '' });
      this.form.patchValue({ octalNum: '' });
      this.form.patchValue({ hexNum: '' });
    }
    this.binaryCount++;
  }

  octalChanged(new_value) {
    if (new_value !== '') {
      this.form.patchValue({ decimalNum: parseInt(new_value, 10).toString(10) });
      this.form.patchValue({ binaryNum: parseInt(new_value, 10).toString(2) });
      this.form.patchValue({ hexNum: parseInt(new_value, 10).toString(16) });
    } else {
      this.form.patchValue({ decimalNum: '' });
      this.form.patchValue({ binaryNum: '' });
      this.form.patchValue({ hexNum: '' });
    }
  }

  hexChanged(new_value) {
    if (new_value !== '') {
      this.form.patchValue({ decimalNum: parseInt(new_value, 10).toString(10) });
      this.form.patchValue({ binaryNum: parseInt(new_value, 10).toString(2) });
      this.form.patchValue({ octalNum: parseInt(new_value, 10).toString(8) });
    } else {
      this.form.patchValue({ decimalNum: '' });
      this.form.patchValue({ binaryNum: '' });
      this.form.patchValue({ octalNum: '' });
    }
  }
}
