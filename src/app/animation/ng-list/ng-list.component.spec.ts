import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgListComponent } from './ng-list.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('NgListComponent', () => {
  let component: NgListComponent;
  let fixture: ComponentFixture<NgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgListComponent ],
      imports: [FormsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
