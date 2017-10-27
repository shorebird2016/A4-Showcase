import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkitComponent } from './markit.component';
import {FormsModule} from '@angular/forms';

describe('MarkitComponent', () => {
  let component: MarkitComponent;
  let fixture: ComponentFixture<MarkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkitComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
