import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecodeComponent } from './decode/decode.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './jobs/login/login.component';
import { NewloginComponent } from './jobs/newlogin/newlogin.component';
import { ProfileComponent } from './jobs/profile/profile.component';
import { NewComponent } from './new/new.component';
import { ProductsComponent } from './new/products/products.component';
import { TaskformComponent } from './taskform/taskform.component';

const routes: Routes = [
  { path: 'form', component: FormArrayComponent },
  { path: 'new', component: NewComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'task', component: TaskformComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'decode', component:DecodeComponent },

  { path: 'newlogin', component:NewloginComponent},
  { path: '', component:ProfileComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
