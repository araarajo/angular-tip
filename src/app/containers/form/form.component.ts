import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  age = new FormControl(20, Validators.required);
  city = new FormControl('Nodia');
  country = new FormControl({ value: 'India', disabled: true });
  married = new FormControl(true);

  constructor() {
    this.name.valueChanges
      .subscribe(res => {
        if ( res !== '' && res.length > 15 ) {
          this.name.setValue((res.slice(0, 15)));
        }
      });
  }

  setNameValue() {
    this.name.setValue('Donald Trump');
    console.log('Name: ', this.name.value);
    console.log('Validation Status: ', this.name.status);
  }

  setResetName() {
    this.name.reset();
  }

  changeValue() {
    console.log(this.married.value);
    this.married = new FormControl(!this.married.value);
  }

}
