import { TestBed } from '@angular/core/testing';

import { PasoeOauth2BackendService } from './pasoe-oauth2-backend.service';

describe('PasoeOauth2BackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasoeOauth2BackendService = TestBed.get(PasoeOauth2BackendService);
    expect(service).toBeTruthy();
  });
});
