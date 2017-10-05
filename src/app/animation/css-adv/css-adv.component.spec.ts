import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAdvComponent } from './css-adv.component';

describe('CssAdvComponent', () => {
  let component: CssAdvComponent;
  let fixture: ComponentFixture<CssAdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssAdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
