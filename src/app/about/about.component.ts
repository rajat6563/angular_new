import { Component } from '@angular/core';

@Component({
  selector : 'app-about',
  templateUrl : './about.component.html'
})
export class AboutComponent {
  formObject: any = {fname: '', lname: '', email: '', contact: '', scantact: '', address: '', accno: '' };
  displayObj = {};
  error1: boolean;
  error: boolean;

  addRegistration() {
    this.displayObj = {};
    console.log('inside addRegistration.............');
    console.log('this.formObject.lname..........', this.formObject.lname);
    console.log('this.formObject.lname..........', typeof this.formObject.lname);
    console.log('this.formObject.lname..........', this.formObject.lname === '');
    if (this.formObject.fname === '' || this.formObject.lname === '' || this.formObject.email === '' || this.formObject.contact === '' ||
     this.formObject.scontact === '' || this.formObject.address === '' || this.formObject.accno === ''
      ||  this.formObject.bgroup === '' || this.formObject.ifsc === '') {
      console.log(this.formObject.error);
      this.error = true;
      return;
    }
    this.displayObj = JSON.parse(JSON.stringify(this.formObject));
    this.error = false;
  }
}
