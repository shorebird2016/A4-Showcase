import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrComponent } from './flickr.component';

describe('FlickrComponent', () => {
  let component: FlickrComponent;
  let fixture: ComponentFixture<FlickrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
