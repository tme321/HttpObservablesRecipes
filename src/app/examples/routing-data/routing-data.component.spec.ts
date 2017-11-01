import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDataComponent } from './routing-data.component';

describe('RoutingDataComponent', () => {
  let component: RoutingDataComponent;
  let fixture: ComponentFixture<RoutingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
