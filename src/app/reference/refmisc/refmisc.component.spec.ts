import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefmiscComponent } from './refmisc.component';

describe('RefmiscComponent', () => {
  let component: RefmiscComponent;
  let fixture: ComponentFixture<RefmiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefmiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefmiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
