import { CanActivateFn } from '@angular/router';


 const userObj={
  userId:10,
  userName:'Raj'
 };

export const accountInfoGuard: CanActivateFn = (route, state) => {
  return true;
};
