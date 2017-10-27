import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlchemyComponent } from './alchemy.component';
import {FormsModule} from '@angular/forms';
import {AlchemyService} from '../../../tool/info/alchemy.service';

describe('AlchemyComponent', () => {
  let component: AlchemyComponent;
  let fixture: ComponentFixture<AlchemyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlchemyComponent ],
      imports: [FormsModule],
      providers: [AlchemyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlchemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
