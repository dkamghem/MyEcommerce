import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    {
      name: '1,108,815 Tv Images, Stock Photos & Vectors',
      description: 'Unlock multidimensional speed in adidas X Speedportal. Additional forefoot studs on the lightweight outsole of these soccer cleats ensure rapid reactions on firm ground.',
      image: '/assets/download.jpg',
      price: 399.99
    },
  ];
}
