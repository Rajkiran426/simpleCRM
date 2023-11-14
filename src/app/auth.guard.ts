import { CanActivateFn } from '@angular/router';



export const authGuard: CanActivateFn = (route, state) => {
 let a=20;
let b=10;
// Call an HTTP call to Backend API and get Auth Token for user
let userToken=false;
if(!userToken){
  return true;
}else{
return false;
}
/*   if(a > b){
    return true;
  }else{
  return false;
} */
};
