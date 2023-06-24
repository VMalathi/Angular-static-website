import { TestBed } from '@angular/core/testing';

import { WhyUsService } from './why-us.service';

describe('WhyUsService', () => {
  let service: WhyUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhyUsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
