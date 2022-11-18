import { TestBed } from '@angular/core/testing';

import { meubleService } from './meuble.service';

describe('meubleService', () => {
  let service: meubleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(meubleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
