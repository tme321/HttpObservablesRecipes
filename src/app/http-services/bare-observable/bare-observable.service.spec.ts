import { TestBed, inject } from '@angular/core/testing';

import { BareObservableService } from './bare-observable.service';

describe('BareObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BareObservableService]
    });
  });

  it('should be created', inject([BareObservableService], (service: BareObservableService) => {
    expect(service).toBeTruthy();
  }));
});
