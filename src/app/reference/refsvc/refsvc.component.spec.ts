import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefsvcComponent } from './refsvc.component';

describe('RefsvcComponent', () => {
  let component: RefsvcComponent;
  let fixture: ComponentFixture<RefsvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefsvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefsvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
