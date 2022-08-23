// import { ShoppingCart } from '../../../shared/models/shopping-cart';
// import { Observable } from 'rxjs/Observable';
// import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
// import { AppUser } from '../../../shared/models/app-user';
// import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../../../../../shared/auth.service";

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  // appUser: AppUser;


  constructor(private auth: AuthService,) {
  }

  // async ngOnInit() {
  //   this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  // }

  logout() {
    this.auth.logout();
  }

  ngOnInit(): void {
  }

}
