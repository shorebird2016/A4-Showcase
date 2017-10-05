import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBasicComponent } from './ng-basic.component';

describe('NgBasicComponent', () => {
  let component: NgBasicComponent;
  let fixture: ComponentFixture<NgBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
