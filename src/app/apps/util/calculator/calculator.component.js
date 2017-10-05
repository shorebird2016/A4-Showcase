"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CalculatorComponent = (function () {
    function CalculatorComponent() {
        this.userEntry = ''; // data model, stored as string
        this.newEntry = true;
        this.periodEntered = false;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent.prototype.digitClicked = function (digit) {
        if (this.userEntry.length === 10) {
            return;
        } // exceeding limit TODO maybe rotate ???
        if (this.newEntry) {
            this.userEntry = digit;
            this.newEntry = false;
        }
        else {
            this.userEntry += digit; // simple append
        }
        this.display = this.userEntry; // copy to display
    };
    CalculatorComponent.prototype.periodClicked = function () {
        if (this.userEntry.length === 10) {
            return;
        } // exceeding limit
        if (this.periodEntered) {
            return;
        } // do not allow more than period
        this.periodEntered = true; // parse on equal
        this.userEntry += '.';
        this.display = this.userEntry; // copy to display
    };
    CalculatorComponent.prototype.signClicked = function () {
        if (this.userEntry[0] === '-') {
            this.userEntry = this.userEntry.substr(1, this.userEntry.length);
        }
        else {
            this.userEntry = '-' + this.userEntry;
        }
        this.display = this.userEntry; // copy to display
    };
    CalculatorComponent.prototype.ceClicked = function () {
        this.periodEntered = false;
        this.newEntry = true;
        this.userEntry = '';
        this.display = '0';
    };
    CalculatorComponent.prototype.operatorClicked = function (operator) {
        if (this.result === undefined) {
            if (this.userEntry === '') {
                return;
            } // nop both empty
            if (operator === '=') {
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
        var entry = parseFloat(this.userEntry);
        switch (this.prevOp) {
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
                }
                else {
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
    };
    CalculatorComponent.prototype.cClicked = function () {
        this.periodEntered = false;
        this.newEntry = true;
        this.result = undefined;
        this.userEntry = '';
        this.display = '0'; // TODO what's diff from CE??????
    };
    return CalculatorComponent;
}());
CalculatorComponent = __decorate([
    core_1.Component({
        selector: 'app-calculator',
        templateUrl: './calculator.component.html',
        styleUrls: ['./calculator.component.css']
    })
], CalculatorComponent);
exports.CalculatorComponent = CalculatorComponent;
