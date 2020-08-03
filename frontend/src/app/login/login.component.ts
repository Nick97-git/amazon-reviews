import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../service/authentication/authentication.service";
import {Router} from "@angular/router";
import {UserLoginDto} from "../model/user-login-dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  token: string;
  errors: string;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get getInput() {
    return this.loginForm.controls;
  }

  onSubmit() {
    let user = new UserLoginDto(this.getInput.login.value,
      this.getInput.password.value)
    this.authenticationService
      .login(user)
      .subscribe((res: string) => {
        this.token = res['token']
        this.router.navigate(['main'])
      }, error => this.errors = error);
  }
}
