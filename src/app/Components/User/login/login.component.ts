import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import * as firebase from 'firebase';
import {GoogleAuthProvider} from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  //Testing with Code With Mosh Method
  constructor(private afAuth: AngularFireAuth) {
  }

  //Login Method
  login(){
    // this.afAuth.signInWithRedirect(firebase.auth(GoogleAuthProvider))
  }
  signInWithGoogle() {
this.afAuth.signInWithRedirect(new GoogleAuthProvider())
  }
  // email : string = '';
  // password : string = '';
  //
  //
  // constructor(private auth : AuthService) { }
  //
  //
  // signInWithGoogle() {
  //   this.auth.googleSignIn();
  // }
  //
  //
  // login() {
  //
  //   if(this.email == '') {
  //     alert('Please enter email');
  //     return;
  //   }
  //
  //   if(this.password == '') {
  //     alert('Please enter password');
  //     return;
  //   }

    // this.auth.login(this.email,this.password);
    //
    // this.email = '';
    // this.password = '';

 // }

}
