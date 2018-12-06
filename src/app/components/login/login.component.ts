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
    this.authService.loginWithEmail(value.email, value.password)
      .then(() => {
        this.authService.navigate("dashboard")
      }).catch(_error => {
        this.errorMessage = _error;
        this.authService.navigate('/');
      });
  }
}
