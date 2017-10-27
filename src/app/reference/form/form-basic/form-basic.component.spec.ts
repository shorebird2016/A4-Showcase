import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasicComponent } from './form-basic.component';

describe('FormBasicComponent', () => {
  let component: FormBasicComponent;
  let fixture: ComponentFixture<FormBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
