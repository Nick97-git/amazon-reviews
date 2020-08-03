import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication/authentication.service";
import {UserRegistrationDto} from "../model/user-registration-dto";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup
  errors: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

  get getInput() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    let user = new UserRegistrationDto(this.getInput.login.value,
      this.getInput.password.value, this.getInput.repeatPassword.value)
    this.authenticationService.register(user).subscribe(
      () => this.router.navigate(['login']),
      error => this.errors = error);
  }
}
