import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBasicComponent } from './css-basic.component';

describe('CssBasicComponent', () => {
  let component: CssBasicComponent;
  let fixture: ComponentFixture<CssBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
