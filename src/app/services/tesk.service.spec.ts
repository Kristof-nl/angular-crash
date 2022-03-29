import { TestBed } from '@angular/core/testing';

import { TeskService } from './tesk.service';

describe('TeskService', () => {
  let service: TeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
