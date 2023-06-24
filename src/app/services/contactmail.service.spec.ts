import { TestBed } from '@angular/core/testing';

import { ContactmailService } from './contactmail.service';

describe('ContactmailService', () => {
  let service: ContactmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
