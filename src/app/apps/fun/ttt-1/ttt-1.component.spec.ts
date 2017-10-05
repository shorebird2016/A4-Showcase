import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ttt1Component } from './ttt-1.component';

describe('Ttt1Component', () => {
  let component: Ttt1Component;
  let fixture: ComponentFixture<Ttt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ttt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ttt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
