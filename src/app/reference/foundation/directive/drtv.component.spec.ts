import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrtvComponent } from './drtv.component';

describe('DrtvComponent', () => {
  let component: DrtvComponent;
  let fixture: ComponentFixture<DrtvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrtvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
