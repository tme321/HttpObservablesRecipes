import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineRequestsSubscriberComponent } from './pipeline-requests-subscriber.component';

describe('PipelineRequestsSubscriberComponent', () => {
  let component: PipelineRequestsSubscriberComponent;
  let fixture: ComponentFixture<PipelineRequestsSubscriberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineRequestsSubscriberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineRequestsSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
