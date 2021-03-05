import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  pageTitle: string = 'ACNE';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }


  
     

  
}
