import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/auth-guard/auth-guard.guard';
import { RoleGuard } from './core/Role-guard/role.guard';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

    {
      path:'',
      loadChildren:()=> import('./home/home.module').then(c => c.HomeModule)
    },
    {
      path:"Admin",
      canActivate:[AuthGuardGuard],
      loadChildren:()=> import('./admin/admin.module').then(c => c.AdminModule)
    },
    {
      path:"User",
      canActivate: [AuthGuardGuard],
      loadChildren:()=> import('./user/user.module').then(c => c.UserModule)
    },
    {
      path:'**',
      component:NotfoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
