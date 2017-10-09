import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotColdComponent } from './hot-cold.component';

describe('HotColdComponent', () => {
  let component: HotColdComponent;
  let fixture: ComponentFixture<HotColdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotColdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotColdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
