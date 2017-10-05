import { Component, OnInit } from '@angular/core';
import { MathService } from '../../tool/app/math.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
  providers: [MathService]
})
export class MathComponent implements OnInit {
  constructor(private math_svc: MathService) { }
  operand1; operand2; operand3; operand4; operand5; operand6; operand7; operand8;
  ngOnInit() {
  }
  addNumbers()      { return this.math_svc.add(this.operand1, this.operand2); }
  subtractNumbers() { return this.math_svc.subtract(this.operand3, this.operand4); }
  multiplyNumbers() { return this.math_svc.multiply(this.operand5, this.operand6); }
  divideNumbers()   { return this.math_svc.divide(this.operand7, this.operand8); }
}
