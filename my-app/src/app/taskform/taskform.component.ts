import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {

name = 'Ford';
model ='Nova';

  ngOnInit() {

  }

}