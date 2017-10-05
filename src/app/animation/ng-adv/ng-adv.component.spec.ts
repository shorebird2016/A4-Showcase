import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdvComponent } from './ng-adv.component';

describe('NgAdvComponent', () => {
  let component: NgAdvComponent;
  let fixture: ComponentFixture<NgAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
