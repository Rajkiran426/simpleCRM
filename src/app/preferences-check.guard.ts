import { CanMatchFn } from '@angular/router';

export const preferencesCheckGuard: CanMatchFn = (route, segments) => {
  return true;
};
