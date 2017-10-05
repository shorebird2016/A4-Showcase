import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReftdfComponent } from './reftdf.component';

describe('ReftdfComponent', () => {
  let component: ReftdfComponent;
  let fixture: ComponentFixture<ReftdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReftdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReftdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
