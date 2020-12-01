import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';
import { NewComponent } from './new/new.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  { path: '', component: TestingComponent },
  { path: 'form', component: FormArrayComponent },
  { path: 'new', component: NewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
