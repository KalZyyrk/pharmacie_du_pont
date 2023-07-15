import { TestBed } from '@angular/core/testing';

import { OpeningTimeService } from './opening-time.service';

describe('OpeningTimeService', () => {
  let service: OpeningTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpeningTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
