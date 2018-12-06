import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public data = {logged: false, email: ''};
  authState: any = null;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe((auth) => {
      if(auth){
        this.authState = auth;
        this.data.logged = true;
        this.data.email = auth.email;
      }else{
        this.authState = null;
        this.data.logged = false;
        this.data.email = "";
      }
    });
  }

  signUpWithEmail(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  loginWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((data) => {
        //this.authState = data;
        //this.data.email = data.user.email;
      })
      .catch(error => {
        //console.log(error)
        //this.data.email = '';
        throw error
      });
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/'])
  }

  navigate(view:string){
    this.router.navigate([view]);
  }
}
