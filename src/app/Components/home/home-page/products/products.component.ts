import { Component, OnInit } from '@angular/core';
import {Products} from "../../../../Classes/projects";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product : Products[];
  constructor() {

    this.product = [
      //Json type format
      //Use this in html if content image is not existing <img *ngIf="content?.imgURL" (click)="logId()" [src]="content?.imgURL">
      {
        image: "assets/Product-Images/sticker.png",
        shadow: "assets/Product-Images/shadow.svg",
        description: "Smart sticker with a NFC chip which allows you to quickly share your contacts ",
        button: "Add to Cart",
      },
      {
        image: "assets/Product-Images/squared-card.png",
        shadow: "assets/Product-Images/shadow.svg",
        description: "Portable customizable smart business card with a NFC chip",
        button: "ADD TO CART",
      },

      {
        image: "assets/Product-Images/combo-offer.png",
        shadow: "assets/Product-Images/shadow.svg",
        description: "Get the best deal by getting both our cards and tags",
        button: "ADD TO CART",
      },
    ]
  }

  ngOnInit(): void {
  }

}
