import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  public data = {logged: false};
  constructor(public authService:AngularFireAuth){
    var self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("A");
        self.data.logged = true;
      } else {
        console.log("B");
        self.data.logged = false;
      }
    });
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
        }, err => reject(err))
    })
  }
}
