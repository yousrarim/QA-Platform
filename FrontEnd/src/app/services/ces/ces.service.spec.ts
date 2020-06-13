import { TestBed } from '@angular/core/testing';

import { CesService } from './ces.service';

describe('CesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CesService = TestBed.get(CesService);
    expect(service).toBeTruthy();
  });
});
