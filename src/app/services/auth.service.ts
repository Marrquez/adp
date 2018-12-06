import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  public data = {logged: false};
  constructor(
    public authService:AngularFireAuth,
    public router:Router
  ){
    var self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("A");
        this.data.logged = true;
      } else {
        console.log("B");
        this.data.logged = false;
      }
    }.bind(this));
  }

  /**
   * log in user with google
   * */
  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      this.authService.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        })
    })
  }

  /**
   * register user
   * */
  registerUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }

  /**
   * log in user
   * */
  loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
          this.navigate("dashboard");
        }, err => reject(err))
    })
  }

  navigate(view:string){
    this.router.navigate([view, {}]);
  }

  logoutUser(){
    firebase.auth().signOut();
    this.router.navigate(['/'])
  }
}
