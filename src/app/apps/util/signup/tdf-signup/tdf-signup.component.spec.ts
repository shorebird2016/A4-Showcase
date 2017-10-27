import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfSignupComponent } from './tdf-signup.component';
import {FormsModule} from '@angular/forms';

describe('TdfSignupComponent', () => {
  let component: TdfSignupComponent;
  let fixture: ComponentFixture<TdfSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfSignupComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
