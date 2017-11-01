import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxSimpleComponent } from './ngrx-simple.component';

describe('NgrxSimpleComponent', () => {
  let component: NgrxSimpleComponent;
  let fixture: ComponentFixture<NgrxSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
