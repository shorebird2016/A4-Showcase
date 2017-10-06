import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ref1Component } from './ref1.component';

describe('Ref1Component', () => {
  let component: Ref1Component;
  let fixture: ComponentFixture<Ref1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ref1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ref1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
