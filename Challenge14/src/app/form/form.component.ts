import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface User {
  username?: string;
  email?: string;
  password?: string;
  location?: string
}

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

  user: User = {}
  newUser = false

  username = new FormControl('')
  email = new FormControl('')
  password = new FormControl('')
  location = new FormControl('')


  onSubmit(): void {
    // form submitted
    this.newUser = !this.newUser

    const usernameValue = this.username.value as string
    const emailValue = this.email.value as string
    const passwordValue = this.password.value as string
    const locationValue = this.location.value as string

    this.user.username = usernameValue
    this.user.email = emailValue
    this.user.password = passwordValue
    this.user.location = locationValue

    // this.user = {
    //   username: usernameValue,
    //   email: emailValue,
    //   password: passwordValue,
    //   location: locationValue
    // };

    console.log(this.user)


  }

}
