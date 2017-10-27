import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[Component] should be created', () => {
    expect(component).toBeTruthy();
  });

  it('[Component] should have initialized variable xxx, yyy.', () => {
    expect(component.xxx).toEqual('specific');
    expect(component.yyy).toBe('from');
    expect(component.animState1).toBe(undefined);
  });

  it('[Component] method toggleYYY() should go between \'to\' and \'from\' states', () => {
    component.toggleYYY();
    expect(component.yyy).toBe('to');
    component.toggleYYY();
    expect(component.yyy).toBe('from');
  });

});
