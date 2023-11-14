import { CanDeactivateFn } from '@angular/router';
import { SearchComponent } from './search/search.component';

export const unsavedGuard: CanDeactivateFn<SearchComponent> = (component, currentRoute, currentState, nextState) => {

    if(component.isDirty){
      return window.confirm("Are you sure leave the page.");
    }

  return true;
};
