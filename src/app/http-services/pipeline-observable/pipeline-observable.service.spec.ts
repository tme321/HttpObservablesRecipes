import { TestBed, inject } from '@angular/core/testing';

import { PipelineObservableService } from './pipeline-observable.service';

describe('PipelineObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PipelineObservableService]
    });
  });

  it('should be created', inject([PipelineObservableService], (service: PipelineObservableService) => {
    expect(service).toBeTruthy();
  }));
});
