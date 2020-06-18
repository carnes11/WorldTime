import { TestBed } from '@angular/core/testing';

import { WorldTimeApiService } from './world-time-api.service';

describe('WorldTimeApiService', () => {
  let service: WorldTimeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldTimeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
