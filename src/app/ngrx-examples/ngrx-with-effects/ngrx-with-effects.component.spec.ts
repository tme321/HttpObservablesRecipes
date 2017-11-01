import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWithEffectsComponent } from './ngrx-with-effects.component';

describe('NgrxWithEffectsComponent', () => {
  let component: NgrxWithEffectsComponent;
  let fixture: ComponentFixture<NgrxWithEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxWithEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxWithEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
