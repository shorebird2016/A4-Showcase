import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComponent } from './component.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModelService} from '../tool/app/app-model.service';

describe('ComponentComponent', () => {
  let component: ComponentComponent;
  let fixture: ComponentFixture<ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentComponent ],
      imports: [RouterTestingModule],
      providers: [AppModelService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
