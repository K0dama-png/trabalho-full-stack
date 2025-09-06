import { TestBed } from '@angular/core/testing';

import { Modos } from './modos';

describe('Modos', () => {
  let service: Modos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Modos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
