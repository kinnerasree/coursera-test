import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { NgxDaterangepickerMd } from 'ngx-datepicker-material';
import { MatSliderModule } from '@angular/material/slider';
import { from } from 'rxjs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
// import { MatCardModule } from '@angular/material/card';
// import { MatSidenavModule, MatTabsModule, MatButtonModule, MatIconModule, MatTooltipModule, MatCard, MatCardModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatDividerModule,
//    MatDatepickerModule, MatRippleModule } from '@angular/material';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { TestingComponent } from './testing/testing.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { NewComponent } from './new/new.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

// import {
//   NgxMatDatetimePickerModule,
//   NgxMatNativeDateModule,
//   NgxMatTimepickerModule
// } from '@angular-material-components/datetime-picker';


// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    FormArrayComponent,
    NewComponent,

  ],
  imports: [
    BsDatepickerModule.forRoot(),

    HttpClientModule,
    NgxMaterialTimepickerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDatepickerModule,
    CommonModule,
    // MatCardModule,

    MatSliderModule,
    MatNativeDateModule,
    MatInputModule,
    // NgxDaterangepickerMd,
    // NgxMatDatetimePickerModule,
    // NgxMatTimepickerModule,
    // NgxMatNativeDateModule







  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
