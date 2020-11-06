import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSliderModule } from '@angular/material/slider';
import { from } from 'rxjs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
// import { MatSidenavModule, MatTabsModule, MatButtonModule, MatIconModule, MatTooltipModule, MatCard, MatCardModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatDividerModule,
//    MatDatepickerModule, MatRippleModule } from '@angular/material';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDatepickerModule,
    CommonModule,
    FormsModule,
    BsDatepickerModule,
    MatSliderModule,
    MatNativeDateModule,
    
    MatInputModule,
    MatTabsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
