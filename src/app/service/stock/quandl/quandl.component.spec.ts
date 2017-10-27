import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuandlComponent } from './quandl.component';
import {FormsModule} from '@angular/forms';

describe('QuandlComponent', () => {
  let component: QuandlComponent;
  let fixture: ComponentFixture<QuandlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuandlComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuandlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
