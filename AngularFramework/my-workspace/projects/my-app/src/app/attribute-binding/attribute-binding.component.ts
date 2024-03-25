import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  standalone: true,
  imports: [],
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.css'
})
export class AttributeBindingComponent {
   product:any={
    productId:101,
    productName:"Mobile",
    stock:true,
    price:120000
   };
   tableHeight:number=100;
   tableWidth:number=500;
   tableBorder:number=2;
}
