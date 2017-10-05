import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCommComponent } from './comp-comm.component';

describe('CompCommComponent', () => {
  let component: CompCommComponent;
  let fixture: ComponentFixture<CompCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
