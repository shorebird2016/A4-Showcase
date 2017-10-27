import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackComponent } from './stack.component';
import {FormsModule} from '@angular/forms';

describe('StackComponent', () => {
  let component: StackComponent;
  let fixture: ComponentFixture<StackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
