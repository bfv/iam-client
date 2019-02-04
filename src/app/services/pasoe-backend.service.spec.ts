import { TestBed } from '@angular/core/testing';

import { PasoeBackendService } from './pasoe-backend.service';

describe('PasoeBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasoeBackendService = TestBed.get(PasoeBackendService);
    expect(service).toBeTruthy();
  });
});
