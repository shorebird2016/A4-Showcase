import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrouteComponent } from './refroute.component';

describe('RefrouteComponent', () => {
  let component: RefrouteComponent;
  let fixture: ComponentFixture<RefrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
