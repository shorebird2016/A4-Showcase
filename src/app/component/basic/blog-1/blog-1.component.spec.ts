import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog1Component } from './blog-1.component';
import {FormsModule} from '@angular/forms';

describe('Blog1Component', () => {
  let component: Blog1Component;
  let fixture: ComponentFixture<Blog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog1Component ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
