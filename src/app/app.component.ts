import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public loginForm = this.fb.group({
    name : ["",Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(public fb: FormBuilder) {}

  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.name);

    var greeting = "Hello "+this.loginForm.value.name+", you are registered !";

    console.log("greeting: ", greeting);
  }
}