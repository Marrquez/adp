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
  private formType:string = 'Ingreso';
  private loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private authService:AuthService) { }

  ngOnInit() { }

  loginUser(value){
    this.authService.loginWithEmail(value.email, value.password)
      .then(() => {
        this.authService.navigate("dashboard")
      }).catch(_error => {
        this.errorMessage = _error;
        this.authService.navigate('/');
      });
  }

  registerUser(value){
    this.authService.signUpWithEmail(value.email, value.password)
      .then(() => {
        this.authService.navigate("dashboard")
      }).catch(_error => {
      this.errorMessage = _error;
      this.authService.navigate('/');
    });
  }

  showRegisterForm(){
    this.formType = 'Registro';
  }

  goBack(){
    this.formType = 'Ingreso';
  }

  navigate(view:string){
    this.authService.navigate(view);
  }

  logoutUser(){
    this.authService.signOut();
  }
}
