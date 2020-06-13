import { TestBed } from '@angular/core/testing';

import { PdriService } from './pdri.service';

describe('PdriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdriService = TestBed.get(PdriService);
    expect(service).toBeTruthy();
  });
});
