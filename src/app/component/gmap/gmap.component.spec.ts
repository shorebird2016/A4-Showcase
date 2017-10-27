import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapComponent } from './gmap.component';
import {AgmCoreModule} from '@agm/core';

describe('GmapComponent', () => {
  let component: GmapComponent;
  let fixture: ComponentFixture<GmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapComponent ],
      imports: [AgmCoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
