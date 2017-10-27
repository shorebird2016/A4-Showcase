import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartComponent } from './highchart.component';
import {ChartModule} from 'angular-highcharts';

describe('HighchartComponent', () => {
  let component: HighchartComponent;
  let fixture: ComponentFixture<HighchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartComponent ],
      imports: [ChartModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
