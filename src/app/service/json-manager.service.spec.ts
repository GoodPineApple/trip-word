import { TestBed } from '@angular/core/testing';

import { JsonManagerService } from './json-manager.service';

describe('JsonManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonManagerService = TestBed.get(JsonManagerService);
    expect(service).toBeTruthy();
  });
});
