import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  constructor() { }
  display;
  userEntry = ''; // data model, stored as string
  newEntry = true;
  periodEntered = false;
  result; // store number (not string), holds intermediate results when chained
  prevOp; // look ahead operator

  ngOnInit() {
  }

  digitClicked(digit) {
    if (this.userEntry.length === 10) { return; } // exceeding limit TODO maybe rotate ???
    if (this.newEntry) {
      this.userEntry = digit;
      this.newEntry = false;
    } else {
      this.userEntry += digit; // simple append
    }
    this.display = this.userEntry; // copy to display
  }
  periodClicked() {
    if (this.userEntry.length === 10) {
      return;
    } // exceeding limit
    if (this.periodEntered) {
      return;
    } // do not allow more than period
    this.periodEntered = true; // parse on equal
    this.userEntry += '.';
    this.display = this.userEntry; // copy to display
  }
  signClicked() {
    if (this.userEntry[0] === '-') {
      this.userEntry = this.userEntry.substr(1, this.userEntry.length);
    } else {
      this.userEntry = '-' + this.userEntry;
    }
    this.display = this.userEntry; // copy to display
  }
  ceClicked() {
    this.periodEntered = false;
    this.newEntry = true;
    this.userEntry = '';
    this.display = '0';
  }
  operatorClicked(operator) {
    if (this.result === undefined) { // xfer user entry to result when no result is around
      if (this.userEntry === '') {
        return;
      } // nop both empty
      if (operator === '=') { // new entry cycle
        this.newEntry = true;
        this.periodEntered = false;
        this.userEntry = '';
        return;
      }
      // + - x / operators, get user entry, put into result as real number
      this.result = parseFloat(this.userEntry);
      this.prevOp = operator;
      this.newEntry = true;
      this.periodEntered = false;
      this.userEntry = '';
      return;
    }

    if (this.userEntry === '') {
      return;
    } // cases when operator follows another operator
    // already has result, operate on both
    const entry = parseFloat(this.userEntry);
    switch (this.prevOp) { // already has operand, operate operand vs currentEntry, save in operand, clear currentEntry
      case '+':
        this.result += entry;
        break;

      case '-':
        this.result -= entry;
        break;

      case 'x':
        this.result *= entry;
        break;

      case '/':
        if (entry === 0) {
          this.result = NaN;
        } else {
          this.result /= entry;
        }
        break;
    }

    // apply formatting on result
    // const df1 = new DecimalFormat('#,##0.00');
    // var df2 = new DecimalFormat('0.##E0');
    // if (this.result > 100000000) {
      // this.display = df2.format(this.result); TODO this does NOT work
      this.display = this.result.toPrecision(8.2);
    // } else {
    //   this.display = df1.format(this.result); }

    // new entry cycle
    this.newEntry = true;
    this.periodEntered = false;
    this.userEntry = '';
    this.prevOp = operator;
    if (operator === '=') {
      this.result = undefined; // start over after finish
    }
  }
  cClicked() {
    this.periodEntered = false;
    this.newEntry = true;
    this.result = undefined;
    this.userEntry = '';
    this.display = '0'; // TODO what's diff from CE??????
  }
}
