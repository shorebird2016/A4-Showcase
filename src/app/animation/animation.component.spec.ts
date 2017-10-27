import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationComponent } from './animation.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModelService} from '../tool/app/app-model.service';

describe('AnimationComponent', () => {
  let component: AnimationComponent;
  let fixture: ComponentFixture<AnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationComponent ],
      providers: [AppModelService],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
