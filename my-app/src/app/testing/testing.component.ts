
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, NgForm } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { Router } from '@angular/router';
import { getDay } from 'ngx-bootstrap/chronos';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { from } from 'rxjs';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  // datePickerConfg: Partial<BsDatepickerConfig>;
  // bsConfig: Partial<BsDatepickerConfig>;

  timesheetForm: FormGroup;
  timeForm: FormGroup;
  submitted: false;

  checkboxGroup: FormGroup;

  items: Array<string> = ['Banana', 'Apple', 'Beer', 'Water'];
  constructor(private fb: FormBuilder, public router: Router,) {
    this.checkboxGroup = fb.group({
      checkboxes: this.initFormArray()
    });

  }




  ngOnInit(): void {
    // this.datePickerConfg = Object.assign({}, { dateInputFormat: 'DD-MM-YYYY', containerClass: 'theme-dark-blue' });
    this.days()
    // this.initSection();
    this.timesheetForm = this.fb.group({
      date: '',
      totalWorkingHours: 0,
    })
    this.timeForm = this.fb.group({
      categoryType: [''],
      tsDate: [''],
    })

    // this.getMonthNumberfromMonthDay(MonthNumber);
    //DAte

    // var MonthNumber = d.getMonth();
    // console.log(this.getMonthNumberfromMonthDay(MonthNumber));



    //ngonit end
  }
  tConvert(time) {
    debugger;
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  // tConvert('18:00:00');

  initFormArray() {
    let checkboxArray = new FormArray([]);

    this.items.forEach(item => {
      let formControl = new FormControl(true);
      checkboxArray.push(formControl);
    })

    return checkboxArray;
  }


  // days(from) {
  //   var d = new Date(from),

  //     y = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //   var n = y[d.getDay()];
  //   console.log(n)
  // }
  days() {
    debugger;
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];

    // days(from, to) {
    //   debugger;
    //   var d = new Date(from),
    //     a = [],
    //     y = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //   while (d < to) {
    //     a.push({ categoryType: y[d.getDay()] });
    //     d.setDate(d.getDate() + 1);
    //   }
    //   if (d.getDay() === to.getDay())
    //     a.push({ categoryType: y[d.getDay()] });
    //   return a
    // }

    // days(from, to) {
    //   debugger;
    //   var d = new Date(from),
    //     a = [],
    //     y = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //   while (d < to) {

    //     a.push({ categoryType: y[d.getDay()] });
    //     d.setDate(d.getDate() + 1);
    //   }
    //   if (d.getDay() === to.getDay())
    //     include last day
    //     a.push({ categoryType: y[d.getDay()] });

    //   this.getDateArray(from, to).forEach((element, index) => {
    //     a[index]['tsDate'] = this.convert1(getActualDate(element.date));
    //   })
    //   return a;
    // }
    // getDateArray(start, end) {
    //   var
    //     arr = new Array(),
    //     dt = new Date(start);
    //   while (dt <= end) {
    //     arr.push({ date: this.convert(new Date(dt)) });
    //     dt.setDate(dt.getDate() + 1);
    //   }
    //   return arr;
    // }
    // convert1(str) {
    //   var date = new Date(str),
    //     mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    //     day = ("0" + date.getDate()).slice(-2);
    //   return [mnth, day, date.getFullYear()].join("-");
    // }
    // convert(str) {
    //   var date = new Date(str),
    //     mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    //     day = ("0" + date.getDate()).slice(-2);
    //   return [date.getFullYear(), mnth, day].join("-");
    // }
    // getData(startDate, endDate) {
    //   const MS_PER_DAY: number = 1000 * 60 * 60 * 24;
    //   const start: number = startDate.getTime();
    //   const end: number = endDate.getTime();
    //   const daysBetweenDates: number = Math.ceil((end - start) / MS_PER_DAY);

    //   The days array will contain a Date object for each day between dates (inclusive)
    //   const days: Date[] = Array.from(new Array(daysBetweenDates + 1),
    //     (v, i) => new Date(start + (i * MS_PER_DAY)));
    // }




    // initSection() {
    //   this.timeForm = this.fb.group({
    //     questions: this.fb.array([
    //       this.initSubSection()
    //     ])
    //   })
    // }
    // initSubSection() {
    //   return this.fb.group({
    //     categoryType: [''],
    //     tsDate: [''],
    //     work: [0],
    //     nonWork: [0],
    //     options: this.fb.array([
    //       this.initOptions()
    //     ])

    //   })
    // }
    // initOptions() {
    //   return this.fb.group({
    //     timeSheetId: [0],
    //     tsType: [''],
    //     tsStartTime: [''],
    //     tsEndTime: [''],
    //     projectName: [''],
    //     remarks: [''],
    //     status: [''],
    //     tsDate: [''],
    //     day: [''],
    //     totalHours: [''],

    //   })
    // }
    // add(j) {
    //   const control = <FormArray>this.timeForm.get(['questions', j, 'options']);
    //   control.push(this.initOptions());
    // }





    // onSubmit() {
    //   console.log(this.timesheetForm.value)
    // }


    //oninit end
  }
}
// export function getActualDate(date) {
//   if (date instanceof Date) {
//     return date;
//   } else {
//     date = date.substring(0, 10).split('-');
//     date = date[1] + '/' + date[2] + '/' + date[0];
//     return new Date(date);
//   }
// }

