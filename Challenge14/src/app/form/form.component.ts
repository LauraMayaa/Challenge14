import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  // username = new FormControl('');
  // email = new FormControl('');

  // changeUsername() {
  //   this.username.setValue('koko')
  // }

  newUser = false

  username = new FormControl('')
  email = new FormControl('')
  password = new FormControl('')
  location = new FormControl('')

  onSubmit(): void {
    // form submitted
    console.log('Formulaire envoyé !');
    this.newUser = !this.newUser
  }

}
