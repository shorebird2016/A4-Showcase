import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchTvComponent } from './twitch-tv.component';
import {FormsModule} from '@angular/forms';

describe('TwitchTvComponent', () => {
  let component: TwitchTvComponent;
  let fixture: ComponentFixture<TwitchTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchTvComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
