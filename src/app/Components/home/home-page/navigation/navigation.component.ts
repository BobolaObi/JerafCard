import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  currentUser: firebase.User | any

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(userName => this.currentUser = userName );
}

  ngOnInit(): void {
  }

  logout() {
this.afAuth.signOut();
  }
}
