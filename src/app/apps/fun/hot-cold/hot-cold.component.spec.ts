import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotColdComponent } from './hot-cold.component';
import {FormsModule} from '@angular/forms';
import {GoogleMapsAPIWrapper} from '@agm/core';

describe('HotColdComponent', () => {
  let component: HotColdComponent;
  let fixture: ComponentFixture<HotColdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotColdComponent ],
      imports: [FormsModule],
      providers: [GoogleMapsAPIWrapper]
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
