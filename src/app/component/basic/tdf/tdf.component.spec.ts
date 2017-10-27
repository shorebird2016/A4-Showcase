import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfComponent } from './tdf.component';
import {FormsModule} from '@angular/forms';

describe('TdfComponent', () => {
  let component: TdfComponent;
  let fixture: ComponentFixture<TdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
