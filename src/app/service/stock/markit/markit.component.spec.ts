import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkitComponent } from './markit.component';

describe('MarkitComponent', () => {
  let component: MarkitComponent;
  let fixture: ComponentFixture<MarkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
