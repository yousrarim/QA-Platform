import { TestBed } from '@angular/core/testing';

import { PgcrrService } from './pgcrr.service';

describe('PgcrrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PgcrrService = TestBed.get(PgcrrService);
    expect(service).toBeTruthy();
  });
});
