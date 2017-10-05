import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefdiComponent } from './refdi.component';

describe('RefdiComponent', () => {
  let component: RefdiComponent;
  let fixture: ComponentFixture<RefdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
