
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {


  checkoutForm: FormGroup;


  constructor(private fb: FormBuilder, public router: Router,) {



  }



  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      emailAddr: ['', Validators.required],
      quantity: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
      items: this.fb.array([

        this.fb.group({
          itemId: ['1'],
          itemName: ['Kin'],
          itemDesc: ['Sree'],
          itemDone: ['', Validators.requiredTrue]

        })
      ])

    })

    // this.checkoutForm.setValue({
    //   emailAddr: "test@gmail.com",
    //   quantity: "122",
    //   terms: true

    // })
    this.checkoutForm.patchValue({
      emailAddr: "test@gmail.com",
      quantity: "122"


    })

    this.checkoutForm.get('quantity').statusChanges.subscribe(data => {
      console.log(data)
    })
    //  this.checkoutForm.statusChanges.subscribe(data =>{
    //   console.log(data)
    // })



  }

  postData() {
    console.log(this.checkoutForm.value.emailAddr)
  }
  resetForm() {
    this.checkoutForm.reset();

  }

}
