import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefioComponent } from './refio.component';

describe('RefioComponent', () => {
  let component: RefioComponent;
  let fixture: ComponentFixture<RefioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
