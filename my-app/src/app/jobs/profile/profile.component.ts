import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    isLinear = false;
    educationForm: FormGroup;
    highestDegreeList = [];
    submitted = false;
    currentYear: any;
    numberOfYearsList = [];
    countryList = [];
    certificationForm: FormGroup;


    secondFormGroup: FormGroup;
    showCertifications: boolean;



    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.EducationForm();
        this.iCertificationForm();

    }


    newEduDetails(): FormGroup {
        return this.fb.group({
            highestDegree: ['', Validators.required],
            major: ['', Validators.required],
            numberOfYears: ['', Validators.required],
            yearDegreeReward: ['', [Validators.required, Validators.minLength(4), Validators.max(this.currentYear)]],
            instituteName: ['', Validators.required],
            countryAwarded: ['', Validators.required],
        })
    }
    educationalArray(): FormArray {
        return this.educationForm.get("educationalArray") as FormArray
    }
    EducationForm() {
        this.educationForm = this.fb.group({
            educationalArray: this.fb.array([
                this.newEduDetails()
            ]),
        })
    }

    // this.secondFormGroup = this.formBuilder.group({
    //     secondCtrl: ['', Validators.required]
    // });
    addEducationDetails() {
        this.educationalArray().push(this.newEduDetails());
    }

    removeEducationalDetails() {

    }

    addCertications() {
        this.showCertifications = true;
        const control = this.certificationForm.controls.certificationsInfo as FormArray;
        if (control.length === 0) {
            control.push(this.certificationDetails());
        }
    }

    // certification
    certificationDetails() {
        return this.fb.group({
            certificationName: ['', [Validators.required]],
            issuedOn: ['', [Validators.required]],
            issuedBy: ['', [Validators.required]],
            certificationUrl: ['',]
        })



    }
    certificationsInfo(): FormArray {
        return this.certificationForm.get("certificationsInfo") as FormArray
    }

    iCertificationForm() {
        this.certificationForm = this.fb.group({
            certificationsInfo: this.fb.array([
                this.certificationDetails()
            ])
        })
    }


}


