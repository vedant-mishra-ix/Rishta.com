import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/admin-guard/admin-guard.guard';
import { AuthGuard } from './core/auth-guard/auth-guard.guard';
import { Role } from './core/model/role';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

    {
      path:'',
      loadChildren:()=> import('./home/home.module').then(c => c.HomeModule)
    },
    {
      path:"admin",
      canActivate:[AdminGuard],
      data:{roles:Role.Admin},
      loadChildren:()=> import('./admin/admin.module').then(c => c.AdminModule)
    },
    {
      path:"user",
      canActivate: [AuthGuard],
      data:{roles:Role.User},
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
