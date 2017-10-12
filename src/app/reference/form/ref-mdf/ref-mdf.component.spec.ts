import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefMdfComponent } from './ref-mdf.component';

describe('RefMdfComponent', () => {
  let component: RefMdfComponent;
  let fixture: ComponentFixture<RefMdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefMdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefMdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
