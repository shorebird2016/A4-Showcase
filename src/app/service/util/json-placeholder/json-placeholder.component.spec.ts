import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPlaceholderComponent } from './json-placeholder.component';

describe('JsonPlaceholderComponent', () => {
  let component: JsonPlaceholderComponent;
  let fixture: ComponentFixture<JsonPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
