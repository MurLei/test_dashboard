import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'users',
    loadChildren: () => import('./screens/users/users.module').then(m => m.UsersModule)
  },
  {
    path:'t',
    loadChildren: () => import('./dialog/dialog.module').then(c => c.DialogModule)
  },
  
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'form', component:FormComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
