import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceComponent } from './reference.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppModelService} from '../tool/app/app-model.service';

describe('ReferenceComponent', () => {
  let component: ReferenceComponent;
  let fixture: ComponentFixture<ReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceComponent ],
      imports: [RouterTestingModule],
      providers: [AppModelService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
