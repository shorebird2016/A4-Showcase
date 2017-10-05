import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheysayComponent } from './theysay.component';

describe('TheysayComponent', () => {
  let component: TheysayComponent;
  let fixture: ComponentFixture<TheysayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheysayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheysayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
