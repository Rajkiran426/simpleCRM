import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { preferencesCheckGuard } from './preferences-check.guard';

describe('preferencesCheckGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => preferencesCheckGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
