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
// import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormArrayComponent } from './form-array/form-array.component';
import { NewComponent } from './new/new.component';
import { HttpClient, HttpClientModule, } from '@angular/common/http';
// import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ProductsComponent } from './new/products/products.component';
import { ConvertToSpacesPipe } from './new/shared/convert-to-spaces.pipe';
import { StarComponent } from './new/shared/star/star.component';
import { ProductService } from './new/products/product.service';
import { TaskformComponent } from './taskform/taskform.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './jobs/login/login.component';
import { HeaderComponent } from './jobs/header/header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DecodeComponent } from './decode/decode.component';

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
    
    FormArrayComponent,
    NewComponent,
    ProductsComponent,
    ConvertToSpacesPipe,
    StarComponent,
    TaskformComponent,
    JobsComponent,
    LoginComponent,
    HeaderComponent,
    DecodeComponent

  ],
  imports: [
    // BsDatepickerModule.forRoot(),

    HttpClientModule,
    // NgxMaterialTimepickerModule,
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

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n', '.json');
        },
        deps: [HttpClient]
      },
    })





  ],
  providers:[ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
