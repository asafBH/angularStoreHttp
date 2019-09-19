import { TestBed } from '@angular/core/testing';

import { SiblingComunicService } from './sibling-comunic.service';

describe('SiblingComunicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiblingComunicService = TestBed.get(SiblingComunicService);
    expect(service).toBeTruthy();
  });
});
