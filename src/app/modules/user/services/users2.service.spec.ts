import { TestBed } from '@angular/core/testing';

import { Users2Service } from './users2.service';

describe('Users2Service', () => {
  let service: Users2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Users2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
