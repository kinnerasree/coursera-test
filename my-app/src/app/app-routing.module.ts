import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecodeComponent } from './decode/decode.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './jobs/login/login.component';
import { NewComponent } from './new/new.component';
import { ProductsComponent } from './new/products/products.component';
import { TaskformComponent } from './taskform/taskform.component';

const routes: Routes = [
  { path: 'form', component: FormArrayComponent },
  { path: 'new', component: NewComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'task', component: TaskformComponent },
  { path: 'jobs', component: JobsComponent },
  { path: '', component: LoginComponent },
  { path: 'decode', component:DecodeComponent },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
