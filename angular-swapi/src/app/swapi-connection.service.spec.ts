import { TestBed } from '@angular/core/testing';

import { SwapiConnectionService } from './swapi-connection.service';

describe('SwapiConnectionService', () => {
  let service: SwapiConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
