import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


/* const routes: Routes=[
  {
  path :'add-new-loan',
  redirectTo : 'add-loans'
},
{
  path:'add-loans',
  component: AddLoansComponent,
}
{
  path:'loan',
  // component:LoanTypesComponent,
  // outlet:'',
  children:[
    {
      path:'add-loans',
      component: AddLoansComponent
    },
    {
      path:'edit-loans',
      component: AddLoansComponent
    },
    {
      path:'delete-loans',
      component: AddLoansComponent
    }
  ]
},
{
  path:'customers',
  children:[
    {
      path : 'add-customer',
      component : AddLoansComponent
    },
    {
      path : 'edit-customer',
      component : AddLoansComponent
    },
    {
      path : 'delete-customer',
      component : AddLoansComponent
    }
  ]
} 
]; */

const routes : Routes = [
  {
    path:'product/:id', component:ProductComponent
  } ,
  {
    path:'product/:productId/photo/:photoId', component:ProductComponent
  },
  {
    path:'clients', 
    component : ClientsComponent
  },
  {
    path:'',
    redirectTo:'leads',
    pathMatch:'full'
  },
 /*  {
    path:'**',
    component:PageNotFoundComponent
  }, */
  {
    path:'leads',
    component:LeadsGridComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {
    path:'**',
    component:PageNotFoundComponent
  }
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
