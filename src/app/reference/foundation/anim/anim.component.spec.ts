import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimComponent } from './anim.component';

describe('AnimComponent', () => {
  let component: AnimComponent;
  let fixture: ComponentFixture<AnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
