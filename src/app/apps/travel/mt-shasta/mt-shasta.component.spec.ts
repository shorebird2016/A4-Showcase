import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtShastaComponent } from './mt-shasta.component';

describe('MtShastaComponent', () => {
  let component: MtShastaComponent;
  let fixture: ComponentFixture<MtShastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtShastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtShastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
