import { TestBed } from '@angular/core/testing';

import { NPSService } from './nps.service';

describe('NPSService', () => {
  let service: NPSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NPSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
