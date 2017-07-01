import { TestBed, async, inject } from '@angular/core/testing';

import { AuthgeardGuard } from './authgeard.guard';

describe('AuthgeardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthgeardGuard]
    });
  });

  it('should ...', inject([AuthgeardGuard], (guard: AuthgeardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
