import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

/**
 * services
 * */
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private errorMessage = "";
  private successMessage = "";
  private loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private authService:AuthService) { }

  ngOnInit() {}

  loginUser(value){
    this.authService.loginUser(value).then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "The user has been logged in";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
}
