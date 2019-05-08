import { TestBed } from '@angular/core/testing';

import { CMTraceService } from './cmtrace.service';

describe('CMTraceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CMTraceService = TestBed.get(CMTraceService);
    expect(service).toBeTruthy();
  });
});
