import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaVantageComponent } from './alpha-vantage.component';
import {FormsModule} from '@angular/forms';

describe('AlphaVantageComponent', () => {
  let component: AlphaVantageComponent;
  let fixture: ComponentFixture<AlphaVantageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaVantageComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaVantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
