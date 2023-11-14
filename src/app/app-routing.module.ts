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
import { authGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { superAdminGuard } from './super-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { DeleteContactComponent } from './contacts/delete-contact/delete-contact.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { adminAccessGuard } from './admin-access.guard';
import { preferencesCheckGuard } from './preferences-check.guard';


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

const routes: Routes = [
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'product/:productId/photo/:photoId', component: ProductComponent
  },
  {
    path: 'clients',
    component: ClientsComponent,
    //canActivate:[authGuard]
    canActivate: [AdminGuard, authGuard]
  },
  {
    path: '',
    redirectTo: 'leads',
    pathMatch: 'full'
  },
  /*  {
     path:'**',
     component:PageNotFoundComponent
   }, */
  {
    path: 'leads',
    component: LeadsGridComponent
  },
  {
    path: 'admin',
    //component: AdminComponent,   
    canActivate: [superAdminGuard],
    children: [
      {
        path: '',
        component: AdminComponent,

      },
      {
        path: '',
        canActivateChild: [adminAccessGuard],
        children: [
          { path: 'manage', component: AdminManageComponent },
          { path: 'edit', component: AdminEditComponent },
          { path: 'delete', component: AdminDeleteComponent }
        ]
      }
    ]
  },
  {
    path: 'search',
    component: SearchComponent
  },
  { path: 'payments', 
  loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'preferences', 
    canLoad:[preferencesCheckGuard],
    loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
