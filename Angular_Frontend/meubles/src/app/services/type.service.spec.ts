import { TestBed } from '@angular/core/testing';

import { typeService } from './type.service';

describe('typeService', () => {
  let service: typeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(typeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
