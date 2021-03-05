import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { CreateTimesheetInput } from './mytimesheet.model';
import { TimeManagementService } from './time-management.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  timesheetLog: FormGroup;
  myForm: FormGroup;
  i: FormGroup;
  j: FormGroup;
  // datePickerConfg: Partial<BsDatepickerConfig>;
  lastday: string;
  firstday: string;
  selectedDates: Date[] = [];

  data = {
    workLog: [
      {
        startDate: Date,

        projects: [
          {
            projectName: "example project",
          }
        ]
      }
    ]
  }



  constructor(private fb: FormBuilder, private timeManagementService: TimeManagementService) {

  }

  ngOnInit(): void {
    this.timesheetLog = this.fb.group({
      date: new FormControl(),
    })


    //DAte
    var curr = new Date();
    console.log(new Date())
    var first = curr.getDate() - curr.getDay();
    this.firstday = new Date(curr.setDate(first)).toLocaleDateString();
    let control = <FormArray>this.myForm.controls.workLog;
    let i = 0;
    while (i < 7) {
      let toBeAddedDate = this.addDays(new Date(this.firstday), i);
      this.selectedDates.push(toBeAddedDate);
      control.push(
        this.fb.group({
          startDate: toBeAddedDate,

          // nested form array, you could also add a form group initially
          timesheet: this.fb.array([

            this.fb.group({
              work: new FormControl('', Validators.required),
              startTime: new FormControl('', Validators.required),
              endTime: new FormControl('', Validators.required),
              project: new FormControl(0, Validators.required),
              remarks: new FormControl('', Validators.required),

            })

          ])
        })
      )
      i++;

    }

    this.myForm.controls.workLog.setValue(this.selectedDates);
    console.log(this.myForm.controls.workLog)


  }

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }

  //addNewProject

  addNewProject(control) {
    control.push(
      this.fb.group({
        work: new FormControl('', Validators.required),
        startTime: new FormControl('', Validators.required),
        endTime: new FormControl('', Validators.required),
        project: new FormControl('', Validators.required),
        remarks: new FormControl('', Validators.required),

      }))
  }


  //Deleting WorkLog
  deleteProject(control) {

    if (control.controls.length > 1) {

      control.removeAt(control.controls.length - 1)
    }

  }


  //Work Log Days
  returnDay(value: number): string {

    switch (value) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";

    }
  }

  // save() {
  //   var input: CreateTimesheetInput[] = [];
  //   for (var record of this.myForm.controls['workLog'].value) {
  //     for (var tSheet of record["timesheet"]) {
  //       let timesheet = new CreateTimesheetInput();
  //       timesheet.employeeNumber = 500004;
  //       timesheet.tsEndTime = tSheet['endTime'];
  //       timesheet.tsStartTime = tSheet['startTime'];
  //       timesheet.tsType = tSheet['work'];
  //       timesheet.projectId = Number(tSheet['project']);
  //       timesheet.remarks = tSheet['remarks'];
  //       timesheet.tsDate = record['startDate'].toString().split('T')[0];
  //       input.push(timesheet);

  //     }

  //   }


  //   debugger;
  //   console.log(input);
  //   this.timeManagementService.createTimeSheet(input).subscribe(res => {
  //     console.log(res);
  //   });
  // }


  //end of ngoninit
}
