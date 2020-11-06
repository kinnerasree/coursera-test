import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule, MatDateRangePicker } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
    declarations: [],
    imports: [
        BsDatepickerConfig,
        FormsModule,
        BrowserModule,
        MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        // MatInputModule,
        MatRippleModule,
        MatDateRangePicker,
        MatInputModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        BsDatepickerModule,
        MatTabsModule,
        ReactiveFormsModule,





    ]
})

export class MaterialModule { }