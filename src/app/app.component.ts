import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './app.component.html'
})

export class AppComponent {
  public greeting:String = null;

  public loginForm = this.fb.group({
    name : ["",Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  });



  constructor(public fb: FormBuilder) {}


  doLogin(event) {
    this.greeting = "Hello "+this.loginForm.value.name+", you are registered !";
  }

}