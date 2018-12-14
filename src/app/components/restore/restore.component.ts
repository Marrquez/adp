import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

/**
 * services
 * */
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss']
})
export class RestoreComponent implements OnInit {
  private errorMessage = "";
  private successMessage = "";
  private recoverForm = new FormGroup({
    email: new FormControl()
  });
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  sendEmail(value){
    if(value.status === "VALID"){
      this.errorMessage = "";
      this.authService.resetEmail(value.value.email)
        .then(() => {
          this.successMessage = "Un correo electrónico de recuperación ha sido enviado";
        }).catch(_error => {
        this.errorMessage = _error;
      });
    }else{
      this.successMessage = "";
      this.errorMessage = "El email debe ser valido.";
    }

  }

  navigate(view:string){
    this.authService.navigate(view);
  }
}
