import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleUsesInTemplateSubscribingComponent } from './multiple-uses-in-template-subscribing.component';

describe('MultipleUsesInTemplateSubscribingComponent', () => {
  let component: MultipleUsesInTemplateSubscribingComponent;
  let fixture: ComponentFixture<MultipleUsesInTemplateSubscribingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleUsesInTemplateSubscribingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleUsesInTemplateSubscribingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
