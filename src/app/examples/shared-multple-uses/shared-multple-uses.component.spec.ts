import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMultpleUsesSubscriberComponent } from './shared-multple-uses-subscriber.component';

describe('SharedMultpleUsesSubscriberComponent', () => {
  let component: SharedMultpleUsesSubscriberComponent;
  let fixture: ComponentFixture<SharedMultpleUsesSubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedMultpleUsesSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedMultpleUsesSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
