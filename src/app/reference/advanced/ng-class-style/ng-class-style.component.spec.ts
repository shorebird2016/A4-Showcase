import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassStyleComponent } from './ng-class-style.component';

describe('NgClassStyleComponent', () => {
  let component: NgClassStyleComponent;
  let fixture: ComponentFixture<NgClassStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
