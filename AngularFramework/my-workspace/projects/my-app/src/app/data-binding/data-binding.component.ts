import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //Model
  public product={
    productId:10,
    productName:"Netflix",
    isAvailable:true,
    imageUrl:'assets/netflix-background.jpg'
  }
}
