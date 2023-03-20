import { TestBed } from '@angular/core/testing';

import { FosaService } from './fosa.service';

describe('FosaService', () => {
  let service: FosaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FosaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
