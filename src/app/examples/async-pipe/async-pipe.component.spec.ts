import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeSubscribingComponent } from './async-pipe-subscribing.component';

describe('AsyncPipeSubscribingComponent', () => {
  let component: AsyncPipeSubscribingComponent;
  let fixture: ComponentFixture<AsyncPipeSubscribingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPipeSubscribingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeSubscribingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
