import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    productId: number=10;
    productName:string='OnePlus Mobile'
    productPrice:number=43000
    productQty:number=4
}
