import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';


//Component Imports
import {ProductsComponent} from "./Components/home/home-page/products/products.component";
import { FooterComponent } from './Components/home/home-page/footer/footer.component';
import { HeaderComponent } from './Components/home/home-page/header/header.component';
import { StayConnectedComponent } from './Components/home/home-page/stay-connected/stay-connected.component';
import { TutorialComponent } from './Components/home/home-page/tutorial/tutorial.component';
import { NavigationComponent } from './Components/home/home-page/navigation/navigation.component';
import { MyOrdersComponent } from './Components/User/my-orders/my-orders.component';
import { HomePageComponent } from './Components/home/home-page/home-page.component';
import { LoginComponent } from './Components/User/login/login.component';
import {  routingComponents } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from "@angular/fire/compat";
import {FormsModule} from "@angular/forms";
import {BsNavbarComponent} from './Components/home/home-page/navigation/bs-navbar/bs-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    HeaderComponent,
    StayConnectedComponent,
    TutorialComponent,
    NavigationComponent,
    BsNavbarComponent,
    MyOrdersComponent,
    HomePageComponent,
    LoginComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
