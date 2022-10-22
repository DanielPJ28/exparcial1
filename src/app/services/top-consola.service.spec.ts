import { TestBed } from '@angular/core/testing';

import { TopConsolaService } from './top-consola.service';

describe('TopConsolaService', () => {
  let service: TopConsolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopConsolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
