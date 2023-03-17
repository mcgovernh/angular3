import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public myform: FormGroup;
  public errorMessage: string = '';

  form_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
    ],
    'confpass': [
      { type: 'required', message: 'Confirm password is required.' },
    ],
    'number': [
      { type: 'required', message: 'Mobile number is required.' },
    ]
  };

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myform = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confpass: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      add1: new FormControl(''),
      add2: new FormControl(''),
      postcode: new FormControl(''),
      state: new FormControl('')
    });
  }

  onSubmit(values: any) {
    console.log(values);
  }

}
