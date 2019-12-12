import { TestBed } from '@angular/core/testing';

import { ProdManService } from './prod-man.service';

describe('ProdManService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdManService = TestBed.get(ProdManService);
    expect(service).toBeTruthy();
  });
});
