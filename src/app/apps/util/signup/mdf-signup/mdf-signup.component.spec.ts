import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfSignupComponent } from './mdf-signup.component';

describe('MdfSignupComponent', () => {
  let component: MdfSignupComponent;
  let fixture: ComponentFixture<MdfSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
