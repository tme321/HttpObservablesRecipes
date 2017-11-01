import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerSubscribingComponent } from './controller-subscribing.component';

describe('ControllerSubscribingComponent', () => {
  let component: ControllerSubscribingComponent;
  let fixture: ComponentFixture<ControllerSubscribingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerSubscribingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerSubscribingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
